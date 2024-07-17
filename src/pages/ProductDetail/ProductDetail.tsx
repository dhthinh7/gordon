import React, { useEffect, useState } from "react";
import ProductBriefing from "@/components/Products/ProductBriefing";
import ProductContent from "@/components/Products/ProductContent";
import { Button } from "@/components/Shared/Button";
import SimilarProduct from "../SimilarProduct/SimilarProduct";
import useFetchProductsData from "@/hooks/useFetchProductsData";
import { EPostMessageType } from "@/lib/enum";
import { TProduct } from "@/lib/models";
import { usePostMessage } from "@/hooks/usePostMessage";

export default function ProductDetail() {
  const { handleSendMessage } = usePostMessage();
  const { productDetail } = useFetchProductsData({
    productId: "123",
  });

  const [activeTab, setActiveTab] = useState<number>(0);
  const [similarProducts, setSimilarProducts] = useState<TProduct[]>([]);
  // for (const [key, value] of queryParam.entries()) {
  //   console.log(`Display: ${key} === ${value}`);
  // }

  useEffect(() => {
    handleSendMessage(EPostMessageType.UPDATE_IFRAME_HEIGHT);
    // handleSendMessage(EPostMessageType.UPDATE_QUERY_PARAMS);
  }, [handleSendMessage, productDetail, similarProducts]);

  return (
    <section className="w-full flex flex-col">
      <div className="flex flex-col gap-10">
        <ProductBriefing product={productDetail} />
        <ProductContent
          activeTab={activeTab}
          product={productDetail}
          onTabChange={setActiveTab}
        />
      </div>
      <div className="py-[60px] border-t border-card-line flex flex-col gap-[30px]">
        <div className="uppercase flex justify-between items-center">
          <div className="text-text-title">
            <p className="text-lg font-semibold leading-6">Recently view</p>
            <h2 className="font-antique text-[44px] font-medium leading-[44px]">
              Similar Products
            </h2>
          </div>
          <Button link="/" labelText="VIEW ALL" />
        </div>
        <div>
          <SimilarProduct onGetSimilarProduct={setSimilarProducts} />
        </div>
      </div>
    </section>
  );
}
