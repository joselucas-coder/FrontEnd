import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';

export default function RequerimentoForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Novo Requerimento Registrado:", data);
    reset(); 
    alert("Requerimento salvo com sucesso!");
    navigate("/requerimentos"); 
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FFFFFF] font-sans">
      <div className="flex flex-col flex-1 p-6 md:p-10">
        <Header titulo="Novo Requerimento" />

        <main className="mt-6 max-w-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">Tipo de Requerimento</label>
              <select 
                {...register("tipo", { required: "O Tipo de Requerimento é obrigatório." })}
                className="border border-gray-300 p-3 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecione uma opção</option>
                <option value="Revisão de Menção">Revisão de Menção</option>
                <option value="Dispensa de Disciplina">Dispensa de Disciplina</option>
                <option value="Trancamento de Matrícula">Trancamento de Matrícula</option>
                <option value="Mudança de Turno">Mudança de Turno</option>
              </select>
              {errors.tipo && <span className="text-red-500 text-sm mt-1">{errors.tipo.message}</span>}
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">Descrição</label>
              <textarea 
                {...register("descricao", { 
                  required: "A descrição é obrigatória.",
                  minLength: { value: 10, message: "A descrição deve ter no mínimo 10 caracteres." }
                })}
                rows="5"
                placeholder="Descreva o motivo da sua solicitação..."
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.descricao && <span className="text-red-500 text-sm mt-1">{errors.descricao.message}</span>}
            </div>

            <button 
              type="submit" 
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition w-40"
            >
              Salvar
            </button>

          </form>
        </main>
      </div>
    </div>
  );
}