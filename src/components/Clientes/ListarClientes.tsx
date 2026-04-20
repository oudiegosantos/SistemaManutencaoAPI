import { IonList, IonItem, IonLabel, IonButton, IonIcon } from "@ionic/react";
import {trashOutline, createOutline} from "ionicons/icons"
import React, { useEffect, useState }  from "react";
import { deletarClientes, editarClientes, listarClientes } from "../../services/clienteService";

interface Cliente {
    id: number;
    nome: string;
    telefone: string;
    endereco: string;
}

interface Props {
    oVoltar: () => void;
    atualizar: number
}

const ListarClientes: React.FC<Props> = ({oVoltar, atualizar}) => {

    useEffect(() => {
        buscarClientes();
    }, [atualizar]);

    const [clientes, setClientes] = useState<Cliente[]>([]);

    async function buscarClientes() {
        const dados = await listarClientes();
        setClientes(dados);
    }

    async function editClientes(id: number, nome: string, telefone: string, endereco: string) {
        const novoNome = prompt("Digite o novo nome: ", nome) ?? nome;
        const novoTelefone = prompt("Digite o novo telefone: ", telefone) ?? telefone;
        const novoEndereco = prompt("Digite o novo endereço: ", endereco) ?? endereco;

        await editarClientes(id, novoNome, novoTelefone, novoEndereco);
        //buscarClientes();

    }

    async function deletClientes(id: number) {
         if(!confirm("Deseja excluir o cliente? "))
        return;
         await deletarClientes(id)
         buscarClientes();
    }

    useEffect(() => {
        buscarClientes();
    }, []);

    return(
    <>
        <IonButton expand="block" color="medium" onClick={oVoltar}>Voltar</IonButton>
        <IonList>
            {clientes.map(c => (
                <IonItem key={c.id}>
                    <IonLabel>
                        <p>Nome: {c.nome}</p>
                        <p>Contato: {c.telefone}</p>
                        <p>Endereço: {c.endereco}</p>
                    </IonLabel>
                    <IonButton color="warning" onClick={() => editClientes(c.id, c.nome, c.telefone, c.endereco)}>
                    <IonIcon icon={createOutline} slot="icon-only"/>
                    </IonButton>
                    <IonButton color="secondary" onClick={() => deletClientes(c.id)}>
                    <IonIcon icon={trashOutline} slot="icon-only"/> 
                    </IonButton>
                </IonItem>
            ))}
        </IonList>
    </>
    )
};

export default ListarClientes