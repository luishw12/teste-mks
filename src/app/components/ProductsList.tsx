"use client";
import {Product} from "@/app/interfaces/product";
import ProductDiv from "@/app/components/ProductDiv";
import {ReactNode, useEffect, useState} from "react";
import ProductSkeleton from "@/app/components/ProductSkeleton";

interface ProductsListProps {
  page?: number;
  rows?: number;
  sortBy?: "id" | "name" | "price";
  orderBy?: "DESC" | "ASC";
  onAddToCart: (product: Product) => void;
}

export default function ProductsList({page = 1, rows = 8, sortBy = "id", orderBy = "DESC", onAddToCart}: ProductsListProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const params = new URLSearchParams({
      page: page.toString(),
      rows: rows.toString(),
      sortBy,
      orderBy
    })

    fetch(`https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?${params}`)
      .then(res => res.json())
      .then(json => setProducts(json.products))
      .finally(() => setLoading(false))
  }, [page]);

  function Products({children}: {children: ReactNode}) {
    return (
      <div className={"flex flex-1 items-center justify-center"}>
        <div className={"grid grid-cols-4 w-[1200px] gap-4"}>
          {children}
        </div>
      </div>
    )
  }

  if (loading) return (
    <Products>
      {Array(8).fill(null).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </Products>
  )

  return (
    <Products>
      {products.map((product) => (
        <ProductDiv key={`product-${product.id}`} product={product} onAddToCart={onAddToCart}/>
      ))}
    </Products>
  )
}