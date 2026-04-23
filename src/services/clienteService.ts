
const API = "https://sistemamanutencaoapp.onrender.com";


//CADASTRAR USUARIO

export async function registerUser(nome: string, email: string, senha: string, perfil: string) {
    const res = await fetch(`${API}/auth/registrar`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({nome, email, senha, perfil})
    })

    return await res.json();
    
}

// LOGIN USUARIO 

export async function loginUser(email: string, senha: string) {
    const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, senha})
    });

    if(!res.ok) throw new Error("Email ou senha inválidos!");

    return await res.json()
}

// CADASTRAR CLIENTE
export async function cadastrarCliente(nome: string, telefone: string, endereco: string) {

    await fetch(`${API}/clientes`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
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