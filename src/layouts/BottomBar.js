import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TwitterIcon from "@mui/icons-material/Twitter";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const BottomBar = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <BottomNavigation
        sx={{
          width: "100%",
          backgroundColor: "orange",
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="FacebookIcon"
          value="FacebookIcon"
          icon={<FacebookIcon className="text-white " />}
        />
        <BottomNavigationAction
          label="LinkedInIcon"
          value="LinkedInIcon"
          icon={<LinkedInIcon className="text-white" />}
        />
        <BottomNavigationAction
          label="TwitterIcon"
          value="TwitterIcon"
          icon={<TwitterIcon className="text-white" />}
        />
      </BottomNavigation>
    </div>
  );
};

export default BottomBar;
