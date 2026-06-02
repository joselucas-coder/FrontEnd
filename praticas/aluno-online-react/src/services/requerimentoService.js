const BASE_URL = 'http://localhost:3000/requerimentos';

export const listarRequerimentos = async () => {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Erro ao buscar os dados');
    return await response.json();
};

export const criarRequerimento = async (dados) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    });
    if (!response.ok) throw new Error('Erro ao salvar os dados');
    return await response.json();
};