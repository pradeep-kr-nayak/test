import { useState, useContext, useEffect } from "react";
import { Chart } from "react-google-charts";
import { Section } from "../shared/shared.styles";

import {
  FilterWrapper,
  FiltersLeft,
  FiltersRight,
  FilterCountButton,
  RefreshButton,
  DateRangePickerHTML5,
} from "./filter-wrapper";
import FunnelIcon from "../icons/funnel";
import RefreshIcon from "../icons/refresh";
import {
  getChartCompatibleData,
  getChartCompatibleDataForHourly,
} from "../../utils/getData";
import { TimeFilters } from "./time-filters";
import { FilterContext } from "../container/filter-context";
import { Traffic } from "../../types";

const Posts = () => {
  const { activeFilter, filteredPosts } = useContext(FilterContext);
  const initialTrafficData =
    filteredPosts.traffic[`${activeFilter}` as keyof Traffic];
  const [trafficData, setTrafficData] = useState<
    { [key: string]: number } | undefined
  >(initialTrafficData);
  const chartData =
    activeFilter === "Hourly"
      ? getChartCompatibleDataForHourly(activeFilter, filteredPosts)
      : getChartCompatibleData(activeFilter, trafficData);

  const [startDate, setSDate] = useState("2023-07-01");
  const [endDate, setEDate] = useState("2024-04-01");

  const setStartDate = (e: React.SyntheticEvent) => {
    setSDate((e.target as HTMLInputElement).value);
  };

  const setEndDate = (e: React.SyntheticEvent) => {
    setEDate((e.target as HTMLInputElement).value);
  };

  useEffect(() => {
    const key = Object.keys(filteredPosts.traffic);
    const viewsData = filteredPosts.traffic[key[0] as keyof Traffic];
    const filteredViewsData: { [key: string]: number } = {};
    for (const x in viewsData) {
      if (
        new Date(x) > new Date(startDate) &&
        new Date(x) < new Date(endDate)
      ) {
        filteredViewsData[`${x}`] = viewsData[x];
      }
    }
    setTrafficData(filteredViewsData);
  }, [startDate, endDate, filteredPosts, setTrafficData]);
  return (
    <div>
      <FilterWrapper>
        <FiltersLeft>
          <TimeFilters />
          <DateRangePickerHTML5>
            <input
              type="date"
              onChange={(e) => setStartDate(e)}
              value={startDate}
              min={`${new Date(filteredPosts.published_date)}`}
              max="2024-06-15"
            />
            <input
              type="date"
              onChange={(e) => setEndDate(e)}
              value={endDate}
              max="2024-06-15"
            />
          </DateRangePickerHTML5>
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
