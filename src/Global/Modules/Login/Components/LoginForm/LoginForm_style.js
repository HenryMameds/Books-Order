import styled from 'styled-components';
import { OutlinedInput, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { GlobalColors, GlobalFontStyle } from '../../../../GlobalStyles';

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

export const Logo = styled.img`
  padding-bottom: 14%;
  width: 50%;
  height: auto;
`;

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const OutlinedInputStyle = styled(OutlinedInput)`
  padding-right: 25px !important;
`;

export const StyledTextField = styled(OutlinedInput)`
  margin-bottom: 5% !important;
`;

export const StyledButton = styled(Button)`
  height: 44px;
  box-shadow: none !important;
  margin-top: 40px !important;
  text-transform: none !important;
`;

export const RecoverPasswordSection = styled.span`
  font: ${GlobalFontStyle.H3.font};
  margin: 5% 0 5% 0 !important;
  text-align: center;
  color: ${GlobalColors.Primary.azulPrimario};
`;

export const RecoverPasswordLink = styled(Link)`
  font: ${GlobalFontStyle.H3.font};
  text-decoration: underline !important;
  color: ${GlobalColors.Primary.azulPrimario};
`;