import classNames from "classnames";
import { DOTS, usePagination } from "@/hooks/usePagination";
import { cn } from "@/lib/utils";

export interface IPagination {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: string;
}

const paginationItemClassName =
  "rounded-md border-primary-border-button text-primary-border-button border p-[10px] text-base leading-6 font-semibold min-w-11 h-11 flex justify-center items-center hover:cursor-pointer hover:bg-primary-border-button hover:opacity-40 hover:text-white transform transition-all duration-300";

const disabledClassName =
  "pointer-events-none hover:cursor-default hover:bg-transparent";

const selectedItemClassName =
  "text-white bg-primary-border-button pointer-events-none hover:cursor-default hover:bg-transparent";

const Pagination = (props: IPagination) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const { paginationRange, lastPage } = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // const onNext = () => {
  //   onPageChange(currentPage + 1);
  // };

  // const onPrevious = () => {
  //   onPageChange(currentPage - 1);
  // };

  // const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className={className}>
      <ul className="flex list-none gap-5 relative">
        <p className="w-0 h-0 text-transparent absolute">{currentPage}</p>

        {paginationRange.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li
                key={pageNumber}
                className={cn(paginationItemClassName, disabledClassName)}
              >
                &#8230;
              </li>
            );
          }

          if (pageNumber === lastPage) {
            return (
              <li
                key={pageNumber}
                className={classNames(
                  paginationItemClassName,
                  pageNumber === currentPage ? selectedItemClassName : ""
                )}
                onClick={() => onPageChange(lastPage as number)}
              >
                Last
              </li>
            );
          }

          return (
            <li
              key={pageNumber}
              className={cn(
                paginationItemClassName,
                pageNumber === currentPage ? selectedItemClassName : ""
              )}
              onClick={() => onPageChange(pageNumber as number)}
            >
              {pageNumber}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
