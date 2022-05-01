import { useEffect, useState } from "react";
import { Grid, Box, CircularProgress } from "@mui/material";

import Filter from "../components/filter";
import RepositoryDetails from "../components/repositoryDetails";
import SidePanel from "../components/sidePanel";

import { useDispatch, useSelector } from "react-redux";
import { getRepositories } from "../redux/repositories/repositoriesSlice";
import { getUser } from "../redux/user/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repositories.repos);
  const status = useSelector((state) => state.repositories.status);
  const [searchedRepo, setSearchedReop] = useState("");
  useEffect(() => {
    dispatch(getRepositories());
    dispatch(getUser());
  }, [dispatch]);
  return (
    <Box className="container">
      <Grid container sx={{ marginTop: "1rem" }} columnSpacing={3}>
        <Grid item md={3} sx={{}}>
          <SidePanel />
        </Grid>
        <Grid item md={9}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Filter
              searchedRepo={searchedRepo}
              setSearchedReop={setSearchedReop}
            />
            <hr
              style={{
                borderWidth: "0px 0px 1px 0px",
                borderBottom: "1px solid #d8dee4",
                width: "100%",
                marginTop: "1rem",
              }}
            />
            {/* show first 20 and also filter by name*/}
            {status === "success" ? (
              repos
                .slice(0, 20)
                .map(
                  (repo, i) =>
                    repo.name.includes(searchedRepo) && (
                      <RepositoryDetails details={repo} key={i} />
                    )
                )
            ) : (
              // <LinearProgress color="success" />
              <CircularProgress
                sx={{ alignSelf: "center", mt: "10rem" }}
                color="success"
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
