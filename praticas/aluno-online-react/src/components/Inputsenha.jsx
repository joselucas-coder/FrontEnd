export default function InputSenha() {
  return (
    <fieldset className="flex flex-col mb-4 w-full border-none p-0 m-0">
      <label htmlFor="password" className="mb-[0.4rem] font-medium text-base text-gray-800">
        Senha
      </label>
      <input 
        type="password" 
        id="password" 
        name="password" 
        className="px-3 py-2 border border-[#ccc] rounded text-base transition-colors focus:outline-none focus:border-[#949ea8]"
      />
      <span className="hidden text-[#cb2525] text-[0.95rem] mt-1 font-medium">
        Senha incorreta
      </span>
    </fieldset>
  );
}