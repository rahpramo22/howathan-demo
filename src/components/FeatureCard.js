import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid2,
} from "@mui/material";

const ProductCard = ({product: {product_name, product_description, main_image_url}}) => {
  return (
    <Card sx={{maxWidth: 260, minWidth: 100, justifyContent:"center", margin:"10px 0"}}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={main_image_url} alt={product_name}
              sx={{ aspectRatio: '4/3', objectFit: 'contain', margin: "5px 0px" }} />
        <CardContent>
          <Typography gutterBottom component="div">
            {product_name}
          </Typography>
          <Typography color="text.secondary">
            {product_description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const CardContainer = ({productData}) => {
  console.log(productData);
  return (
    <Grid2
      className="feature_container"
      container
      spacing={{xs: 2, md: 3}}
      columns={{xs: 1, sm: 2, md: 3, lg: 4, xl: 4}}
    >
      {productData.map((product, index) => (
        <Grid2 display="flex" xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
          <ProductCard product={product} />
        </Grid2>
      ))}
    </Grid2>
  );
};
export default CardContainer;
