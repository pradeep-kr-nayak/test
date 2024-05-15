export const getChartOptions = (filterType: string) => {
  return {
    hAxis: { title: filterType, titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "90%", height: "70%" },
    pointSize: 10,
    colors: ["#328ec8"],
    lineWidth: 5,
    legend: { position: "none" },
  };
};
