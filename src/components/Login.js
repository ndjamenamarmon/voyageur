import React from "react";
import styled from "styled-components";
import {} from "twix";
import ButtonLink from "./Buttons/ButtonLink";

const App = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("login-background.jpg");
    background-size: cover;
    background-position: top left;
    filter: blur(1px) brightness(90%) grayscale(50%) sepia(10%);
  }
`;

const AppContainer = styled.div`
  width: 100%;
  position: relative;
`;

const AppTitle = styled.h1`
  color: #fff;
  font-family: "Roboto", sans-serif;
`;

const AppSubtitle = styled.h2`
  color: #fff;
  font-family: "Roboto", sans-serif;
`;

const Login = props => {
  return (
    <div>
      <App>
        <AppContainer>
          <AppTitle>Voyageur</AppTitle>
          <AppSubtitle>Travel Budget Planner</AppSubtitle>
          <ButtonLink
            to="/auth/google"
            buttonText="Sign In with Google"
            buttonType="primary"
          />
        </AppContainer>
      </App>
    </div>
  );
};

export default Login;
