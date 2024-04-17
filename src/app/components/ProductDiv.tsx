"use client";
import {Product} from "@/app/interfaces/product";
import Image from "next/image";
import {LuShoppingBag} from "react-icons/lu";

interface ProductDivProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductDiv({product, onAddToCart}: ProductDivProps) {
  return (
    <div className={"w-[280px] flex flex-col justify-between rounded-2xl overflow-hidden shadow-[0px_1px_6px_rgba(55,55,55,.4)]"}>
      <div className={"p-3 flex flex-col gap-2"}>
        <div className={"h-[180px] flex items-center justify-center"}>
          <Image src={product.photo} alt={product.name} height={180} width={180} />
        </div>
        <div className={"flex items-center justify-between"}>
          <h5 className={"text-lg font-medium"}>{product.name}</h5>
          <span className={"py-1 px-2 bg-[#373737] text-white font-bold rounded-lg"}>R${product.price}</span>
        </div>
        <p className={"text-xs"}>{product.description}</p>
      </div>
      <button className={"flex items-center justify-center gap-3 py-1 bg-[#0F52BA] text-white uppercase font-medium"}
              onClick={() => {
                onAddToCart(product)
              }}>
        <LuShoppingBag /> Comprar
      </button>
    </div>
  )
}