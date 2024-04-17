"use client";
import Image from "next/image";
import {ProductCart} from "@/app/(pages)/home/page";
import {IoClose} from "react-icons/io5";

interface CartDivProps {
  product: ProductCart,
  onChangeQnt: (idProduct: number, remove?: boolean) => void;
  onRemoveFromCart: (idProduct: number) => void;
}

export default function CartDiv({product, onChangeQnt, onRemoveFromCart}:CartDivProps) {
  return (
    <div className={"grid grid-cols-12 gap-3 items-center justify-between bg-white h-[100px] px-6 rounded-lg relative"}>
      <button className={"absolute  -top-1 -right-1 bg-black rounded-full p-0.5 hover:scale-105 duration-200"} onClick={() => onRemoveFromCart(product.id)}>
        <IoClose size={12} color={"white"}/>
      </button>
      <div className={"flex items-center gap-4 col-span-6"}>
        <Image src={product.photo} alt={product.name} width={60} height={60}/>
        <p className={"text-sm"}>{product.name}</p>
      </div>
      <div className={"col-span-3 flex justify-center"}>
        <div className={"flex items-center border rounded-md overflow-hidden font-semibold"}>
          <button className={"px-1.5 hover:bg-slate-200"}
                  onClick={() => onChangeQnt(product.id, true)}>-
          </button>
          <p className={"border-x text-xs px-1.5"}>{product.qnt}</p>
          <button className={"px-1.5 hover:bg-slate-200"}
                  onClick={() => onChangeQnt(product.id, false)}>+
          </button>
        </div>
      </div>
      <span className={"font-bold text-sm flex justify-end col-span-3"}>R${product.price}</span>
    </div>
  )
}