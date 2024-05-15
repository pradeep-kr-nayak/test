import { useState, useContext } from "react";
import { FilterButton } from "./filter-wrapper";
import { filterList } from "../../constants";
import { FilterContext } from "../container/filter-context";

export const TimeFilters = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setActiveFilter } = useContext(FilterContext);

  const selectFilter = (index: number) => {
    setActiveIndex(index);
    setActiveFilter(filterList[index]);
  };
  return (
    <div>
      {filterList.map((filter, index) => (
        <FilterButton
          key={`${filter}`}
          className={activeIndex === index ? "active" : ""}
          onClick={() => selectFilter(index)}
        >
          {filter}
        </FilterButton>
      ))}
    </div>
  );
};
