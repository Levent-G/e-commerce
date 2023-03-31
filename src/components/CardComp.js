import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";
import { BasketAddProduct } from "../redux/actions/BasketActions";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Basket from "../pages/Basket";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
  height: "100%",
};
const CardComp = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatchBasket = useDispatch();

  const addItem = (product) => {
    try {
      dispatchBasket(BasketAddProduct(product));
      toast.success("Sepete Eklendi", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.log(error);
      toast.error("Sepete Eklenmedi", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div>
      <Card
        sx={{ minWidth: 345, maxWidth: 345 }}
        className="float-left m-5 h-auto mb-20"
      >
        <CardActionArea>
          <CardMedia
            image={props.product.image}
            title="green iguana"
            className="object-cover h-64 rounded-md   "
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="truncate w-70"
            >
              {props.product.title}
            </Typography>
            <Typography variant="h7" className="  truncate w-30">
              Category: {props.product.category}
            </Typography>
            <Typography
              variant="h5"
              className="pt-4 font-bold text-red-600"
              component="h5"
            >
              $ {props.product.price}
            </Typography>
            <Rating
              name="half-rating"
              defaultValue={props.product.rating.rate}
            />
            <Typography
              variant="h6"
              className="float-right text-gray-500"
              component="h5"
            >
              Stok:{props.product.rating.count}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <button
            className="bg-orange-400 p-2 text-white hover:bg-orange-300  ease-in-out duration-300"
            onClick={() => addItem(props.product)}
          >
            Add Basket
          </button>

          <button
            onClick={handleOpen}
            className="bg-orange-600 p-2 text-white hover:bg-orange-300  ease-in-out duration-300"
          >
            Open Basket
          </button>
        </CardActions>
      </Card>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Basket />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CardComp;
