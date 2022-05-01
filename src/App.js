import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/header";
import Login from "./pages/login";
import Home from "./pages/home";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
