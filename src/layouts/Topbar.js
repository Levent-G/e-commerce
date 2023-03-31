import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import StoreIcon from "@mui/icons-material/Store";
const Topbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "orange", height: "45px" }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              href="/"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <a
                className="cursor-pointer hover:opacity-75 float-left"
                href="/home"
              >
                {" "}
                <StoreIcon /> BASKET APP <StoreIcon />
              </a>
              <ul className="">
                <li className="float-right ml-5 text-sm">
                  <a href="/">
                    {" "}
                    <Avatar
                      alt="Remy Sharp"
                      src="https://mui.com/static/images/avatar/1.jpg"
                      className="float-left"
                    />
                    <p className="float-left text-lg ml-2">User Name</p>
                    <button
                      type="submit"
                      className="bg-red-600 p-2 text-white hover:bg-red-500  ease-in-out duration-300 ml-5 float-right"
                    >
                      Logout
                    </button>
                  </a>
                </li>
              </ul>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Topbar;
