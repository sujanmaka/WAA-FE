import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import WAA, { API_URL } from "../../../api/api";
import logo from "../../../assets/img/logo.png";
import AddAlertMessage from "../../../components/alert/Alert";
import Spinner from "../../../components/loader/Loader";
// context
import { useUserDispatch } from "../../../context/UserContext";
import { AppUtils } from "../../../utils/appUtils";
import {
  IS_SESSION_EXPIRED,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SESSION_EXPIRED,
  SOMETHING_WENT_WRONG,
} from "../../../utils/constants/index";
import { SessionStorage } from "../../../utils/storage/sessionStorage";
import styles from "./style";

export default function LoginForm(props) {
  const classes = styles();
  const { register, handleSubmit, errors } = useForm();

  // global
  var userDispatch = useUserDispatch();

  // local
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (SessionStorage.getItem(IS_SESSION_EXPIRED) === "true") {
      AddAlertMessage({
        type: "error",
        message: SESSION_EXPIRED,
      });
      SessionStorage.removeItem(IS_SESSION_EXPIRED);
    }
  }, []);

  const onSubmit = (data) => {
    setIsLoading(true);
    WAA.post(API_URL.login, data)
      .then((response) => {
        setIsLoading(false);
        let data = response.data;
        if (data.type === "success") {
          AppUtils.saveUserCredentials(data);
          userDispatch({ type: LOGIN_SUCCESS });
          props.history.push("/");
        } else {
          userDispatch({ type: LOGIN_FAILURE });
          AddAlertMessage({ type: data.type, message: data.message });
        }
      })
      .catch((error) => {
        setIsLoading(false);
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
        userDispatch({ type: LOGIN_FAILURE });
      });
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Box textAlign="center" my={3}>
        <img src={logo} alt="WAA Logo" width="124" />
        <Box fontSize="h5.fontSize"> WAA </Box>
        <Box component="small"> Mini Market Project </Box>
      </Box>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="email"
                margin="normal"
                variant="outlined"
                name="userEmail"
                {...register("userEmail", {
                  required: true,
                  pattern: /\S+@\S+\.\S+/,
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                label="password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                name="password"
                {...register("password", {
                  required: true,
                })}
              />
            </Grid>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember Me"
              name="rememberMe"
              {...register("rememberMe")}
            />
            <Grid item xs={12} className={classes.loginBtnContainer}>
              {isLoading ? (
                <Spinner />
              ) : (
                <Button
                  endIcon={<ExitToAppIcon />}
                  size="large"
                  fullWidth
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Log In
                </Button>
              )}
            </Grid>
            <Grid item xs={12} className={classes.loginBtnContainer}>
              <Button
                endIcon={<ExitToAppIcon />}
                size="large"
                fullWidth
                color="primary"
                variant="contained"
                type="button"
                href={"/register"}
              >
                Signup
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
