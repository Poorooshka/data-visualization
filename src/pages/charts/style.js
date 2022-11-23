import styled from "styled-components";

export const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  padding: 10px;
  gap: 10px;
`;

export const Sidebar = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  height: calc(100vh - 45px);
`;

export const Sensors = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5px;
`;

export const Batches = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 5px;
`;

export const StyledButton = styled.button`
  background-color: ${(props) => (props.activeButton ? "lightblue" : "white")};

  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  &:hover {
  }
`;

export const ChartsWrapper = styled.div``;

export const ChartWrapper = styled.div`
  position: relative;
`;

export const ChartInnerWrapper = styled.div`
  height: 40vh;
  width: 100%;
`;
