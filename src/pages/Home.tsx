import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonList, IonButton } from "@ionic/react";
import React, { useState } from "react";
import CadastrarCliente from "../components/Clientes/CadastrarCliente";
import ListarClientes from "../components/Clientes/ListarClientes";

const Home: React.FC = () => {

  const [tela, setTela] = useState("");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Metalúrgica Montenegro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
 {tela === "" && (
    <>
      <IonButton expand="block" onClick={() => setTela("cadastrar")}>Cadastrar</IonButton>
      <IonButton expand="block" onClick={() => setTela("listar")}>Listar Clientes</IonButton>
    </>
  )}

  {tela === "cadastrar" && <CadastrarCliente oVoltar={() => setTela("")} />}
  {tela === "listar" && <ListarClientes oVoltar={() => setTela("")}/>}
      </IonContent>
    </IonPage>
  );
};

export default Home