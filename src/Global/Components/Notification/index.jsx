import { IconButton, Snackbar } from '@material-ui/core';
import { NotificationContent, NotificationSpan } from './Notification_style';

const Notification = ({
  openSnackbar,
  handleClose,
  messageSnackbar,
  $typeSnackbar,
  vertical,
  horizontal,
  success,
}) => (
  <Snackbar
    key="notification"
    anchorOrigin={{ vertical, horizontal }}
    open={openSnackbar}
    autoHideDuration={6000}
    onClose={() => handleClose(success)}
  >
    <NotificationContent
      $typeSnackbar={$typeSnackbar}
      aria-describedby="message"
      message={
        <span id="message">
          <div>{messageSnackbar}</div>
        </span>
      }
      action={
        <>
          <IconButton
            aria-label="close"
            color="inherit"
            onClick={() => handleClose(success)}
            disableRipple
          >
            <NotificationSpan> FECHAR </NotificationSpan>
          </IconButton>
        </>
      }
    />
  </Snackbar>
);

export default Notification;