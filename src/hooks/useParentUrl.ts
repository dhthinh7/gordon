import { useCallback, useEffect, useMemo, useState } from "react";
import { EPostMessageType } from "@/lib/enum";

const useParentUrl = () => {
  const [parentUrl, setParentUrl] = useState(() => {
    const originUrl =
      parent !== window ? document.referrer : document.location.href;

    return new URL(originUrl);
  })

  const handleReceiveMessage = useCallback((event: MessageEvent) => {
    const expectedOriginUrl = import.meta.env.VITE_PARENT_URL

    if (event.origin !== expectedOriginUrl) return

    if (typeof event.data === 'string') {
      const data = JSON.parse(event.data)

      if (data.type === EPostMessageType.PARENT_URL_CHANGE) {
        const newUrl = data.params.url
        const parentUrl = new URL(newUrl)
        setParentUrl(parentUrl)
      }
    }

  }, [])

  const parentQueryParams = useMemo(() => {
    const params = new URLSearchParams(parentUrl.searchParams);
    return params;
  }, [parentUrl.searchParams]);

  useEffect(() => {
    window.addEventListener('message', handleReceiveMessage)

    return () => {
      window.removeEventListener('message', handleReceiveMessage)
    }
  }, [handleReceiveMessage])

  return {
    parentUrl,
    parentQueryParams
  }
}

export default useParentUrl