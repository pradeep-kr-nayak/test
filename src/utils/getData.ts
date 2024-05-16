import { filterList } from "../constants";
import { Post } from "../types";
import { getChartOptions } from "./chart-options";

type trafficEntity = { [key: string]: number };

const formHourlyData = (filteredData: Post) => {
  const hourlyTraffic = filteredData.traffic.hourly;
  const axisLabels = ["Hours", "Views"];
  return hourlyTraffic
    ? [
        axisLabels,
        ...Object.keys(hourlyTraffic).map((d) => {
          const hour = d.split(":")[0];
          return [hour, hourlyTraffic[d]];
        }),
      ]
    : [axisLabels];
};

const formDailyData = (filteredData: trafficEntity) => {
  const dailyTraffic = filteredData;
  return dailyTraffic
    ? [
        ["Days", "Views"],
        ...Object.keys(dailyTraffic).map((d) => {
          const day = new Date(d).toLocaleString("default", {
            month: "short",
            day: "numeric",
          });
          return [day, dailyTraffic[d]];
        }),
      ]
    : [["Days", "Views"]];
};

const formWeeklyData = (filteredData: trafficEntity) => {
  const weeklyTraffic = filteredData;
  return weeklyTraffic
    ? [
        ["Weeks", "Views"],
        ...Object.keys(weeklyTraffic).map((d) => {
          const hour = d.split(":")[0];
          return [hour, weeklyTraffic[d]];
        }),
      ]
    : [["Weeks", "Views"]];
};

const formMonthlyData = (filteredData: trafficEntity) => {
  const monthlyTraffic = filteredData;
  return monthlyTraffic
    ? [
        ["Days", "Views"],
        ...Object.keys(monthlyTraffic).map((d) => {
          const hour = d.split(":")[0];
          return [hour, monthlyTraffic[d]];
        }),
      ]
    : [["Months", "Views"]];
};

const prepareDataForChart = (
  activeFilter: string,
  trafficData: trafficEntity
) => {
  switch (activeFilter) {
    case "Daily":
      return formDailyData(trafficData);
    case "Weekly":
      return formWeeklyData(trafficData);
    case "Monthly":
      return formMonthlyData(trafficData);
    default:
      return;
  }
};

export const getChartCompatibleData = (
  activeFilter: string,
  trafficData?: { [key: string]: number }
) => {
  if (filterList.indexOf(activeFilter) !== -1 && trafficData) {
    return {
      chartOptions: getChartOptions(activeFilter),
      filteredData: prepareDataForChart(activeFilter, trafficData),
    };
  } else {
    // log error
  }
};

export const getChartCompatibleDataForHourly = (
  activeFilter: string,
  filteredData?: Post
) => {
  if (filteredData && filterList.indexOf(activeFilter) !== -1) {
    return {
      chartOptions: getChartOptions(activeFilter),
      filteredData: formHourlyData(filteredData),
    };
  } else {
    // log error
  }
};
