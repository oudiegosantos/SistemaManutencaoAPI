import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonList, IonButton } from "@ionic/react";
import React, { useState } from "react";
import { loginUser } from "../services/clienteService";


interface Props {
    onLogin: (token: string, nome: string, perfil: string) => void;
}

const login: React.FC<Props> = ({onLogin}) => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function hdeLogin() {
        if(!email || !senha) {
            alert("Preencha todos os campos!");
            return
        }

        const res = await loginUser(email, senha);

        if(res.token) {
            onLogin(res.token, res.nome, res.perfil);
        }
        else {
            alert("Email ou senha incorretos!");
        }
    }


return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Metalúrigica Montenegro</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList>
                <IonItem>
                    <IonInput label="Email" value={email} onIonChange={e => setEmail(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="Senha" value={senha} onIonChange={e => setSenha(e.detail.value!)}></IonInput>
                </IonItem>
            </IonList>
            <IonButton onClick={hdeLogin}>Entrar</IonButton>
        </IonContent>

    </IonPage>
)
  
}



export default login