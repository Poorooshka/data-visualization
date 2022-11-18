//first view according to the task

import {
  PageWrapper,
  Sidebar,
  Sensors,
  Batches,
  ChartsWrapper,
  ChartWrapper,
} from "./Charts.style";

const Charts = () => {
  return (
    <PageWrapper>
      <Sidebar>
        <Sensors></Sensors>
        <Batches></Batches>
      </Sidebar>
      <ChartsWrapper>
        <ChartWrapper></ChartWrapper>
        <ChartWrapper></ChartWrapper>
      </ChartsWrapper>
    </PageWrapper>
  );
};

export default Charts;
