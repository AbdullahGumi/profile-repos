import React from "react";
import { Grid, Box, Button, Menu, MenuItem, Typography } from "@mui/material";

//images
import { dropdown } from "../assets";

const Filter = () => (
  <Grid
    container
    spacing={5}
    sx={{
      display: "flex",
      alignItems: "center",
    }}
  >
    <Grid item md={6}>
      <Box
        type="text"
        component="input"
        placeholder="Find a repository…"
        sx={{
          fontSize: "14px",
          width: "100%",
          borderRadius: "6px",
          padding: "5px 12px",
          border: "1px solid #d0d7de",
        }}
      />
    </Grid>
    <Grid item md={5}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ marginRight: "4px" }}>
          <Button
            sx={{
              border: "1px solid",
              background: "#f6f8fa",
              borderColor: "#1b1f2426",
              fontSize: "14px",
              fontWeight: "500",
              padding: "5px 16px",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "space-between",
              textTransform: "none",
            }}
            onClick={(e) => console.log(e.currentTarget)}
          >
            <Typography sx={{ color: "#666666" }}>Type</Typography>
            <img src={dropdown} alt="dropdown" />
          </Button>
          <Menu
            // anchorEl={servicesAnchorEl}
            open={false}
            onClose={() => console.log(null)}
          >
            <MenuItem onClick={(e) => console.log(null)}>service1</MenuItem>
            <MenuItem onClick={(e) => console.log(null)}>service2</MenuItem>
            <MenuItem onClick={(e) => console.log(null)}>service3</MenuItem>
          </Menu>
        </Box>
        <Box sx={{ marginRight: "4px" }}>
          <Button
            sx={{
              border: "1px solid",
              background: "#f6f8fa",
              borderColor: "#1b1f2426",
              fontSize: "14px",
              fontWeight: "500",
              padding: "5px 16px",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "space-between",
              textTransform: "none",
            }}
            onClick={(e) => console.log(e.currentTarget)}
          >
            <Typography sx={{ color: "#666666" }}>Language</Typography>
            <img src={dropdown} alt="dropdown" />
          </Button>
          <Menu
            // anchorEl={servicesAnchorEl}
            open={false}
            onClose={() => console.log(null)}
          >
            <MenuItem onClick={(e) => console.log(null)}>service1</MenuItem>
            <MenuItem onClick={(e) => console.log(null)}>service2</MenuItem>
            <MenuItem onClick={(e) => console.log(null)}>service3</MenuItem>
          </Menu>
        </Box>
        <Box sx={{ marginRight: "4px" }}>
          <Button
            sx={{
              border: "1px solid",
              background: "#f6f8fa",
              borderColor: "#1b1f2426",
              fontSize: "14px",
              fontWeight: "500",
              padding: "5px 16px",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "space-between",
              textTransform: "none",
            }}
            onClick={(e) => console.log(e.currentTarget)}
          >
            <Typography sx={{ color: "#666666" }}>Sort</Typography>
            <img src={dropdown} alt="dropdown" />
          </Button>
          <Menu
            // anchorEl={servicesAnchorEl}
            open={false}
            onClose={() => console.log(null)}
          >
            <MenuItem onClick={(e) => console.log(null)}>service1</MenuItem>
            <MenuItem onClick={(e) => console.log(null)}>service2</MenuItem>
            <MenuItem onClick={(e) => console.log(null)}>service3</MenuItem>
          </Menu>
        </Box>
        <Box
          sx={{
            ":hover": { cursor: "pointer" },
            marginLeft: "16px",
            background: "#2da44e",
            border: "1px solid",
            borderColor: "#1b1f2426",
            fontSize: "14px",
            fontWeight: "500",
            padding: "5px 16px",
            borderRadius: "6px",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            textTransform: "none",
          }}
        >
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
          >
            <path
              fillRule="evenodd"
              fill="white"
              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
            ></path>
          </svg>
          <Typography
            sx={{
              marginLeft: "4px",
              color: "white",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            New
          </Typography>
        </Box>
      </Box>
    </Grid>
  </Grid>
);

export default Filter;
