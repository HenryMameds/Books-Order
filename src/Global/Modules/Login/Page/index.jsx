import React from 'react';
import LeftPainel from '../Components/LeftPainel';
import LoginForm from '../Components/LoginForm';
import { LoginContainer } from './Login_style';

const Login = () => (
  <LoginContainer>
    <LeftPainel />
    <LoginForm />
  </LoginContainer>
);

export default Login;
