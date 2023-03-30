import React from "react";
import CardComp from "../components/CardComp";
import { getSearch } from "../redux/actions/Product";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const CategoryPage = () => {
  const { searchKey } = useParams();

  const state = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getSearch(searchKey));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return (
    <div>
      {" "}
      <Box className="w-full m-5">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {state.search
            ? state.search.map((product, index) => (
                <div key={index}>
                  {console.log(product, "ürün")}
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

export default CategoryPage;
