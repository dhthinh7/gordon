import React, { useCallback, useMemo, useRef, useState } from "react";

import { cn, getBriefingCarouselData } from "@/lib/utils";
import { TCarousel } from "@/lib/models";
import ProductCarousel from "./ProductCarousel";

type TProductBriefingViewer = {
  videos: string[];
  images: string[];
};

const ProductBriefingViewer = ({ videos, images }: TProductBriefingViewer) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const carouselData: TCarousel[] = useMemo(() => {
    const originCarousels = [...images, ...videos];

    return getBriefingCarouselData(originCarousels);
  }, [images, videos]);

  const playVideo = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, []);

  const pauseVideo = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  }, []);

  const handleChangeCurrentIndex = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      if (carouselData[index].type === "video") {
        playVideo();
      } else {
        pauseVideo();
      }
    },
    [carouselData, playVideo, pauseVideo]
  );

  return (
    <div className="w-full">
      <div className="p-10 border border-card-line h-[500px] max-h-[500px] flex justify-center items-center">
        {carouselData.length > 0 &&
          carouselData.map((item, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "w-full h-full justify-center items-center",
                  currentIndex === index ? "flex" : "hidden"
                )}
              >
                {item.type === "video" ? (
                  <video
                    ref={videoRef}
                    className={cn("aspect-video h-full w-full")}
                    controls
                    // autoPlay
                  >
                    <source src={item.url} type="video/mp4" />
                  </video>
                ) : (
                  <img src={item.url} alt="img" className={cn("object-fit")} />
                )}
              </div>
            );
          })}
      </div>
      <ProductCarousel
        className="mt-5 min-w-[90px]"
        data={carouselData}
        currentIndex={currentIndex}
        onChangeIndex={handleChangeCurrentIndex}
      />
    </div>
  );
};

export default ProductBriefingViewer;
