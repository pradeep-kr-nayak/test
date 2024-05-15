import { Dispatch, SetStateAction, useState } from "react";
import { FilterButton } from "./filter-wrapper";
import { filterList } from "../../constants";

export const TimeFilters = ({
  setActiveFilter,
}: {
  setActiveFilter: Dispatch<SetStateAction<string>>;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

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
