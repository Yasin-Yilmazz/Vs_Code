import React from "react";
import StyledLogin, {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./Login.style";
import mealSvg from "../../assets/mail.svg";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const userInfo = {
    username: "ömer",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    navigate(-1);
  };

  return (
    <div>
      <LoginContainer>
        <FormContainer>
          <StyledImg src={mealSvg} />
          <Header>{"Yase"} Recipe </Header>
          <StyledForm onSubmit={handleSubmit}>
            <StyledInput type="text" placeholder="username" required />
            <StyledInput type="password" placeholder="password" required />
            <StyledButton type="submit">Login</StyledButton>
          </StyledForm>
        </FormContainer>
      </LoginContainer>
    </div>
  );
};

export default Login;
