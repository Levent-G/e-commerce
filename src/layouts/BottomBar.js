import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";

import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon className="text-white" />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon className="text-white" />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon className="text-white" />}
        />
      </BottomNavigation>
    </div>
  );
};

export default BottomBar;
