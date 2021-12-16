import styled from "styled-components";
import { OutlinedInput, Button } from "@material-ui/core";

export const ProductRegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
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
