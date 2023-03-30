import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import Typography from "@mui/material/Typography";

const SuggestionProduct = () => {
  return (
    <div>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          margin: "auto",
          marginTop: "35px",
        }}
      >
        <Typography className=" " component="span" variant="h5">
          Suggestion Product
        </Typography>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <img
              alt="Remy Sharp"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              className="w-20 h-20 mr-5"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                <Typography
                  className="float-right text-gray-400"
                  component="span"
                  variant="body2"
                >
                  50$
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <img
              alt="Remy Sharp"
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              className="w-20 h-20 mr-5"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                <Typography
                  className="float-right text-gray-400"
                  component="span"
                  variant="body2"
                >
                  50$
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <img
              alt="Remy Sharp"
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              className="w-20 h-20 mr-5"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                <Typography
                  className="float-right text-gray-400"
                  component="span"
                  variant="body2"
                >
                  50$
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  );
};

export default SuggestionProduct;
