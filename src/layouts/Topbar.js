import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import StoreIcon from "@mui/icons-material/Store";
const Topbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
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
                {user && (
                  <>
                    <StoreIcon /> BASKET APP <StoreIcon />
                  </>
                )}
              </a>
              <ul className="">
                <li className="float-right ml-5 text-sm">
                  {" "}
                  {user && (
                    <div>
                      <Avatar
                        alt="Remy Sharp"
                        src={user.fotoURL}
                        className="float-left"
                      />
                      <span className="float-left text-lg ml-2">
                        {user.displayName}
                      </span>{" "}
                      &nbsp;
                      <button
                        onClick={logout}
                        className="bg-red-600 p-2 float-left ml-2"
                      >
                        Çıkış
                      </button>
                    </div>
                  )}
                </li>
                <li className="float-right ml-5 text-sm">
                  {" "}
                  {!user && (
                    <div>
                      <Link to="/">
                        <button className="bg-gradient-to-b from-orange-600  to-purple-700  p-3 float-left">
                          Giriş
                        </button>
                      </Link>
                      <Link to="/signup">
                        {" "}
                        <button className="bg-gradient-to-b from-orange-600  to-purple-700  p-3 float-left ml-5">
                          Üye ol
                        </button>
                      </Link>
                    </div>
                  )}
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
