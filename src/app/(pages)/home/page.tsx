"use client"
import Header from "@/app/components/Header";
import ProductsList from "@/app/components/ProductsList";
import {useState} from "react";
import {Product} from "@/app/interfaces/product";
import CartList from "@/app/components/CartList";
import Pages from "@/app/components/Pages";

export interface ProductCart extends Product { qnt: number }

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [cart, setCart] = useState<ProductCart[]>([]);
  const [openCart, setOpenCart] = useState<boolean>(false);

  const qntProducts = cart.reduce((total, product) => total + product.qnt, 0)

  function onAddToCart(product: Product) {
    if (cart.find(x => x.id === product.id)) {
      setCart(
        cart.map(item =>
          item.id === product.id ? { ...item, qnt: item.qnt + 1 } : item
        )
      );
      return;
    }

    setCart([...cart, {...product, qnt: 1}])
  }

  function onRemoveFromCart(idProduct: number) {
    setCart(cart.filter(x => x.id !== idProduct));
  }

  function onChangeQnt(idProduct: number, remove?: boolean) {
    if (remove && cart.find(x => x.id === idProduct)?.qnt === 1) {
      setCart(cart.filter(x => x.id !== idProduct));
      return;
    }

    setCart(
      cart.map(item =>
        item.id === idProduct ? { ...item, qnt: remove ? item.qnt - 1 : item.qnt + 1 } : item
      )
    );
  }

  return (
    <div className={"h-screen flex flex-col"}>
      <Header qntProducts={qntProducts} toggleCart={() => setOpenCart(!openCart)} />
      <ProductsList onAddToCart={onAddToCart} page={page} />
      <Pages currentPage={page} setPage={setPage} />
      <CartList open={openCart}
                cart={cart}
                toggleCart={() => setOpenCart(!openCart)}
                onChangeQnt={onChangeQnt}
                onRemoveFromCart={onRemoveFromCart} />
    </div>
  )
}