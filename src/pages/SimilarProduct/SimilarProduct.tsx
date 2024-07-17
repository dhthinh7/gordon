import React, { useEffect } from "react";
import Products from "@/components/Products/Products";
import useParentUrl from "@/hooks/useParentUrl";
import useFetchProductsData from "@/hooks/useFetchProductsData";
import { TProduct } from "@/lib/models";
import { Button } from "@/components/Shared/Button";

type TSimilarProduct = {
  onGetSimilarProduct?: (products: TProduct[]) => void;
};

const SimilarProduct = ({ onGetSimilarProduct }: TSimilarProduct) => {
  const { parentQueryParams } = useParentUrl();
  const { products, loading } = useFetchProductsData({});

  useEffect(() => {
    onGetSimilarProduct && onGetSimilarProduct(products);
  }, [onGetSimilarProduct, products]);

  return (
    <section className="w-full">
      {/* <div className="flex flex-col gap-[30px]">
        <div className="uppercase flex justify-between items-center">
          <div className="text-text-title">
            <p className="text-lg font-semibold leading-6">Recently view</p>
            <h2 className="font-antique text-[44px] font-medium leading-[44px]">
              Similar Products
            </h2>
          </div>
          <Button link="/" labelText="VIEW ALL" />
        </div> */}

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <Products
          className="-mx-[13px]"
          productList={products}
          classNameItem="w-1/4 p-[13px]"
          pageSize={4}
        />
      )}
      {/* </div> */}
    </section>
  );
};

export default SimilarProduct;
