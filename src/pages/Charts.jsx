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

// const transformData = (sensorData, id, color) => {
//   const dataArray = sensorData.timestamps.map((timestamp, timestampIndex) => ({
//     x: timestamp,
//     y: sensorData.values[timestampIndex],
//   }));
//   return {
//     id,
//     color,
//     data: dataArray,
//   };
// };

// for (const property in data) {
//   console.log("start", property);
//   console.log(
//     data[property]["400E_Temp1"].timestamps[0],
//     data[property]["400E_Temp1"].timestamps[
//       data[property]["400E_Temp1"].timestamps.length - 1
//     ]
//   );
//   console.log(
//     data[property]["400E_Temp2"].timestamps[0],
//     data[property]["400E_Temp2"].timestamps[
//       data[property]["400E_Temp2"].timestamps.length - 1
//     ]
//   );
//   console.log(
//     data[property]["400E_Pres1"].timestamps[0],
//     data[property]["400E_Pres1"].timestamps[
//       data[property]["400E_Pres1"].timestamps.length - 1
//     ]
//   );
//   console.log(
//     data[property]["400E_Pres2"].timestamps[0],
//     data[property]["400E_Pres2"].timestamps[
//       data[property]["400E_Pres2"].timestamps.length - 1
//     ]
//   );
// }

const batches = Object.keys(data);

const sensors = Object.keys(data[batches[0]]);

const Charts = () => {
  const [sensorButtons, setSensorButtons] = useState(
    sensors.reduce(
      (accumulator, value) => ({ ...accumulator, [value]: false }),
      {}
    )
  );

  const [batchButtons, setBatchButtons] = useState(
    batches.reduce(
      (accumulator, value) => ({ ...accumulator, [value]: false }),
      {}
    )
  );

  const transformData = (batchId, id, color, step) => {
    let dataArray = data[batchId][id].timestamps.map(
      (timestamp, timestampIndex) => ({
        x: timestampIndex,
        y: data[batchId][id].values[timestampIndex],
      })
    );
    // for the sake of simplification we are showing 1 data out of every hundred
    dataArray = dataArray.filter((item, index) => index % step === 0);
    return {
      id: batchId,
      color,
      data: dataArray,
    };
  };

  console.log(sensorButtons);

  // const dummyData = [
  //   transformData("BP400E0102", "400E_Pres1", "hsl(330, 70%, 50%)", 100),
  //   transformData("AP400E0102", "400E_Pres1", "hsl(62, 70%, 50%)", 100),
  //   transformData("CP400E0102", "400E_Pres1", "hsl(88, 70%, 50%)", 100),
  //   transformData("BP400E0101", "400E_Pres1", "hsl(330, 70%, 50%)", 100),
  //   transformData("AP400E0101", "400E_Pres1", "hsl(62, 70%, 50%)", 100),
  //   transformData("CP400E0101", "400E_Pres1", "hsl(88, 70%, 50%)", 100),
  // ];

  const batchColors = {
    AP400E0101: "hsl(330, 70%, 50%)",
    AP400E0102: "hsl(62, 70%, 50%)",
    BP400E0101: "hsl(88, 70%, 50%)",
    BP400E0102: "hsl(41, 70%, 50%)",
    CP400E0101: "hsl(17, 70%, 50%)",
    CP400E0102: "hsl(141, 70%, 50%)",
  };

  const [dummyData, setDummyData] = useState({});

  useEffect(() => {
    let dummyDataHelper = {};
    for (let sensorKey in sensorButtons) {
      dummyDataHelper[sensorKey] = [];
      for (let key in batchButtons) {
        if (batchButtons[key]) {
          dummyDataHelper[sensorKey].push(
            transformData(key, sensorKey, batchColors[key], 100)
          );
        }
      }
    }
    setDummyData(dummyDataHelper);
  }, [batchButtons]);

  const graphs = [];
  for (let item in sensorButtons) {
    if (sensorButtons[item]) {
      graphs.push(
        <ChartWrapper>
          {item}
          <ChartInnerWrapper>
            <ResponsiveLine
              data={dummyData[item]}
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
                tickRotation: 0,
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

  return (
    <PageWrapper>
      <Sidebar>
        <Sensors>
          {sensors.map((sensor) => (
            <StyledButton
              key={sensor}
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
              key={batch}
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
      <ChartsWrapper>{graphs}</ChartsWrapper>
    </PageWrapper>
  );
};

export default Charts;
