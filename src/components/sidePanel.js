import React from "react";
import { Box, Typography } from "@mui/material";

import UsersIcon from "./svgIcons/usersIcon";
import LocationIcon from "./svgIcons/locationIcon";
import EmailIcon from "./svgIcons/emailIcon";
import TwitterIcon from "./svgIcons/twitterIcon";
import { useSelector } from "react-redux";

const SidePanel = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ position: "relative", zIndex: 10 }}>
        <Box
          sx={{
            width: { lg: "296px", md: "210px" },
            height: { lg: "296px", md: "210px" },
            background: "#EEE",
            borderRadius: "50%",
          }}
        >
          <Box
            component="img"
            sx={{
              objectFit: "cover",
              borderRadius: "50%",
              width: { lg: "100%", md: "210px", xs: "100%" },
              height: { lg: "100%", md: "210px", xs: "100%" },
              border: "1px solid #d0d7de",
            }}
            src={user.avatar_url}
            alt="proilfe"
          />
        </Box>

        <img
          style={{
            background: "white",
            objectFit: "cover",
            width: "35px",
            height: "35px",
            position: "absolute",
            bottom: "10%",
            right: "3%",
            borderRadius: "50%",
            border: "1px solid #d0d7de",
          }}
          src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png"
          alt="proilfe"
        />
      </Box>
      <Box sx={{ lineHeight: 1 }}>
        <Typography sx={{ fontSize: "24px", fontWeight: 600, mt: "10px" }}>
          {user.name}
        </Typography>
        <Typography
          sx={{ fontSize: "20px", fontWeight: 300, color: "#57606a" }}
        >
          {user.login}
        </Typography>
        <Box
          sx={{
            mt: "1rem",
            ":hover": { cursor: "pointer" },
            width: "100%",
            background: "#f6f8fa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #1b1f2426",
            height: "32px",
            borderRadius: "6px",
          }}
        >
          Follow
        </Box>
        <p>{user.bio}</p>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          <UsersIcon />
          <span
            style={{
              fontWeight: 600,
              marginLeft: "5px",
              marginRight: "5px",
            }}
          >
            {user.followers}
          </span>
          <span style={{ color: "#24292f", fontSize: "14px" }}>followers</span>
          <span style={{ marginLeft: "5px", marginRight: "5px" }}>·</span>
          <span style={{ fontWeight: 600, marginRight: "5px" }}>
            {user.following}
          </span>
          <span style={{ color: "#24292f", fontSize: "14px" }}>following</span>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {user.location && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: ".5rem",
                mt: "2rem",
              }}
            >
              <LocationIcon />
              <span
                style={{
                  marginLeft: "8px",
                  fontSize: "14px",
                }}
              >
                {user.location}
              </span>
            </Box>
          )}
          {user.email && (
            <Box sx={{ display: "flex", alignItems: "center", mb: ".5rem" }}>
              <EmailIcon />
              <span
                style={{
                  marginLeft: "8px",
                  fontSize: "14px",
                }}
              >
                {user.email}
              </span>
            </Box>
          )}
          {user.twitter_username && (
            <Box sx={{ display: "flex", alignItems: "center", mb: ".5rem" }}>
              <TwitterIcon />
              <span
                style={{
                  marginLeft: "8px",
                  fontSize: "14px",
                }}
              >
                @{user.twitter_username}
              </span>
            </Box>
          )}
        </Box>

        <hr style={{ borderWidth: "0 0 1px 0", margin: "2.1rem 0 10px 0" }} />
        <Typography sx={{ fontWeight: 600, mb: "8px" }}>
          Achievements
        </Typography>
        <img
          style={{ width: "64px", height: "65px" }}
          src="https://github.githubassets.com/images/modules/profile/badge--acv-64.png"
          alt="award"
        />
      </Box>
    </Box>
  );
};

export default SidePanel;
