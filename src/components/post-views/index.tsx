import { useState } from "react";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import { Chart } from "react-google-charts";
import { Section } from "../shared/shared.styles";

import {
  FilterButton,
  FilterWrapper,
  FiltersLeft,
  FiltersRight,
  FilterCountButton,
  RefreshButton,
  DateRangePickerStyled,
} from "./filter-wrapper";
import FunnelIcon from "../icons/funnel";
import RefreshIcon from "../icons/refresh";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const data = [
  ["Year", "Sales"],
  ["2013", 100],
  ["2014", 1170],
  ["2015", 660],
  ["2016", 1030],
  ["2017", 1030],
  ["2018", 1030],
  ["2019", 1030],
  ["2020", 1030],
  ["2021", 1030],
];

const options = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "90%", height: "70%" },
  pointSize: 10,
  colors: ["#328ec8"],
  lineWidth: 5,
};

const Posts = () => {
  const [value, onChange] = useState<Value>([new Date(), new Date()]);
  return (
    <div>
      <FilterWrapper>
        <FiltersLeft>
          <div>
            <FilterButton>Hourly</FilterButton>
            <FilterButton>Daily</FilterButton>
            <FilterButton>Weekly</FilterButton>
            <FilterButton>Monthly</FilterButton>
          </div>
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
      <Section>
        <Chart
          chartType="AreaChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </Section>
    </div>
  );
};

export default Posts;
