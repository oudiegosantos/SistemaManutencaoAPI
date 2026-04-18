import { Method } from "ionicons/dist/types/stencil-public-runtime";

const API = "http://localhost:5174";

// CADASTRAR CLIENTE
export async function cadastrarCliente(nome: string, telefone: string, endereco: string) {

    await fetch(`${API}/clientes`, {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify({nome, telefone, endereco})

    });

    alert("Cliente cadastrado!");
    
};

//LISTAR CLIENTES

export async function listarClientes() {
    const res = await fetch(`${API}/clientes`);
    return await res.json();
}


// EDITAR CLIENTES

export async function editarClientes(id: number, nome: string, telefone: string, endereco: string) {

    await fetch(`${API}/clientes/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({nome, telefone, endereco})
    })
    listarClientes()
}

// DELETAR CLIENTES 

export async function deletarClientes(id: number) {
    await fetch(`${API}/clientes/${id}`, {
        method: "DELETE"
    });
}