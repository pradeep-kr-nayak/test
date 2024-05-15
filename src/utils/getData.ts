import { filterList } from "../constants";
import postHourlyData from "../mock/hourly-post.json";
import postDailyData from "../mock/daily-post.json";
import postWeeklyData from "../mock/weekly-post.json";
import postMonthlyData from "../mock/monthly-post.json";
import { getChartOptions } from "./chart-options";

const formHourlyData = () => {
  const hourlyTraffic: { [key: string]: number } =
    postHourlyData.traffic.hourly;
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

const formDailyData = () => {
  const dailyTraffic: { [key: string]: number } = postDailyData.traffic.daily;
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

const formWeeklyData = () => {
  const weeklyTraffic: { [key: string]: number } =
    postWeeklyData.traffic.weekly;
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

const formMonthlyData = () => {
  const monthlyTraffic: { [key: string]: number } =
    postMonthlyData.traffic.monthly;
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

const prepareDataForChart = (activeFilter: string) => {
  switch (activeFilter) {
    case "Hourly":
      return formHourlyData();
    case "Daily":
      return formDailyData();
    case "Weekly":
      return formWeeklyData();
    case "Monthly":
      return formMonthlyData();
    default:
      return;
  }
};

export const getFilteredData = (activeFilter: string) => {
  if (filterList.indexOf(activeFilter) !== -1) {
    return {
      chartOptions: getChartOptions(activeFilter),
      filteredData: prepareDataForChart(activeFilter),
    };
  } else {
    console.error("Invalid filter value");
  }
};

export const getMetrics = (
  activeFilter: string
): {
  avg_time_minutes: number;
  page_views: number;
  total_time_hours: number;
  unique_page_views: number;
  unique_visitors: number;
  visitors: number;
} => {
  switch (activeFilter) {
    case "Hourly":
      return postHourlyData.metrics;
    case "Daily":
      return postDailyData.metrics;
    case "Weekly":
      return postWeeklyData.metrics;
    case "Monthly":
      return postMonthlyData.metrics;
    default:
      return postHourlyData.metrics;
  }
};
