import { IonList, IonItem, IonLabel, IonButton } from "@ionic/react";
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
}

const ListarClientes: React.FC<Props> = ({oVoltar}) => {
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
        buscarClientes();

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
                    <IonButton color="warning" onClick={() => editClientes(c.id, c.nome, c.telefone, c.endereco)}>Editar</IonButton>
                    <IonButton color="secondary" onClick={() => deletClientes(c.id)}>Deletar</IonButton>
                </IonItem>
            ))}
        </IonList>
    </>
    )
};

export default ListarClientes