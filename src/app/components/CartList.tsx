"use client";
import {ProductCart} from "@/app/(pages)/home/page";
import {IoClose} from "react-icons/io5";
import CartDiv from "@/app/components/CartDiv";

interface CartProps {
  open: boolean;
  cart: ProductCart[]
  toggleCart: () => void;
  onChangeQnt: (idProduct: number, remove?: boolean) => void;
  onRemoveFromCart: (idProduct: number) => void;
}

export default function CartList({open, cart, toggleCart, onChangeQnt, onRemoveFromCart}:CartProps) {
  if(!open) return <></>;

  const total = cart.reduce((total, product) => total + (Number(product.price) * product.qnt), 0);

  return (
    <div className={"h-screen w-[500px] absolute right-0 top-0 bg-[#0F52BA] shadow-[1px_0px_8px_rgb(0,0,0)] flex flex-col justify-between"}>
      <div className={"flex flex-col justify-between"}>
        <div className={"flex justify-between items-center h-[100px] px-10"}>
          <p className={"text-3xl text-white font-semibold"}>Carrinho de compras</p>
          <button className={"bg-black rounded-full p-1 hover:scale-95 duration-200"} onClick={() => toggleCart()}>
            <IoClose size={22} color={"white"}/>
          </button>
        </div>
        <div className={"h-[calc(100vh-300px)] px-10 overflow-y-auto"}>
          <div className={"flex flex-col gap-6 p-1"}>
            {cart.map((product: ProductCart) => (
              <CartDiv key={`cart-${product.id}`} product={product} onChangeQnt={onChangeQnt} onRemoveFromCart={onRemoveFromCart} />
            ))}
          </div>
        </div>
        <div className={"text-white text-2xl flex justify-between items-center font-bold h-[100px] px-10 bg-[#0F52BA]"}>
          <p>Total:</p>
          <p>R${total}</p>
        </div>
      </div>
      <button className={"bg-black text-white w-full h-[100px] text-2xl font-bold"}>Finalizar Compra</button>
    </div>
  )
}