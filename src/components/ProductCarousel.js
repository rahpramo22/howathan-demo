import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Carousel from "react-material-ui-carousel";
const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: "none !important",
    background: "url(../images/bg-product.jpg) !important",
    backgroundSize: "cover !important",
    backgroundPosition: "top center !important",
  },
  itemContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "400px",
    margin: "0 auto",
  },
  details: {
    padding: "0 20px 20px",
    maxWidth: "400px",
  },
  description: {
    padding: "20px 0",
  },
  butttons: {
    display: "flex",
    gap: "20px",
  },
  productImage: {
    width: "300px",
  },
}));
const ProductCarousel = (props) => {
  const classes = useStyles();
  const products = props.productData;
  if(!products && products.length==0){
    return;
  }
  return (
    <Carousel animation="fade" navButtonsAlwaysVisible={true}>
      {products.map((product, i) => (
        <Paper key={i} elevation={3} className={classes.paper}>
          <div className={classes.itemContainer}>
            <div className={classes.productImage}>
              <img
                src={product.main_image_url}
                alt={product.product_name}
                style={{
                  width: "100%",
                  // maxHeight: "300px",
                  // objectFit: "cover",
                  display: "block",
                  margin: "5px",
                  maxWidth: "100%",
                }}
              />
            </div>
            <div className={classes.details}>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14, textTransform: "uppercase" }}
              >
                Limited Stock
              </Typography>
              <Typography variant="h4">
                <strong>{product.product_name}</strong>
              </Typography>
              <Typography className={classes.description}>
                {product.product_description}
              </Typography>
              <div className={classes.butttons}>
                <Button variant="outlined" style={{ color: "#383737", borderColor: "#383737" }}>View details</Button>
                <Button variant="contained" style={{ backgroundColor: "#383737" }}>Add to cart</Button>
              </div>
            </div>
          </div>
        </Paper>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
