import styled from "styled-components";

export const Header = styled.header`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
  gap: 20px;
`;

export const StyledLink = styled.div`
  font-size: 20px;
  & a {
    color: ${(props) => (props.activeLink ? "#000000" : "#000000a0")};
    text-decoration: none;
    cursor: pointer;
    transition: color 200ms ease-in-out;
  }

  &:hover a {
    color: #000000;
  }
`;
