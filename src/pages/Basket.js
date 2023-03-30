import React from "react";

import { useSelector, useDispatch } from "react-redux";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import SuggestionProduct from "../pages/SuggestionProduct";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { removeFromCart } from "../redux/actions/BasketActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Basket = () => {
  const state = useSelector((state) => state.basketproduct);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (producBasket) => {
    try {
      dispatch(removeFromCart(producBasket));
      toast.error("Ürün Silindi", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getTotalPrice = () => {
    let total = 0;
    state.basketproduct.forEach((item) => {
      total += item.body.price;
    });
    return total;
  };

  return (
    <div>
      {" "}
      <List
        sx={{
          width: "100%",
          maxWidth: 560,
          bgcolor: "background.paper",
          margin: "auto",
          marginTop: "5px",
        }}
      >
        <Typography component="span" variant="h4">
          Basket
        </Typography>
        {state.basketproduct.map((producBasket, index) => (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <img
                  alt="Remy Sharp"
                  src={producBasket.body?.image}
                  className="w-20 h-20 mr-5"
                />
              </ListItemAvatar>
              <ListItemText
                primary={producBasket.body?.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      className="text-gray-400 "
                    >
                      {producBasket.body?.description}
                    </Typography>
                  </React.Fragment>
                }
              />
              <p className="float-right font-bold  text-black bg-gray-300 p-2 rounded-md ">
                ${producBasket.body?.price}
              </p>
            </ListItem>

            <Divider variant="inset" component="li" />
          </>
        ))}

        {state.basketproduct?.length !== 0 ? (
          <>
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={() => handleRemoveFromCart(state.basketproduct)}
            >
              Delete Basket
            </Button>
            <Button
              variant="contained"
              size="small"
              color="success"
              className="float-right"
            >
              Approve Basket
            </Button>
            <p className=" font-bold  text-black bg-gray-300 p-2 rounded-md text-2xl mt-3 ">
              Basket Total Price: ${getTotalPrice()}
            </p>
          </>
        ) : (
          <Typography component="h5" variant="h5" className="text-gray-500">
            Basket Empty
          </Typography>
        )}
      </List>
      <SuggestionProduct />
    </div>
  );
};

export default Basket;
