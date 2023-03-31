import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import SearchComp from "../components/SearchComp";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../redux/actions/Product";
const Topbar2 = () => {
  const state = useSelector((state) => state.getcat);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(getCategory());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ backgroundColor: "#7b00ff", height: "60px" }}
        >
          <Toolbar>
            {state.getcat
              ? state.getcat.map((category, index) => (
                  <>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      href="/"
                      className="p-5"
                    >
                      {" "}
                      <a
                        className="cursor-pointer hover:opacity-75 float-left text-sm"
                        href="/home"
                      >
                        {" "}
                        {category}
                      </a>
                    </Typography>
                  </>
                ))
              : ""}
            <SearchComp />
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Topbar2;
