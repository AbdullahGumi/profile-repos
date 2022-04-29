import { Box, Typography } from "@mui/material";
import React from "react";

import OverviewIcon from "./svgIcons/overviewIcon";
import ReposIcon from "./svgIcons/reposIcon";
import ProjectsIcon from "./svgIcons/projectsIcon";
import PackagesIcon from "./svgIcons/packagesIcon";
import StarIcon from "./svgIcons/starIcon";
import { useSelector } from "react-redux";

// import "../index.css";

const Header = () => {
  const repos = useSelector((state) => state.repositories.repos);

  return (
    <Box
      sx={{
        background: "white",
        width: "100%",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid #d8dee4",
        position: "sticky",
        top: 0,
      }}
    >
      <Box
        sx={{
          marginRight: "1rem",
          height: "100%",
          display: "flex",
          alignItems: "center",
          ":hover": {
            cursor: "pointer",
          },
          paddingX: "10px",
          justifyContent: "space-between",
        }}
      >
        <OverviewIcon />
        <Typography sx={{ fontSize: "14px", marginLeft: "0.6rem" }}>
          Overview
        </Typography>
      </Box>
      <Box
        sx={{
          marginRight: "1rem",
          height: "100%",
          display: "flex",
          alignItems: "center",
          ":hover": {
            cursor: "pointer",
          },
          paddingX: "10px",
          borderBottom: "2px solid #fd8c73",
          justifyContent: "space-between",
        }}
      >
        <ReposIcon />
        <Typography sx={{ fontSize: "14px", marginLeft: "0.6rem" }}>
          Repositories
        </Typography>
        <Box
          sx={{
            marginLeft: "4px",
            borderRadius: "2em",
            backgroundColor: "#afb8c133",
            fontSize: "12px",
            padding: "1px 6px",
          }}
        >
          {repos.length}
        </Box>
      </Box>
      <Box
        sx={{
          marginRight: "1rem",
          height: "100%",
          display: "flex",
          alignItems: "center",
          ":hover": {
            cursor: "pointer",
          },
          paddingX: "10px",
          justifyContent: "space-between",
        }}
      >
        <ProjectsIcon />
        <Typography sx={{ fontSize: "14px", marginLeft: "0.6rem" }}>
          Projects
        </Typography>
      </Box>
      <Box
        sx={{
          marginRight: "1rem",
          height: "100%",
          display: "flex",
          alignItems: "center",
          ":hover": {
            cursor: "pointer",
          },
          paddingX: "10px",
          justifyContent: "space-between",
        }}
      >
        <PackagesIcon />
        <Typography sx={{ fontSize: "14px", marginLeft: "0.6rem" }}>
          Packages
        </Typography>
      </Box>
      <Box
        sx={{
          marginRight: "1rem",
          height: "100%",
          display: "flex",
          alignItems: "center",
          ":hover": {
            cursor: "pointer",
          },
          paddingX: "10px",
          justifyContent: "space-between",
        }}
      >
        <StarIcon />
        <Typography sx={{ fontSize: "14px", marginLeft: "0.6rem" }}>
          Stars
        </Typography>
        <Box
          sx={{
            marginLeft: "4px",
            borderRadius: "2em",
            backgroundColor: "#afb8c133",
            fontSize: "12px",
            padding: "1px 6px",
          }}
        >
          190
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
