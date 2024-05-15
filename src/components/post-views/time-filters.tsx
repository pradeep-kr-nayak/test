import { useState } from "react";
import { FilterButton } from "./filter-wrapper";
import { filterList } from "../../constants";

export const TimeFilters = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      {filterList.map((filter, index) => (
        <FilterButton
          key={`${filter}`}
          className={activeIndex === index ? "active" : ""}
          onClick={() => setActiveIndex(index)}
        >
          {filter}
        </FilterButton>
      ))}
    </div>
  );
};
