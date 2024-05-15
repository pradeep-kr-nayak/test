import { filterList } from "../constants";
import { getChartOptions } from "./chart-options";
import { Post } from "../types";

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

const formDailyData = (filteredData: Post) => {
  const dailyTraffic = filteredData.traffic.daily;
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

const formWeeklyData = (filteredData: Post) => {
  const weeklyTraffic = filteredData.traffic.weekly;
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

const formMonthlyData = (filteredData: Post) => {
  const monthlyTraffic = filteredData.traffic.monthly;
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

const prepareDataForChart = (activeFilter: string, filteredData: Post) => {
  switch (activeFilter) {
    case "Hourly":
      return formHourlyData(filteredData);
    case "Daily":
      return formDailyData(filteredData);
    case "Weekly":
      return formWeeklyData(filteredData);
    case "Monthly":
      return formMonthlyData(filteredData);
    default:
      return;
  }
};

export const getChartCompatibleData = (
  activeFilter: string,
  filteredData: Post
) => {
  if (filterList.indexOf(activeFilter) !== -1) {
    return {
      chartOptions: getChartOptions(activeFilter),
      filteredData: prepareDataForChart(activeFilter, filteredData),
    };
  } else {
    console.error("Invalid filter value");
  }
};

/** may be not required */
// export const getMetrics = (
//   activeFilter: string
// ): {
//   avg_time_minutes: number;
//   page_views: number;
//   total_time_hours: number;
//   unique_page_views: number;
//   unique_visitors: number;
//   visitors: number;
// } => {
//   switch (activeFilter) {
//     case "Hourly":
//       return postHourlyData.metrics;
//     case "Daily":
//       return postDailyData.metrics;
//     case "Weekly":
//       return postWeeklyData.metrics;
//     case "Monthly":
//       return postMonthlyData.metrics;
//     default:
//       return postHourlyData.metrics;
//   }
// };
