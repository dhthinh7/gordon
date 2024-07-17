import React from "react";
import useParentUrl from "@/hooks/useParentUrl";
import Products from "@/components/Products/Products";
import useFetchProductsData from "@/hooks/useFetchProductsData";

export const OurRangeOfProduct = () => {
  const { parentQueryParams } = useParentUrl();
  const { products, loading } = useFetchProductsData({});
  return (
    <section className="w-full">
      <p className="text-center">
        {loading ? "loading" : parentQueryParams.toString()}
      </p>
      <Products
        productList={products}
        classNameItem="w-1/4 p-[13px]"
        pageSize={4}
      />
    </section>
  );
};
