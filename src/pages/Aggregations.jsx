//Second view according to the task
import data from "../data";

import {
  PageWrapper,
  StyledTable,
  StyledRow,
  StyledCell,
} from "./Aggregations.style";

const titles = [
  "Batches",
  "Temperature Max.",
  "Temperature Min.",
  "Temperature Avg.",
  "Pressure Max.",
  "Pressure Min.",
  "Pressure Avg.",
];

const calculateCellValue = (batch, columnNumber) => {
  let result = 0;
  if (columnNumber === 0) {
    let helper = [
      ...data[batch]["400E_Temp1"].values,
      ...data[batch]["400E_Temp2"].values,
    ];
    result = Math.max(...helper);
  }
  if (columnNumber === 1) {
    let helper = [
      ...data[batch]["400E_Temp1"].values,
      ...data[batch]["400E_Temp2"].values,
    ];
    result = Math.min(...helper);
  }

  if (columnNumber === 2) {
    let helper = [
      ...data[batch]["400E_Temp1"].values,
      ...data[batch]["400E_Temp2"].values,
    ];
    const sum = helper.reduce((a, b) => a + b, 0);
    result = sum / helper.length || 0;
  }

  if (columnNumber === 3) {
    let helper = [
      ...data[batch]["400E_Pres1"].values,
      ...data[batch]["400E_Pres2"].values,
    ];
    result = Math.max(...helper);
  }
  if (columnNumber === 4) {
    let helper = [
      ...data[batch]["400E_Pres1"].values,
      ...data[batch]["400E_Pres2"].values,
    ];
    result = Math.min(...helper);
  }

  if (columnNumber === 5) {
    let helper = [
      ...data[batch]["400E_Pres1"].values,
      ...data[batch]["400E_Pres2"].values,
    ];
    const sum = helper.reduce((a, b) => a + b, 0);
    result = sum / helper.length || 0;
  }
  return Math.floor(result * 100) / 100;
};

const Aggregations = () => {
  const batches = Object.keys(data);
  const columnNumbers = [0, 1, 2, 3, 4, 5];

  return (
    <PageWrapper>
      <StyledTable>
        <StyledRow>
          {titles.map((title) => {
            return <StyledCell highlighted={true}>{title}</StyledCell>;
          })}
        </StyledRow>
        {batches.map((batch) => {
          return (
            <StyledRow>
              <StyledCell batchCell={true}>{batch}</StyledCell>
              {columnNumbers.map((columnNumber) => {
                return (
                  <StyledCell>
                    {calculateCellValue(batch, columnNumber)}
                  </StyledCell>
                );
              })}
            </StyledRow>
          );
        })}
      </StyledTable>
    </PageWrapper>
  );
};

export default Aggregations;
