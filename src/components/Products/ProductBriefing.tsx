import React, { useMemo } from "react";
import ProductBriefingViewer from "./ProductBriefingViewer";
import ProductBriefingContent from "./ProductBriefingContent";
import { TProduct } from "@/lib/models";

type TProductBriefing = {
  product?: TProduct;
};

const ProductBriefing = ({ product }: TProductBriefing) => {
  const images = useMemo(() => {
    const primary = product?.primary_image_url
      ? [product.primary_image_url]
      : [];
    const secondary = product?.secondary_image_urls || [];

    return [...primary, ...secondary];
  }, [product?.primary_image_url, product?.secondary_image_urls]);

  return (
    <section className="flex items-center justify-between">
      <div className="w-1/2 pr-10">
        <ProductBriefingViewer
          images={images}
          videos={product?.video_urls ? product.video_urls : []}
        />
      </div>
      <div className="w-1/2 pl-10">
        <ProductBriefingContent />
      </div>
    </section>
  );
};

export default ProductBriefing;
