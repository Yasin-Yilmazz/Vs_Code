import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ bg }) => bg || "#fff"};
  background-color: ${({ color }) => color || "#fff"};
  padding: 0.5rem 2rem;
  margin: 1rem;
`;

export default Button;
