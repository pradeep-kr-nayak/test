import React, { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { filterList } from "../../constants";

interface PostsDataInterface {
  setActiveFilter: Dispatch<SetStateAction<string>>;
  activeFilter: string;
}

export const FilterContext = React.createContext<PostsDataInterface>({
  setActiveFilter: () => null,
  activeFilter: filterList[0],
});

export const FilteredPosts = ({
  children,
  currentFilter = filterList[0],
}: {
  children: React.ReactNode;
  currentFilter?: string;
}) => {
  const [activeFilter, setActiveFilter] = useState(currentFilter);
  return (
    <FilterContext.Provider value={{ activeFilter, setActiveFilter }}>
      <>{children}</>
    </FilterContext.Provider>
  );
};
