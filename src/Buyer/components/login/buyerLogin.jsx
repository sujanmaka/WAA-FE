import { useEffect, useRef, useState } from "react";

import TextField from "@mui/material/TextField";

import axios from "axios";
import { SERVER } from "../../constant/constants";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authAction } from "../../store/config/storeConfig";
import Cookies from "js-cookie";

import * as React from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const BuyerLogin = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postFormRef = useRef();
  const [loading, setLoading] = useState(false);

  const [trigger, setTrigger] = useState(false);

  const changeTrigger = () => {
    if (props.event) {
      setTrigger(true);
    }
  };

  const doLogin = createAsyncThunk("login", async (userCredentials) => {
    // const res = await axios.post(SERVER + "auth", userCredentials);
    const res = {
      data: {
        accessToken: "abcd",
        refreshToken: "abcd",
        userEmail: "abc@gmail.com",
      },
    };
    return res.data;
  });

  const onLoginRequestHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userCredentials = {
      email: postFormRef.current["email"].value,
      password: postFormRef.current["password"].value,
    };
    const result = await dispatch(doLogin(userCredentials));

    // if (result.meta.requestStatus === "rejected") {
    //     Swal.fire({
    //         icon: "error",
    //         title: "Invalid User Credentials",
    //         text: result.error.message,
    //     });
    //     setLoading(false);
    // }
    // else if (result.meta.requestStatus === "fulfilled") {

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Login Success....Redirecting",
      showConfirmButton: false,
      timer: 4000,
    });

    dispatch(authAction.loginSuccessful());
    Cookies.set("accessToken", result.payload.accessToken);
    Cookies.set("refreshToken", result.payload.refreshToken);
    Cookies.set("userEmail", result.payload.email);

    setLoading(false);

    navigate("/dashboard");

    // }
  };

  useEffect(() => {
    if (trigger === true) {
      handleClickOpen();
    }
    changeTrigger();
    //  postFormRef.current["email"].focus();
  }, [props.event]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* 

           
            
          </form>
        </div>
      </div> */}

      <form ref={postFormRef}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To login, please enter email and password. Submit it pressing the
              Login button.
            </DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="E-mail Address"
              type="email"
              fullWidth
              required
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Secret Password"
              type="password"
              fullWidth
              required
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <button onClick={handleClose} className="btn btn-primary">
              Cancel
            </button>
            {loading === true ? (
              <button className="btn btn-success" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Requesting Login...
              </button>
            ) : (
              <button
                type="submit"
                onClick={(e) => onLoginRequestHandler(e)}
                className="btn btn-success"
              >
                Login
              </button>
            )}
            <button className="btn btn-danger" type="reset">
              Reset
            </button>
          </DialogActions>
        </Dialog>
      </form>
    </>
  );
};
export default BuyerLogin;
