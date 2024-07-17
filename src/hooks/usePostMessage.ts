import { EPostMessageType } from "@/lib/enum";
import { useCallback, useState } from "react";

export const usePostMessage = () => {

  const [count, setCount] = useState(0);

  const handleSendMessage = useCallback((type: string, count = 0) => {
    let message = {};

    if (type === EPostMessageType.UPDATE_QUERY_PARAMS) {
      setCount(count);

      message = {
        type: type,
        params: {
          page: count,
        },
      };
    }

    if (type === EPostMessageType.UPDATE_IFRAME_HEIGHT) {
      const height = document.body.getBoundingClientRect().height;
      console.log("height", height);
      message = {
        type: type,
        params: {
          height: height,
        },
      };
    }

    window.parent.postMessage(
      JSON.stringify(message),
      import.meta.env.VITE_PARENT_URL
    );
  }, []);


  return {
    count,
    handleSendMessage
  }
}