import styled from "styled-components";
import { Flex } from "../../components/globalStyles/Flex";

export const LoginContainer = styled(Flex)`
  height: 100vh;
  background: url("https://picsum.photos/1600/900");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FormContainer = styled(Flex)`
  width: 35rem;
  height: 35rem;
  border-radius: 50%;
  background: rgba(255, 72, 88, 0.5);
  border: 2px solid rgba(255, 72, 88, 1);
  padding: 0.5rem;
  flex-direction: column;
`;

export const StyledImg = styled.img`
  width: 150px;
  margin: 1rem;
`;

export const Header = styled.h1`
  color: #fff;
  font-size: 3rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  height: 3rem;
  font-size: 2rem;
  width: 15rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 1rem;
`;

export const StyledButton = styled.button`
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
