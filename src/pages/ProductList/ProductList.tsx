import { useCallback, useEffect } from "react";
import Pagination from "@/components/Pagination/Pagination";
import Products from "@/components/Products/Products";
import useParentUrl from "@/hooks/useParentUrl";
import { D_PAGE_SIZE } from "@/lib/constant";
import { QueryParams } from "@/lib/models";
import { useSearchParams } from "react-router-dom";
import useFetchProductsData from "@/hooks/useFetchProductsData";
import { usePostMessage } from "@/hooks/usePostMessage";
import { EPostMessageType } from "@/lib/enum";

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { parentQueryParams } = useParentUrl();
  const { products, loading } = useFetchProductsData({});
  const { handleSendMessage } = usePostMessage();

  const updateParentQueryParams = useCallback(
    (newParams: QueryParams) => {
      // Update query parameters
      Object.keys(newParams).forEach((key) => {
        parentQueryParams.set(key, newParams[key]);
      });

      setSearchParams(parentQueryParams);
    },
    [parentQueryParams, setSearchParams]
  );

  useEffect(() => {
    handleSendMessage(EPostMessageType.UPDATE_IFRAME_HEIGHT);
    // handleSendMessage(EPostMessageType.UPDATE_QUERY_PARAMS);
  }, [handleSendMessage, products]);

  return (
    <section className="w-full">
      <Products productList={products} classNameItem="w-1/3 p-[13px]" />
      <Pagination
        className="w-full flex justify-center p-[10px] mt-[26px]"
        currentPage={parseInt(searchParams.get("page") || "1", 10)}
        totalCount={products.length}
        pageSize={D_PAGE_SIZE}
        onPageChange={(e: number) => {
          // setCurrentPage(e.toString());
          updateParentQueryParams({
            page: e as unknown as string,
          });
        }}
      />
    </section>
  );
}
