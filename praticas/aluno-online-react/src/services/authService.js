const BASE_URL = 'http://localhost:3000/usuarios';

export const loginService = async (email, senha) => {
    const response = await fetch(`${BASE_URL}?email=${email}`);
    if (!response.ok) throw new Error('Erro ao comunicar com o servidor');

    const usuarios = await response.json();

    if (usuarios.length > 0) {
        const usuario = usuarios[0];
        
        if (usuario.senha === senha) {
            const payload = { id: usuario.id, email: usuario.email, exp: Date.now() + 3600000 };
            const token = btoa(JSON.stringify(payload));
            
            return {
                usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email },
                token: token
            };
        }
    }

    throw new Error('Credenciais inválidas');
};