import styled from "styled-components";

export const Header = styled.header`
  height: 45px;
  width: 100vw;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 60px;
  z-index: 100;
`;

export const StyledLink = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-right: 20px;
  transition: 200ms ease-in-out;
  & a {
    color: ${(props) => (props.activeLink ? "#000000" : "#000000a0")};
    text-decoration: none;
  }

  &:hover a {
    color: #000000;
  }
`;
