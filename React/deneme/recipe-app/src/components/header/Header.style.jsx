import { Flex } from "../../components/globalStyles/Flex";
import styled from "styled-components";

export const HeaderContainer = styled(Flex)`
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.mainColor};
`;

export const HeaderTitle = styled.h1`
  font-size: 3rem;
  margin-top: 1rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid #fff;
  margin: 20px;
  border-radius: 5px;
`;

export const InputBox = styled.input`
  height: 3rem;
  width: 15rem;
  border: none;
  border-radius: 3px;
  outline: none;
  text-indent: 10px;
  margin: 5px;
  font-size: 2rem;
`;

export const SearchButton = styled.button`
  background-color: #e1f1dd;
  padding: 5px;
  outline: none;
  height: 3rem;
  border: none;
  margin: 5px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 2rem;
  &:hover {
    background: ${({ theme }) => theme.colors.mainColor};
    transition: all 0.3s ease-in;
    border: 1px solid white;
  }
`;

export const SelectList = styled.select`
  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  height: 3rem;
  border: none;
  font-size: 2rem;
`;
