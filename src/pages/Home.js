import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductApiAction } from "../redux/actions/Product";
import { useEffect } from "react";
import CardComp from "../components/CardComp";

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

  return (
    <div>
      {" "}
      <Box className="w-full m-5">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
    </div>
  );
};

export default Home;
