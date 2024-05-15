import { getMetrics } from "../../utils/getData";
import { FilterContext } from "../container/posts-context";
import { MetricsWrapper, Title, Count } from "./styles";
import { useContext, useEffect, useState } from "react";

export const Metrics = () => {
  const [metricData, setMetricData] = useState<{
    [key: string]: string | number;
  }>();
  const { activeFilter } = useContext(FilterContext);

  useEffect(() => {
    setMetricData(getMetrics(activeFilter));
  }, [activeFilter]);

  {
    return metricData ? (
      <MetricsWrapper ispadded="true">
        <div>
          <Title>Total Time (hours)</Title>
          <Count>{metricData.total_time_hours}</Count>
        </div>
        <div>
          <Title>Ave Time (min)</Title>
          <Count>{metricData.avg_time_minutes}</Count>
        </div>
        <div>
          <Title>Page views</Title>
          <Count>{metricData.page_views}</Count>
        </div>
        <div>
          <Title>Unique Page views</Title>
          <Count>{metricData.unique_page_views}</Count>
        </div>
        <div>
          <Title>Visitors</Title>
          <Count>{metricData.visitors}</Count>
        </div>
        <div>
          <Title>Unique Vistors</Title>
          <Count>{metricData.unique_visitors}</Count>
        </div>
      </MetricsWrapper>
    ) : null;
  }
};
