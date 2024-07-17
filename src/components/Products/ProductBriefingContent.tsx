import React from "react";

import bonfiglioli from "@/assets/img/bonfiglioli.png";
import { Button } from "../Shared/Button";
import useParentUrl from "@/hooks/useParentUrl";
import { usePostMessage } from "@/hooks/usePostMessage";
import { EPostMessageType } from "@/lib/enum";

const ProductBriefingContent = () => {
  const { parentQueryParams } = useParentUrl();
  const { count, handleSendMessage } = usePostMessage();

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="">
        <p className="text-lg font-semibold uppercase leading-6 mb-[2px]">
          gearboxes 1 {parentQueryParams.toString()}
        </p>
        <h2 className="text-[34px] font-medium capitalize text-text-title leading-9 font-antique">
          300m Industrial Planetary Gearmotors & Units
        </h2>
      </div>
      <p className="leading-[28px]">
        Bonfiglioli's 300M Series is an outstanding solution for all heavy-duty
        applications where compactness is not an option. Thanks to its modular
        design, the 300M Series can be customized to match an extremely wide
        range of applications. Bonfiglioli's expertise in planetary technology
        ensures high-quality product design and manufacturing procedures. The
        300 Series operates without unwanted downtime even in the harshest
        environments. This planetary gearbox achieves top-class flexibility
        thanks to several outputs, as well as input configurations available for
        all 20 sizes. The 300M Series can be completed with a wide range of
        electric motors entirely manufactured by Bonfiglioli.
      </p>
      <div className="h-[34px]">
        <img src={bonfiglioli} alt="bonfiglioli" className="object-contain" />
      </div>
      <Button
        labelText={`REQUEST A QUOTE ${count}`}
        className="w-fit"
        onClick={() =>
          handleSendMessage(EPostMessageType.UPDATE_QUERY_PARAMS, count + 1)
        }
      />
    </div>
  );
};

export default ProductBriefingContent;
