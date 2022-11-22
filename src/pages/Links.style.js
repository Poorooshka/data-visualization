import styled from "styled-components";

export const Header = styled.header`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
  gap: 60px;
  background-color: #001a65;
`;

export const StyledLink = styled.div`
  font-size: 20px;
  color: white;
  & a {
    color: ${(props) => (props.activeLink ? "#FFFFFF" : "#FFFFFFa0")};
    text-decoration: none;
    cursor: pointer;
    transition: color 200ms ease-in-out;
  }

  &:hover a {
    color: #ffffff;
  }
`;
