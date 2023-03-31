import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import SearchComp from "../components/SearchComp";

const Topbar2 = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ backgroundColor: "#7b00ff", height: "60px" }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              href="/"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              {" "}
              <a
                className="cursor-pointer hover:opacity-75 float-left text-lg"
                href="/home"
              >
                {" "}
                Cat1
              </a>
              <a
                className="cursor-pointer hover:opacity-75 float-left ml-5 text-lg"
                href="/home"
              >
                {" "}
                Cat2
              </a>
              <a
                className="cursor-pointer hover:opacity-75 float-left ml-5 text-lg"
                href="/home"
              >
                {" "}
                Cat3
              </a>
            </Typography>

            <SearchComp />
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Topbar2;
