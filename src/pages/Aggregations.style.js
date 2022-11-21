import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 45px;
`;

export const StyledTable = styled.div`
  display: flex;
  padding: 0;
  flex-direction: column;
  width: 1402px;
  border: 1px solid black;
`;

export const StyledRow = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
`;

export const StyledCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 200px;
  height: 100%;
  background-color: ${(props) =>
    props.highlighted ? "#00000050" : "#00000020"};

  font-weight: ${(props) =>
    props.highlighted || props.batchCell ? "bold" : "normal"};
`;
