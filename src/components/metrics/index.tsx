import { MetricsWrapper, Title, Count, Unit } from "./styles";
export const Metrics = () => {
  return (
    <MetricsWrapper>
      <div>
        <Title>Visited Content</Title>
        <Count>
          200<Unit>k</Unit>
        </Count>
      </div>
      <div>
        <Title>Total Time (hours)</Title>
        <Count>
          14<Unit>k</Unit>
        </Count>
      </div>
      <div>
        <Title>Ave Time (min)</Title>
        <Count>14:30</Count>
      </div>
      <div>
        <Title>Page views</Title>
        <Count>
          40<Unit>k</Unit>
        </Count>
      </div>
      <div>
        <Title>Unique Page views</Title>
        <Count>
          35<Unit>k</Unit>
        </Count>
      </div>
      <div>
        <Title>Visitors</Title>
        <Count>
          50<Unit>k</Unit>
        </Count>
      </div>
      <div>
        <Title>Unique Vistors</Title>
        <Count>
          45<Unit>k</Unit>
        </Count>
      </div>
    </MetricsWrapper>
  );
};
