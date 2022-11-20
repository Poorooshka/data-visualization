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
  ChartInnerWrapper,
} from "./Charts.style";

import { ResponsiveLine } from "@nivo/line";

const dummyData = [
  {
    id: "japan",
    color: "hsl(313, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 105,
      },
      {
        x: "helicopter",
        y: 160,
      },
      {
        x: "boat",
        y: 22,
      },
      {
        x: "train",
        y: 292,
      },
      {
        x: "subway",
        y: 197,
      },
      {
        x: "bus",
        y: 225,
      },
      {
        x: "car",
        y: 289,
      },
      {
        x: "moto",
        y: 267,
      },
      {
        x: "bicycle",
        y: 200,
      },
      {
        x: "horse",
        y: 167,
      },
      {
        x: "skateboard",
        y: 221,
      },
      {
        x: "others",
        y: 47,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(353, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 23,
      },
      {
        x: "helicopter",
        y: 97,
      },
      {
        x: "boat",
        y: 295,
      },
      {
        x: "train",
        y: 119,
      },
      {
        x: "subway",
        y: 253,
      },
      {
        x: "bus",
        y: 166,
      },
      {
        x: "car",
        y: 150,
      },
      {
        x: "moto",
        y: 73,
      },
      {
        x: "bicycle",
        y: 197,
      },
      {
        x: "horse",
        y: 116,
      },
      {
        x: "skateboard",
        y: 66,
      },
      {
        x: "others",
        y: 260,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(104, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 296,
      },
      {
        x: "helicopter",
        y: 16,
      },
      {
        x: "boat",
        y: 53,
      },
      {
        x: "train",
        y: 56,
      },
      {
        x: "subway",
        y: 258,
      },
      {
        x: "bus",
        y: 254,
      },
      {
        x: "car",
        y: 82,
      },
      {
        x: "moto",
        y: 208,
      },
      {
        x: "bicycle",
        y: 257,
      },
      {
        x: "horse",
        y: 212,
      },
      {
        x: "skateboard",
        y: 67,
      },
      {
        x: "others",
        y: 30,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(172, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 270,
      },
      {
        x: "helicopter",
        y: 178,
      },
      {
        x: "boat",
        y: 149,
      },
      {
        x: "train",
        y: 150,
      },
      {
        x: "subway",
        y: 207,
      },
      {
        x: "bus",
        y: 280,
      },
      {
        x: "car",
        y: 102,
      },
      {
        x: "moto",
        y: 249,
      },
      {
        x: "bicycle",
        y: 288,
      },
      {
        x: "horse",
        y: 41,
      },
      {
        x: "skateboard",
        y: 25,
      },
      {
        x: "others",
        y: 47,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(86, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 45,
      },
      {
        x: "helicopter",
        y: 94,
      },
      {
        x: "boat",
        y: 187,
      },
      {
        x: "train",
        y: 58,
      },
      {
        x: "subway",
        y: 90,
      },
      {
        x: "bus",
        y: 234,
      },
      {
        x: "car",
        y: 144,
      },
      {
        x: "moto",
        y: 154,
      },
      {
        x: "bicycle",
        y: 284,
      },
      {
        x: "horse",
        y: 134,
      },
      {
        x: "skateboard",
        y: 176,
      },
      {
        x: "others",
        y: 0,
      },
    ],
  },
];

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
      <ChartsWrapper>
        <ChartWrapper>
          <ChartInnerWrapper>
            <ResponsiveLine
              data={dummyData}
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
                legend: "transportation",
                legendOffset: 36,
                legendPosition: "middle",
              }}
              axisLeft={{
                orient: "left",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "count",
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
        <ChartWrapper>
          <ChartInnerWrapper></ChartInnerWrapper>
        </ChartWrapper>
      </ChartsWrapper>
    </PageWrapper>
  );
};

export default Charts;
