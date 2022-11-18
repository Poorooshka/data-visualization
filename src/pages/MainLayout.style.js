import styled from "styled-components";
import Falcon from "../assets/images/Falcon.png";

export const StyledBody = styled.div``;

export const Sidebar = styled.div`
  position: fixed;
  top: 45px;
  left: 0;
  width: 150px;
  height: calc(100vh - 45px);
  background-color: #d8ecf3;
`;

export const TitleWrapper = styled.div`
  color: #a40010;
  font-size: 50px;
  font-weight: bold;
  margin: 80px;
`;

export const FalconImage = styled.div`
  background-image: url(${Falcon});
  width: 500px;
  height: 300px;
`;
