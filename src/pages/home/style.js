import styled from "styled-components";
import Falcon from "../../assets/images/Falcon.png";
import Footer from "../../assets/images/Footer.jpg";

export const HomepageWrapper = styled.div`
  width: 1400px;
  margin: auto;
  margin-top: 70px;
`;

export const FirstPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FalconImage = styled.div`
  background-image: url(${Falcon});
  width: 500px;
  height: 300px;
`;

export const TitleWrapper = styled.div`
  font-size: 40px;
  text-shadow: 2px 2px #c58281;
  color: #8b0403;
`;

export const TextWrapper = styled.div`
  width: 1400px;
  margin-top: 60px;
  font-size: 20px;
  color: black;
  line-height: 2rem;
`;

export const FooterImage = styled.div`
  background-image: url(${Footer});
  width: 1400px;
  height: 400px;
  margin-top: 30px;
`;
