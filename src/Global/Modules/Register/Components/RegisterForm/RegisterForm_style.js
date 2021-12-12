import styled from 'styled-components';
import { OutlinedInput, Button } from '@material-ui/core';

export const PainelContainer = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const StyledTextField = styled(OutlinedInput)`
  margin-bottom: 5% !important;
`;

export const OutlinedInputStyle = styled(OutlinedInput)`
  padding-right: 25px !important;
`;

export const StyledButton = styled(Button)`
margin-top: 5% !important;
  height: 44px;
  box-shadow: none !important;
  width: 50% !important;
`;
