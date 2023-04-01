import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductApiAction } from "../redux/actions/Product";
import { useEffect } from "react";
import CardComp from "../components/CardComp";
import BottomBar from "../layouts/BottomBar";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
const Home = () => {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(ProductApiAction());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  console.log(state.products, "aa");
  return (
    <div>
      {" "}
      <Box className="mr-auto ml-auto ">
        <Grid>
          {state.products
            ? state.products.map((product, index) => (
                <div key={index}>
                  <Grid>
                    <CardComp product={product} />
                  </Grid>
                </div>
              ))
            : ""}
        </Grid>
      </Box>
      <BottomBar />
    </div>
  );
};

export default Home;
