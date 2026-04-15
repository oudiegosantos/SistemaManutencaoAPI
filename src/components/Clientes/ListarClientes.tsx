import { IonList, IonItem, IonLabel, IonButton } from "@ionic/react";
import React, { useEffect, useState }  from "react";
import { listarClientes } from "../../services/clienteService";

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
                </IonItem>
            ))}
        </IonList>
    </>
    )
};

export default ListarClientes