import { IonInput, IonItem, IonList, IonButton } from "@ionic/react";
import React from "react";
import { useState } from "react";
import { cadastrarCliente } from "../../services/clienteService";

interface Props {
    oVoltar: () => void;
}

const CadastrarCliente: React.FC<Props> = ({oVoltar}) => {

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  async function hdeCadastrarCliente() {
    if(!nome ) {alert("Nome é obrigatorio!"); 
    return;}
    await cadastrarCliente(nome, telefone, endereco);
    setNome("");
    setTelefone("");
    setEndereco("");
    
  }

  return (
   <>   
        <IonButton expand="block" color="medium" onClick={oVoltar}>Voltar</IonButton>
        <IonList>
          <IonItem>
            <IonInput label="Nome" value={nome} onIonChange={e => setNome(e.detail.value!)}/>
          </IonItem>
          <IonItem>
            <IonInput label="Telefone" value={telefone} onIonChange={e => setTelefone(e.detail.value!)}/>
          </IonItem>
          <IonItem>
            <IonInput label="Endereço" value={endereco} onIonChange={e => setEndereco(e.detail.value!)}/>
          </IonItem>
        </IonList>  
        <IonButton expand="block" onClick={hdeCadastrarCliente}>Cadastrar</IonButton>
    </>
  );
};

export default CadastrarCliente