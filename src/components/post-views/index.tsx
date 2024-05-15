import { useState, useContext } from "react";
import { Chart } from "react-google-charts";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import { Section } from "../shared/shared.styles";

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
import { FilterContext } from "../container/posts-context";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Posts = () => {
  const { activeFilter } = useContext(FilterContext);
  const [value, onChange] = useState<Value>([new Date(), new Date()]);
  const chartData = getFilteredData(activeFilter);

  return (
    <div>
      <FilterWrapper>
        <FiltersLeft>
          <TimeFilters />
          <DateRangePickerStyled
            onChange={onChange}
            value={value}
            maxDate={new Date()}
            disabled
          />
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
          data={chartData?.filteredData}
          options={chartData?.chartOptions}
        />
      </Section>
    </div>
  );
};

export default Posts;
