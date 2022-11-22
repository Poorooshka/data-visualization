//first view according to the task
import data from "../data";
import { useEffect, useState } from "react";

import {
  PageWrapper,
  Sidebar,
  Sensors,
  Batches,
  ChartsWrapper,
  ChartWrapper,
  StyledButton,
  ChartInnerWrapper,
} from "./Charts.style";

import { ResponsiveLine } from "@nivo/line";

const batches = Object.keys(data);

const sensors = Object.keys(data[batches[0]]);

const batchColors = {
  AP400E0101: "hsl(330, 70%, 50%)",
  AP400E0102: "hsl(62, 70%, 50%)",
  BP400E0101: "hsl(80, 70%, 50%)",
  BP400E0102: "hsl(47, 70%, 50%)",
  CP400E0101: "hsl(17, 70%, 50%)",
  CP400E0102: "hsl(160, 70%, 50%)",
};

const Charts = () => {
  let initialSensorButtonsValue = sensors.reduce(
    (accumulator, value) => ({ ...accumulator, [value]: false }),
    {}
  );

  initialSensorButtonsValue["400E_Temp1"] = true;

  const [sensorButtons, setSensorButtons] = useState(initialSensorButtonsValue);

  let initialBatchButtonsValue = batches.reduce(
    (accumulator, value) => ({ ...accumulator, [value]: false }),
    {}
  );

  initialBatchButtonsValue["AP400E0101"] = true;

  const [batchButtons, setBatchButtons] = useState(initialBatchButtonsValue);

  const transformData = (batchId, id, color, step) => {
    let dataArray = data[batchId][id].timestamps.map(
      (timestamp, timestampIndex) => ({
        x: timestampIndex,
        y: data[batchId][id].values[timestampIndex],
      })
    );

    // for the sake of simplification we are displaying one data item out of every hundred
    dataArray = dataArray.filter((item, index) => index % step === 0);
    return {
      id: batchId,
      color,
      data: dataArray,
    };
  };

  const [transformedData, setTransformedData] = useState({});

  useEffect(() => {
    let transformedDataHelper = {};
    for (let sensorKey in sensorButtons) {
      transformedDataHelper[sensorKey] = [];
      for (let key in batchButtons) {
        if (batchButtons[key]) {
          transformedDataHelper[sensorKey].push(
            transformData(key, sensorKey, batchColors[key], 20)
          );
        }
      }
    }
    setTransformedData(transformedDataHelper);
  }, [batchButtons, sensorButtons]);

  const graphs = [];

  for (let item in sensorButtons) {
    if (sensorButtons[item]) {
      graphs.push(
        <ChartWrapper>
          {item}
          <ChartInnerWrapper>
            <ResponsiveLine
              data={transformedData[item]}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
              }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: "bottom",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -90,
                legend: "Time",
                legendOffset: 36,
                legendPosition: "middle",
              }}
              axisLeft={{
                orient: "left",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Value",
                legendOffset: -40,
                legendPosition: "middle",
              }}
              pointSize={10}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          </ChartInnerWrapper>
        </ChartWrapper>
      );
    }
  }
  // A feature added for always having by default one sensor and one batch selected so the page is never left empty
  const checkAllValuesFalse = (inputValue) => {
    let result = false;
    for (let key in inputValue) {
      result = result || inputValue[key];
    }
    return !result;
  };

  const onSensorClick = (sensor) => {
    let helper = { ...sensorButtons };
    helper[sensor] = !helper[sensor];
    if (checkAllValuesFalse(helper)) {
      return;
    }
    setSensorButtons(helper);
  };

  const onBatchClick = (batch) => {
    let helper = { ...batchButtons };
    helper[batch] = !helper[batch];
    if (checkAllValuesFalse(helper)) {
      return;
    }
    setBatchButtons(helper);
  };

  return (
    <PageWrapper>
      <Sidebar>
        <Sensors>
          {sensors.map((sensor) => (
            <StyledButton
              key={sensor}
              activeButton={sensorButtons[sensor]}
              onClick={() => onSensorClick(sensor)}
            >
              {sensor}
            </StyledButton>
          ))}
        </Sensors>
        <Batches>
          {batches.map((batch) => (
            <StyledButton
              key={batch}
              activeButton={batchButtons[batch]}
              onClick={() => onBatchClick(batch)}
            >
              {batch}
            </StyledButton>
          ))}
        </Batches>
      </Sidebar>
      <ChartsWrapper>{graphs}</ChartsWrapper>
    </PageWrapper>
  );
};

export default Charts;
