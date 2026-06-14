const BASE_URL = 'http://localhost:3000/requerimentos';

const obterConfiguracaoComToken = () => {
    const token = localStorage.getItem('@AlunoOnline:token');
    
    if (!token) {
        localStorage.removeItem('@AlunoOnline:token');
        localStorage.removeItem('@AlunoOnline:usuario');
        window.location.reload(); 
        throw new Error('401 - Não autorizado');
    }

    return token;
};

export const listarRequerimentos = async () => {
    const token = obterConfiguracaoComToken();

    const response = await fetch(BASE_URL, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) throw new Error('Erro ao buscar os dados');
    return await response.json();
};

export const criarRequerimento = async (dados) => {
    const token = obterConfiguracaoComToken();

    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(dados)
    });

    if (!response.ok) throw new Error('Erro ao salvar os dados');
    return await response.json();
};