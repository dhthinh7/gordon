import React from "react";

import { TProduct } from "@/lib/models";
import { AppIcon } from "../AppIcons/AppIcons";
import { Button, ButtonTheme } from "../Shared/Button";

type TProductItem = {
  product: TProduct;
};

export default function ProductItem({ product }: TProductItem) {
  return (
    <div className="w-full h-full border border-card-line p-4 text-center bg-white flex flex-col gap-[15px]">
      <div className="flex items-center justify-center">
        {product.primary_image_url && (
          <img
            src={product.primary_image_url}
            alt={product.name}
            // width={200}
            // height={150}
          />
        )}
      </div>
      <div className="flex flex-col gap-[15px] flex-grow">
        <div className="flex flex-col gap-[10px] grow text-black">
          <p className="font-semibold leading-6 text-xl capitalize">
            ID:{product.id + " " + product.name}
          </p>
          <div className="flex gap-[5px] justify-center items-center text-[13px]">
            <div>
              <AppIcon
                name="checkCircle"
                className={`${
                  product.product_status !== "Unavailable"
                    ? "text-active-status"
                    : "opacity-40"
                }`}
              />
            </div>
            <p
              className={`${
                product.product_status !== "Unavailable"
                  ? "text-active-status"
                  : "opacity-40"
              }`}
            >
              {product.product_status}
            </p>
          </div>
          <p className="elipsis-4-lines text-sm">{product.short_description}</p>
        </div>

        <a href="https://www.google.com/" target="_blank">
          <Button
            theme={ButtonTheme.Outline}
            labelText="LEARN MORE"
            className="w-full py-[10px] px-[20px] uppercase"
          />
        </a>
      </div>
    </div>
  );
}
