import { useState } from "react";
import { Chart } from "react-google-charts";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import { Section } from "../shared/shared.styles";
import postData from "../../mock/hourly/post.json";

import {
  FilterWrapper,
  FiltersLeft,
  FiltersRight,
  FilterCountButton,
  RefreshButton,
  DateRangePickerStyled,
} from "./filter-wrapper";
import FunnelIcon from "../icons/funnel";
import RefreshIcon from "../icons/refresh";
import { getFilteredData } from "../../utils/getData";
import { TimeFilters } from "./time-filters";
import { filterList } from "../../constants";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Posts = () => {
  const [activeFilter, setActiveFilter] = useState(filterList[0]);
  const [value, onChange] = useState<Value>([new Date(), new Date()]);
  const gh = getFilteredData({
    postData,
    activeFilter,
  });
  console.log(gh);

  return (
    <div>
      <FilterWrapper>
        <FiltersLeft>
          <TimeFilters setActiveFilter={setActiveFilter} />
          <DateRangePickerStyled onChange={onChange} value={value} />
          <FilterCountButton>
            <FunnelIcon />
            Filters
          </FilterCountButton>
        </FiltersLeft>
        <FiltersRight>
          <RefreshButton>
            <RefreshIcon />
            Refresh
          </RefreshButton>
        </FiltersRight>
      </FilterWrapper>
      <Section ispadded="true">
        <Chart
          chartType="AreaChart"
          width="100%"
          height="400px"
          data={gh?.filteredData}
          options={gh?.chartOptions}
        />
      </Section>
    </div>
  );
};

export default Posts;
