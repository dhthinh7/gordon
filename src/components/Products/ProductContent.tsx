import React, {
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { tabsProductDetail } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { TProduct } from "@/lib/models";
import useParentUrl from "@/hooks/useParentUrl";

type TProductContent = {
  activeTab: number;
  product?: TProduct;
  onTabChange: (tab: number) => void;
};

const ProductContent = ({
  activeTab,
  product,
  onTabChange,
}: TProductContent) => {
  const refFirstTab = useRef<HTMLButtonElement>(null);

  const [lineBoundingClient, setLineBoundingClient] = useState<DOMRect>();

  const handleTabClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>, tab: number) => {
      setLineBoundingClient(e.currentTarget.getBoundingClientRect());
      onTabChange(tab);
    },
    [onTabChange]
  );

  useEffect(() => {
    if (refFirstTab.current) {
      setLineBoundingClient(refFirstTab.current.getBoundingClientRect());
      onTabChange(0);
    }
  }, [onTabChange]);

  return (
    <section className="flex flex-col gap-10">
      <div className="tabs flex gap-10 relative py-[10px]">
        {tabsProductDetail.map((tab, index) => {
          return (
            <button
              ref={index === 0 ? refFirstTab : null}
              key={tab.tab_name}
              onClick={(e) => handleTabClick(e, index)}
              className={cn(
                "font-semibold leading-6 uppercase text-lg transition-all duration-300 min-w-40 py-[15px]",
                activeTab === index
                  ? "text-title-tab"
                  : "opacity-50 text-text-title"
              )}
            >
              {tab.tab_name}
            </button>
          );
        })}

        <div
          className="line absolute h-1 w-0 bottom-0 left-0 bg-red-500 transition-all duration-300"
          style={{
            left: `${lineBoundingClient?.left || 0}px`,
            width: `${lineBoundingClient?.width || 0}px`,
          }}
        ></div>
      </div>

      <div className="tab-content">
        {tabsProductDetail.map((tab, index) => {
          return (
            <div
              key={tab.tab_name}
              className={cn(
                "tab-pane transition-all duration-1000",
                activeTab === index ? "block" : "hidden"
              )}
            >
              <h3>{tab.tab_value}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductContent;
