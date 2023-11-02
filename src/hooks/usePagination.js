
import { DOTS } from "@/constant/genre";
import { range } from "@/utils";
import React, { useMemo } from "react";

// siblingCount (optional): represents the min number of page buttons to be shown on each side of the current page button. Defaults to 1.




export default function usePagination({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}) {
  const paginationRange = useMemo(() => {

    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    /*
       Calculate left and right sibling index and make sure they are within range 1 and totalPageCount  
    */

    const leftSiblingIdx = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIdx = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIdx > 2;
    const shouldShowRightDots = rightSiblingIdx < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    /*
        Case 2: No left dots to show, but there's right dots to be shown
    */

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    /*
        Case 3: No right dots to show, but there's left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    /*
        Case 4: Both left and right dots are shown 
    */

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIdx, rightSiblingIdx);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);


    
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
}
