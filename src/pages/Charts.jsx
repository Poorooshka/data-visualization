//first view according to the task
import data from "../data";
import { useState } from "react";

import {
  PageWrapper,
  Sidebar,
  Sensors,
  Batches,
  ChartsWrapper,
  ChartWrapper,
  StyledButton,
} from "./Charts.style";

const batches = Object.keys(data);

const sensors = Object.keys(data[batches[0]]);

const Charts = () => {
  const [sensorButtons, setSensorButtons] = useState(
    sensors.reduce(
      (accumulator, value) => ({ ...accumulator, [value]: true }),
      {}
    )
  );

  const [batchButtons, setBatchButtons] = useState(
    batches.reduce(
      (accumulator, value) => ({ ...accumulator, [value]: true }),
      {}
    )
  );

  return (
    <PageWrapper>
      <Sidebar>
        <Sensors>
          {sensors.map((sensor) => (
            <StyledButton
              activeButton={sensorButtons[sensor]}
              onClick={() => {
                setSensorButtons((previousState) => ({
                  ...previousState,
                  [sensor]: !previousState[sensor],
                }));
              }}
            >
              {sensor}
            </StyledButton>
          ))}
        </Sensors>
        <Batches>
          {batches.map((batch) => (
            <StyledButton
              activeButton={batchButtons[batch]}
              onClick={() => {
                setBatchButtons((previousState) => ({
                  ...previousState,
                  [batch]: !previousState[batch],
                }));
              }}
            >
              {batch}
            </StyledButton>
          ))}
        </Batches>
      </Sidebar>
      <ChartsWrapper>
        <ChartWrapper></ChartWrapper>
        <ChartWrapper></ChartWrapper>
      </ChartsWrapper>
    </PageWrapper>
  );
};

export default Charts;
