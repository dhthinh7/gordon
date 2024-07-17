import React from "react";
import { D_PAGE_SIZE } from "@/lib/constant";
import ProductItem from "@/components/Products/ProductItem";
import { TProduct } from "@/lib/models";
import { cn } from "@/lib/utils";

type TProducts = {
  productList: TProduct[];
  pageSize?: number;
  classNameItem?: string;
  className?: string;
};

const Products = ({
  productList,
  pageSize = D_PAGE_SIZE,
  classNameItem,
  className,
}: TProducts) => {
  return (
    <section className={cn("flex flex-wrap", className)}>
      {productList.slice(0, pageSize).map((product) => {
        return (
          <div key={product.id} className={cn(classNameItem)}>
            <ProductItem product={product} />
          </div>
        );
      })}
    </section>
  );
};

export default Products;
