"use client";
import { TiShoppingCart } from "react-icons/ti";

interface HeaderProps {
  qntProducts: number;
  toggleCart: () => void;
}

export default function Header({ qntProducts = 0, toggleCart }:HeaderProps) {
  return (
    <div className="h-20 bg-blue-600 flex items-center justify-between px-[100px]">
      <div className="text-white flex items-end gap-2">
        <h2 className="font-semibold text-4xl">MKS</h2>
        <h2 className="font-light text-lg pb-1">Sistemas</h2>
      </div>
      <button
        className="bg-white flex items-center font-bold gap-2 px-4 py-2 rounded-md"
        onClick={() => toggleCart()}
      >
        <TiShoppingCart size={24} />
        <p>{qntProducts}</p>
      </button>
    </div>
  );
}
