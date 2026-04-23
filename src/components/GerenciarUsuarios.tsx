import React, {useState} from "react";
import { registerUser } from "../services/clienteService";
import { IonButton, IonList, IonItem, IonInput, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";

interface Props {
    oVoltar: () => void;
}

const GerenUser: React.FC<Props> = ({oVoltar}) => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState(""); 
    const [senha, setSenha] = useState(""); 
    const [perfil, setPerfil] = useState("");
    
    async function cadUser() {
        if(!nome || !email || !senha || !perfil) {
        alert("Preencha todos os campos!");
        return;
        }

        try {
            await registerUser(nome, email, senha, perfil);
            setNome("");
            setEmail("");
            setSenha("");
            setPerfil("");
            alert("Usuário cadastrado!");

        }
        catch (error) {
            alert("Erro ao cadastar usuário!");
        } 
}

return (
    
    <>
    <IonButton onClick={oVoltar}>Voltar</IonButton>
    <IonList>
    <IonItem>
        <IonInput label="Nome: " value={nome} onIonChange={e => setNome(e.detail.value!)}></IonInput>
    </IonItem>
    <IonItem>
        <IonInput label="Email: " value={email} onIonChange={e => setEmail(e.detail.value!)}></IonInput>
    </IonItem>
    <IonItem>
        <IonInput label="Senha: " value={senha} onIonChange={e => setSenha(e.detail.value!)}></IonInput>
    </IonItem>
    
    <IonItem>
        <IonLabel>Perfil</IonLabel>
        <IonSelect value={perfil} onIonChange={e => setPerfil(e.detail.value!)}>
            <IonSelectOption value="usuario">Usuário</IonSelectOption>
            <IonSelectOption value="admin">Admin</IonSelectOption>
        </IonSelect>
    </IonItem>
    </IonList>
    <IonButton expand="block" onClick={cadUser}>Cadastrar</IonButton>
    </>
)

}

export default GerenUser