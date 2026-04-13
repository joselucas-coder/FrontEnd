import InputEmail from '../components/Inputemail';
import InputSenha from '../components/Inputsenha';
import BotaoEntrar from '../components/Botaoentrar';
import Footer from '../components/Footer';

export default function Login() {
  
  const handleFazerLogin = (evento) => {
    evento.preventDefault(); 
    alert("Layout de Login finalizado! Troque a página no App.jsx para ver o Dashboard.");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4 bg-white p-4 font-sans">
      <main className="flex flex-col items-center bg-white rounded-lg px-6 py-8 w-full max-w-[400px] gap-2 border-[1.5px] border-[#d7d7d7]">
        <img src="/learn.svg" alt="Logo Aluno Online" className="w-[100px] h-[100px]" />
        <h1 className="text-[2.2rem] font-bold mb-3 text-gray-800">Aluno Online</h1>

        <form className="w-full flex flex-col gap-0" onSubmit={handleFazerLogin} noValidate>
          <InputEmail />
          <InputSenha />
          <BotaoEntrar />
        </form>
      </main>
      <Footer /> 
    </div>
  );
}