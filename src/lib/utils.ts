import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { TCarousel } from "./models";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function detectFileType(url: string): 'image' | 'video' | '' {
  const videoRegex = /\.(mp4|mov|avi|mkv|flv|wmv)$/i;
  const imageRegex = /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i;

  if (videoRegex.test(url)) {
    return 'video';
  } else if (imageRegex.test(url)) {
    return 'image';
  } else {
    return '';
  }
}

export const getBriefingCarouselData = (origin: string[]) => {
  const carousels = origin.reduce((prev: TCarousel[], current) => {
    const type = detectFileType(current);

    prev.push({
      url: current,
      type: type,
    });

    return prev;
  }, []);

  return carousels;
}
