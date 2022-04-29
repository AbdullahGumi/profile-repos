import { useEffect } from "react";
import { Grid, Box } from "@mui/material";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/header";
import Filter from "./components/filter";
import RepositoryDetails from "./components/repositoryDetails";

import { useDispatch, useSelector } from "react-redux";
import { getRepositories } from "./redux/repositories/repositoriesSlice";
import { getUser } from "./redux/user/userSlice";

import SidePanel from "./components/sidePanel";
function App() {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repositories.repos);
  useEffect(() => {
    dispatch(getRepositories());
    dispatch(getUser());
  }, [dispatch]);
  return (
    <Box>
      <GlobalStyle />
      <Header />
      <Box className="container">
        <Grid container sx={{ marginTop: "1rem" }} columnSpacing={3}>
          <Grid item md={3} sx={{}}>
            <SidePanel />
          </Grid>
          <Grid item md={9}>
            <Box
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <Filter />
              <hr
                style={{
                  borderWidth: "0px 0px 1px 0px",
                  borderBottom: "1px solid #d8dee4",
                  width: "100%",
                  marginTop: "1rem",
                }}
              />
              {repos.map((repo, i) => (
                <RepositoryDetails details={repo} key={i} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
