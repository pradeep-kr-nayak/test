import { filterList } from "../constants";

type PostData = {
  title: string;
  traffic: { hourly: { [key: string]: number } };
};
export const getChartOptions = (postData: PostData, filterType: string) => {
  return {
    title: postData.title,
    hAxis: { title: filterType, titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "90%", height: "70%" },
    pointSize: 10,
    colors: ["#328ec8"],
    lineWidth: 5,
  };
};

export const formHourlyData = (postData: PostData) => {
  const hourlyTrafiic = postData.traffic.hourly;
  return [
    ["Hours", "Views"],
    ...Object.keys(hourlyTrafiic).map((d) => {
      const hour = d.split(":")[0];
      return [hour, hourlyTrafiic[d]];
    }),
  ];
};

type FilteredDataProps = {
  postData: PostData;
  activeFilter: string;
};
export const getFilteredData = ({
  postData,
  activeFilter,
}: FilteredDataProps) => {
  if (filterList.indexOf(activeFilter) !== -1) {
    return {
      chartOptions: getChartOptions(postData, activeFilter),
      filteredData: formHourlyData(postData),
    };
  } else {
    console.error("Invalid filter value");
  }
};
