import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../redux/user/userSlice";

import { github } from "../assets";

const Login = () => {
  const dispatch = useDispatch();
  const isUserLogged = useSelector((state) => state.user.isLogged);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });

  useEffect(() => {
    const url = window.location.href;
    const hasCode = url.includes("?code=");
    if (hasCode) {
      console.log("url page", url);
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      setData({ ...data, isLoading: true });

      const requestData = {
        code: newUrl[1],
      };
      axios
        .post(process.env.REACT_APP_PROXY_URL, { code: requestData })
        .then(({ data }) => dispatch(login({ user: data, isUserLogged: true })))
        .catch((error) => {
          console.log(error);
          setData({
            isLoading: false,
            errorMessage: "Sorry! Login failed",
          });
        });
    }
  }, [data, dispatch, isUserLogged]);

  return isUserLogged ? (
    <Navigate to="/" />
  ) : (
    <Box
      className="container"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: 400,
          height: 400,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "32px" }}>
            Welcome
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "500", color: "#908cae" }}
          >
            Just another github clone
          </Typography>
        </Box>
        <Box
          component="a"
          href="https://github.com/login/oauth/authorize?client_id=ff0032ab89ceddbb5afd"
          sx={{
            margin: "2rem",
            padding: "10px",
            width: "60%",
            background: "white",
            display: "flex",
            color: "black",
            textDecoration: "none",
            textTransform: "uppercase",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid black",
            fontWeight: "600",
          }}
        >
          <img
            src={github}
            alt="github"
            style={{
              width: "20px",
              height: "20px",
              background: "white",
              marginRight: "1rem",
            }}
          />
          Login with github
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
