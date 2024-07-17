import React, { useCallback, useEffect, useRef, useState } from "react";

import { TCarousel } from "@/lib/models";
import { cn } from "@/lib/utils";
import { AppIcon } from "../AppIcons/AppIcons";

type TProductCarousel = {
  data: TCarousel[];
  currentIndex: number;
  onChangeIndex?: (index: number) => void;
  className?: string;
};

const ProductCarousel: React.FC<TProductCarousel> = ({
  data,
  currentIndex = 0,
  className,
  onChangeIndex,
}: TProductCarousel) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childContainerRef = useRef<HTMLDivElement>(null);
  const childFirstRef = useRef<HTMLButtonElement>(null);
  const childLastRef = useRef<HTMLButtonElement>(null);

  const [count, setCount] = useState(0);
  const dotSlice = 2;
  const [remainSlice, setRemainSlice] = useState(0);
  const [maxSlice, setMaxSlice] = useState(0);
  const [childFirstWidth, setChildFirstWidth] = useState(0);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    if (
      parentRef.current &&
      childContainerRef.current &&
      childFirstRef.current
    ) {
      const parentBounding = parentRef.current.getBoundingClientRect();
      const childContainerBounding =
        childContainerRef.current.getBoundingClientRect();
      const childFirstBounding = childFirstRef.current.getBoundingClientRect();

      setChildFirstWidth(childFirstBounding.width);
      setMaxSlice(childContainerBounding.width - parentBounding.width);
      setRemainSlice(childContainerBounding.width - parentBounding.width);
      setOffset(
        (childContainerBounding.width - parentBounding.width) %
          childFirstBounding.width
      );
    }
  }, [data]);

  /**
   * @param {direction}
   * Handle slide carousel
   * IF direction === 1
   *  Move list item to left
   *  Check boundary condition
   *  IF remaining slice width < item width
   *    Move list item to left width max slice
   * ELSE direction !== 1
   *  Move list item to right
   * ...
   */

  const handleSlice = useCallback(
    (direction: number) => {
      if (direction === 1) {
        if (childFirstWidth <= remainSlice) {
          const newCount = count + 1;
          childContainerRef.current!.style.transform = `translateX(-${
            childFirstWidth * newCount * dotSlice
          }px)`;

          setCount(newCount);
          setRemainSlice(maxSlice - childFirstWidth * newCount * dotSlice);
        } else {
          childContainerRef.current!.style.transform = `translateX(-${maxSlice}px)`;
          setRemainSlice(0);
          // setOffset(maxSlice - childFirstWidth * count * dotSlice);
        }
      } else {
        if (count * dotSlice * childFirstWidth + offset >= childFirstWidth) {
          const newCount = count - 1;
          childContainerRef.current!.style.transform = `translateX(-${
            childFirstWidth * newCount * dotSlice + offset
          }px)`;

          setCount(newCount);
          setRemainSlice(maxSlice - childFirstWidth * newCount * dotSlice);
        } else {
          childContainerRef.current!.style.transform = `translateX(${0}px)`;

          setCount(0);
          setRemainSlice(maxSlice);
          // setOffset(0);
        }
      }
    },
    [childFirstWidth, count, maxSlice, offset, remainSlice]
  );

  const handleChangeCarouselIndex = useCallback(
    (index: number) => {
      onChangeIndex && onChangeIndex(index);
    },
    [onChangeIndex]
  );

  return (
    <div
      ref={parentRef}
      id="gr-product-carousel"
      className={cn("w-full overflow-hidden relative", className)}
    >
      <div
        ref={childContainerRef}
        id="gr-carousel-child-container"
        className="flex w-fit transform transition-all duration-300 translate-x-0"
      >
        {data.map((item, index) => {
          return (
            <button
              ref={
                index === 0
                  ? childFirstRef
                  : index === data.length - 1
                  ? childLastRef
                  : null
              }
              key={index}
              onClick={() => handleChangeCarouselIndex(index)}
              className={cn(
                "pr-[20px] gr-carousel-child-item",
                index === data.length - 1 ? "pr-0" : ""
              )}
            >
              <div
                className={cn(
                  "w-[90px] h-[90px] border border-card-line rounded-md flex items-center",
                  currentIndex === index
                    ? "border-text-title"
                    : "border-card-line"
                )}
              >
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    alt="vf_w_series"
                    className="object-cover object-center"
                  />
                ) : (
                  <video id="myVideo" className="aspect-video h-full w-full">
                    <source src={item.url} type="video/mp4" />
                  </video>
                )}
              </div>
            </button>
          );
        })}
      </div>
      <button
        id="move-button"
        className="absolute rounded-sm right-0 top-1/2 transform -translate-y-1/2 flex items-center bg-gray-500 opacity-40 px-[1px] py-2 text-white hover:opacity-80"
        onClick={() => handleSlice(1)}
      >
        <AppIcon
          name="arrow"
          className="transform rotate-90"
          width={30}
          height={30}
        />
      </button>
      <button
        id="move-button"
        className="absolute rounded-sm top-1/2 transform -translate-y-1/2 flex items-center bg-gray-500 opacity-50 px-[1px] py-2 text-white hover:opacity-80"
        onClick={() => handleSlice(-1)}
      >
        <AppIcon
          name="arrow"
          className="transform -rotate-90"
          width={30}
          height={30}
        />
      </button>
    </div>
  );
};

export default ProductCarousel;
