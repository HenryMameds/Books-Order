import { useState } from "react";
import {
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
// import { useNavigate } from "react-router-dom";
import Notification from "../../../../Components/Notification";
import {
  LoginFormContainer,
  FormSection,
  OutlinedInputStyle,
  StyledTextField,
  StyledButton,
  RecoverPasswordLink,
  RecoverPasswordSection,
} from "./LoginForm_style";

const LoginForm = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [notificationFeedback, setNotificationFeedback] = useState({
    type: "",
    message: "",
    open: false,
    vertical: "bottom",
    horizontal: "right",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    /*     dispatch(actions.signInAction({ email, password }, false))
      .then(() => {
        navigate('/orders');
      })
      .catch((error) => {
        setPassword('');
        setNotificationFeedback({
          type: 'error',
          message: error.message,
          open: true,
          vertical: 'bottom',
          horizontal: 'right',
        });
      }); */
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setNotificationFeedback({
      type: "",
      message: "",
      open: false,
      vertical: "bottom",
      horizontal: "right",
    });
  };

  return (
    <LoginFormContainer>
      {/* <Logo src={GoplanLogo} /> */}
      <FormSection noValidate autoComplete="off" onSubmit={handleSubmit}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="email-input">E-mail</InputLabel>
          <StyledTextField
            id="email-input"
            fullWidth
            variant="outlined"
            label="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            labelWidth={70}
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="password-input">Senha</InputLabel>
          <OutlinedInputStyle
            id="password-input"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={54}
          />
        </FormControl>
        <RecoverPasswordSection>
          No registration?{" "}
          <RecoverPasswordLink to="/register">Click here</RecoverPasswordLink>
        </RecoverPasswordSection>
        <StyledButton
          id="login-form-submit"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={Boolean(!email || !password)}
        >
          Log In
        </StyledButton>
        <Notification
          openSnackbar={notificationFeedback.open}
          handleClose={handleClose}
          messageSnackbar={notificationFeedback.message}
          $typeSnackbar={notificationFeedback.type}
          vertical={notificationFeedback.vertical}
          horizontal={notificationFeedback.horizontal}
        />
      </FormSection>
    </LoginFormContainer>
  );
};

export default LoginForm;
