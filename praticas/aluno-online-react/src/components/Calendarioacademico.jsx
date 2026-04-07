export default function Calendarioacademico() {
  return (
    <div className="border border-[#d7d7d7] rounded-lg overflow-hidden bg-white">
      <div className="bg-[#f0f0f0] px-4 py-3 text-[1.1rem] font-bold text-gray-800">
        Calendário Acadêmico
      </div>
      <ul className="p-4 flex flex-col gap-2 text-[0.95rem] text-gray-800">
        <li>23/02 - Início do período letivo 2026-1</li>
        <li>25/04 - Prazo final para aplicação da P1</li>
        <li>23/06 - Prazo final para aplicação da P2</li>
        <li>04/07 - Fim do período letivo 2026-1</li>
      </ul>
    </div>
  );
}