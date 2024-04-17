import {Dispatch, SetStateAction} from "react";

interface PagesProps {
  currentPage: number;
  setPage:  Dispatch<SetStateAction<number>>;
}

export default function Pages({currentPage, setPage}: PagesProps) {
  return (
    <div className={"w-full flex justify-center gap-8 font-semibold text-white mb-5 text-sm"}>
      <button className={"bg-[#373737] py-1 px-3 rounded-lg uppercase hover:opacity-80 duration-100"}
              onClick={() => {
                if (currentPage === 1) return;
                setPage(currentPage - 1)
              }}>Voltar</button>
      <button className={"bg-[#373737] py-1 px-3 rounded-lg uppercase hover:opacity-80 duration-100"}
              onClick={() => setPage(currentPage + 1)}>Próximo</button>
    </div>
  )
}