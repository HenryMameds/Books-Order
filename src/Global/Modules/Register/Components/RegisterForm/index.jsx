import { useState, useReducer, useEffect } from "react";

import {
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  PainelContainer,
  StyledTextField,
  OutlinedInputStyle,
  StyledButton,
} from "./RegisterForm_style";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  if (action.type === "FORM_CLEANUP") {
    return { value: "", isValid: false };
  }
  return { value: "", isValid: false };
};

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  const { isValid: emailIsValid } = emailState;

  useEffect(() => {
    setIsFormValid(emailIsValid);
  }, [emailIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    setIsFormValid(event.target.value.includes("@"));
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <PainelContainer>
      <Typography variant="h1" style={{marginBottom: '5%'}}> Register your account</Typography>

      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: '100%',
        }}
      >
        <FormControl variant="outlined" style={{ width: "50%" }}>
          <InputLabel htmlFor="nome-input">Name</InputLabel>
          <StyledTextField
            id="nome-input"
            fullWidth
            variant="outlined"
            label="Nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormControl>
        <FormControl variant="outlined" style={{ width: "50%" }}>
          <InputLabel htmlFor="email-input">E-mail</InputLabel>
          <StyledTextField
            id="email-input"
            fullWidth
            variant="outlined"
            label="E-mail"
            value={emailState.value}
            onBlur={validateEmailHandler}
            onChange={emailChangeHandler}
            error={!emailState.isValid}
          />
        </FormControl>
        <FormControl variant="outlined" style={{ width: "50%" }}>
          <InputLabel htmlFor="username-input">Username</InputLabel>
          <StyledTextField
            id="username-input"
            fullWidth
            variant="outlined"
            label="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormControl>
        <FormControl variant="outlined" style={{ width: "50%" }}>
          <InputLabel htmlFor="password-input">Password</InputLabel>
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
        <StyledButton
          id="register-form-submit"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={Boolean(!isFormValid || !name || !username || !password)}
        >
          Register
        </StyledButton>
      </form>
    </PainelContainer>
  );
};

export default RegisterForm;
