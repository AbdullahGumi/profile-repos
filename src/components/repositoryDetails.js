import { useState, useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { format } from "date-fns";

//images
import { dropdown, activity } from "../assets";
import StarIcon from "./svgIcons/starIcon";
import colorsJson from "../assets/colors.json";

const RepositoryDetails = ({ details }) => {
  const [langColor, setLangColor] = useState("#eee");
  useEffect(() => {
    for (const [key, value] of Object.entries(colorsJson)) {
      if (key === details.language) {
        setLangColor(value);
      }
    }
  }, [details.language]);
  return (
    <Box>
      <Grid container sx={{ paddingY: "16px" }}>
        <Grid item md={10}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                // marginBottom: "10px",
              }}
            >
              <Typography
                sx={{
                  ":hover": { cursor: "pointer", textDecoration: "underline" },
                  color: "#0969da",
                  textDecoration: "none",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                {details.name}
              </Typography>
              <Box
                sx={{
                  marginLeft: "4px",
                  color: "#57606a",
                  border: "1px solid #d0d7de",
                  borderRadius: "2em",
                  fontWeight: 500,
                  fontSize: "12px",
                  padding: "1px 7px",
                }}
              >
                {details.private ? "Private" : "Public"}
              </Box>
            </Box>
            {/* <Typography
              style={{ color: "#57606a", fontSize: "12px", marginY: "4px" }}
            >
              Forked from flutter/flutter
            </Typography> */}

            <Typography style={{ color: "#57606a", marginBottom: "1rem" }}>
              {details.description}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  backgroundColor: langColor,
                  borderRadius: "2em",
                  width: "12px",
                  height: "12px",
                  marginRight: "3px",
                }}
              />
              <Typography
                sx={{ fontSize: "12px", color: "#57606a", marginRight: "1rem" }}
              >
                {details.language}
              </Typography>
              {details.stargazers_count > 0 && (
                <Box sx={{ display: "flex" }}>
                  <StarIcon />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#57606a",
                      marginLeft: "2px",
                      marginRight: "1rem",
                    }}
                  >
                    {details.stargazers_count}
                  </Typography>
                </Box>
              )}

              <Typography
                sx={{ fontSize: "12px", color: "#57606a", marginRight: "1rem" }}
              >
                Updated on
                {" " + format(new Date(details.updated_at), "MMMM dd, yyyy")}
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item md={2}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignSelf: "end" }}>
              <Box
                sx={{
                  ":hover": { cursor: "pointer" },
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid",
                  background: "#f6f8fa",
                  borderColor: "#1b1f2426",
                  fontSize: "12px",
                  fontWeight: "500",
                  padding: "5px 10px",
                  borderTopLeftRadius: "6px",
                  borderBottomLeftRadius: "6px",
                  textTransform: "none",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <StarIcon />
                  <span style={{ marginLeft: "4px" }}>Star</span>
                </Box>
              </Box>
              <Box
                sx={{
                  ":hover": { cursor: "pointer" },
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid",
                  background: "#f6f8fa",
                  borderColor: "#1b1f2426",
                  fontSize: "12px",
                  fontWeight: "500",
                  padding: "5px 10px",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  textTransform: "none",
                }}
              >
                <img src={dropdown} alt="dropdown" />
              </Box>
            </Box>
            <img src={activity} alt="activity" style={{ marginTop: ".6rem" }} />
          </Box>
        </Grid>
      </Grid>
      <hr
        style={{
          borderWidth: "0px 0px 1px 0px",
          borderBottom: "1px solid #d8dee4",
          width: "100%",
        }}
      />
    </Box>
  );
};

export default RepositoryDetails;
