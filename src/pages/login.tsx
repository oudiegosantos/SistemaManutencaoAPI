import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonList, IonButton, IonIcon } from "@ionic/react";
import React, { useState } from "react";
import { loginUser, registerUser } from "../services/clienteService";
import { eyeOffOutline, eyeOutline, lockClosed, lockClosedOutline, personOutline } from "ionicons/icons";
import "./Login.css"
import GerenUser from "../components/GerenciarUsuarios";

interface Props {
    onLogin: (token: string, nome: string, perfil: string) => void;
}

const login: React.FC<Props> = ({onLogin}) => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [perfil, setPerfil] = useState("");
    const [tela, setTela] = useState("");

    async function hdeLogin() {
        if(!email || !senha) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const res = await loginUser(email, senha);
            onLogin(res.token, res.nome, res.perfil)
        }
        catch (erro) {
            alert("E-mail ou senha inválidos!")
        }
       
    }

    const [mostrarSenha, setMostrarSenha] = useState(false);


return (

    <IonPage>
        <IonContent>
            {tela === "" && (
            <div className="login-container">

                <div className="login-logo">M</div>
                <div className="login-logo-texto">Metalúrgica Montenegro</div>
                <div className="login-campos">
                <IonItem className="login-campo" lines="none">
                    <IonIcon icon={personOutline} slot="start" color="medium"></IonIcon>
                    <IonInput placeholder="Email" value={email} onIonChange={e => setEmail(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem className="login-campo" lines="none">
                    <IonIcon icon={lockClosedOutline} slot="start" color="medium"></IonIcon>
                    <IonInput placeholder="Senha" 
                    type={mostrarSenha ? "text" : "password"}
                    value={senha} 
                    onIonChange={e => setSenha(e.detail.value!)}/>
                    <IonButton fill="clear" slot="end" onClick={() => setMostrarSenha(!mostrarSenha)}>
                        <IonIcon icon={mostrarSenha ? eyeOffOutline : eyeOutline}/>
                    </IonButton>
                </IonItem>
                </div>
            <IonButton className="login-btn" onClick={hdeLogin}>Entrar</IonButton>
            <IonButton className="criarConta-btn" onClick={() => setTela("cadastrarUsuario")} >Criar Conta</IonButton>

            </div>
            )}
            {tela === "cadastrarUsuario" && <GerenUser oVoltar={() => setTela("")}/>}


        </IonContent>
    </IonPage>

)  
}

export default login