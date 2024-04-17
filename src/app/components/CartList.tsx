import {ProductCart} from "@/app/(pages)/home/page";
import {IoClose} from "react-icons/io5";
import Image from "next/image";

interface CartProps {
  open: boolean;
  cart: ProductCart[]
  toggleCart: () => void;
}

export default function Cart({open, cart, toggleCart}:CartProps) {
  if(!open) return <></>;

  return (
    <div className={"h-screen w-[500px] absolute right-0 top-0 bg-[#0F52BA] p-10"}>
      <div className={"flex justify-between items-center mb-10"}>
        <p className={"text-3xl text-white font-semibold"}>Carrinho de compras</p>
        <button className={"bg-black rounded-full p-1 hover:scale-95 duration-200"} onClick={() => toggleCart()}>
          <IoClose size={22} color={"white"}/>
        </button>
      </div>
      <div className={"flex flex-col gap-6"}>
        {cart.map((product: ProductCart) => (
          <div key={product.id} className={"grid grid-cols-12 gap-3 items-center justify-between bg-white h-[100px] px-6 rounded-lg"}>
            <div className={"flex items-center gap-4 col-span-6"}>
              <Image src={product.photo} alt={product.name} width={60} height={60} />
              <p className={"text-sm"}>{product.name}</p>
            </div>
            <div className={"col-span-3 flex justify-center"}>
              <div className={"flex items-center border rounded-md overflow-hidden font-semibold"}>
                <button className={"px-1.5 hover:bg-slate-200"}>-</button>
                <p className={"border-x text-xs px-1.5"}>{product.qnt}</p>
                <button className={"px-1.5 hover:bg-slate-200"}>+</button>
              </div>
            </div>
            <span className={"font-bold text-sm flex justify-end col-span-3"}>R${product.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}