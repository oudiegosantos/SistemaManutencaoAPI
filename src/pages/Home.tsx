import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonList, IonButton } from "@ionic/react";
import React, { useState } from "react";
import CadastrarCliente from "../components/Clientes/CadastrarCliente";
import ListarClientes from "../components/Clientes/ListarClientes";
import { listarClientes } from "../services/clienteService";
import "./Home.css";

const Home: React.FC = () => {

  const [tela, setTela] = useState("");
  const [atualizar, setAtualizar] = useState(0);
  return (
    <IonPage>
      <IonHeader>
        {/* <IonToolbar>
         <IonTitle>Metalúrgica Montenegro</IonTitle>
        </IonToolbar> */}
      </IonHeader>
      <IonContent>
 {tela === "" && (

  <div className="home-container">
    <div className="title-logo">Metalúrgica Montenegro</div>
      <IonButton className="button-cad" expand="block" onClick={() => setTela("cadastrar")}>Cadastrar</IonButton>
      <IonButton className="button-list" expand="block" onClick={() => setTela("listar")}>Listar Clientes</IonButton>

  </div>
  )}
    
  {tela === "cadastrar" && <CadastrarCliente oVoltar={() => setTela("")} />}
  {tela === "listar" && (
    <>
    <ListarClientes oVoltar={() => setTela("")} atualizar={atualizar}/>
    <IonButton onClick={() => setAtualizar(a => a + 1)}>Atualizar lista</IonButton>
    </>
  )}
   
      </IonContent>
    </IonPage>
  );
};

export default Home