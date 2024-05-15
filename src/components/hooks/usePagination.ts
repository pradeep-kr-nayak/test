import { useState, useMemo } from "react";

const usePagination = <T>(data: T[], perPage: number = 5) => {
  const [currentPage, setNextPage] = useState(0);

  const currentPageData = useMemo(
    () => data.slice(currentPage * perPage, currentPage * perPage + perPage),
    [currentPage, data, perPage]
  );
  const paginateLeft = () => {
    setNextPage((state) => (state >= 1 ? state - 1 : 0));
  };
  const paginateRight = () => {
    setNextPage((state) =>
      state < data.length / perPage - 1 ? state + 1 : data.length / perPage - 1
    );
  };

  const resetPage = () => {
    setNextPage(0);
  };

  return {
    paginatedData: currentPageData,
    paginateLeft,
    paginateRight,
    currentPage,
    totalCount: data.length,
    start: currentPage * perPage + 1,
    end: currentPage * perPage + perPage,
    resetPage,
  };
};

export default usePagination;
