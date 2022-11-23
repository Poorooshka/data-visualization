import data from "../../data";
import { useEffect, useState } from "react";
import Chart from "./components/Chart";
import { batches, sensors, batchColors } from "./components/Constants";

import {
  PageWrapper,
  Sidebar,
  Sensors,
  Batches,
  ChartsWrapper,
  StyledButton,
} from "./style";

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
      graphs.push(<Chart transformedData={transformedData} item={item} />);
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
