import styled from 'styled-components';
import { SnackbarContent } from '@material-ui/core';
import { GlobalFontStyle } from '../../GlobalStyles';

export const NotificationContent = styled(SnackbarContent)`
  background-color: ${({ $typeSnackbar }) =>
    ($typeSnackbar === 'success' && '#219653 !important') ||
    ($typeSnackbar === 'error' && '#EB5757 !important')};

  width: 35vw;

  #message {
    font: ${GlobalFontStyle.H6.font};
  }

  button {
    &:hover {
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;

export const NotificationSpan = styled.span`
  font-size: 13px;
`;