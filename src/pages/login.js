import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../redux/user/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const isUserLogged = useSelector((state) => state.user.isLogged);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });

  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes("?code=");
    console.log("isUserLogged", isUserLogged);
    // If Github API returns the code parameter
    if (hasCode) {
      console.log("notUserLogged", isUserLogged);

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
    <a href="https://github.com/login/oauth/authorize?client_id=ff0032ab89ceddbb5afd">
      Login with github from server
    </a>
  );
};

export default Login;
