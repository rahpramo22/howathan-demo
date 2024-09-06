import {
  Grid2,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

export default function ProductCollageList({ productData: data }) {
  const noOfItems = 4;
  const productCards = Math.ceil(data.length / noOfItems);
  let productItems = [];
  for (let i = 1; i <= productCards; i++) {
    let productObj = { products: [] };
    const maxItems = i * noOfItems;
    const itemsLength = data.length < maxItems ? data.length : maxItems;
    for (let j = maxItems - noOfItems; j < itemsLength; j++) {
      productObj.products.push(data[j]);
    }
    productItems.push(productObj);
  }
  console.log(productItems, 'from collage view')
  return (
    <Grid2 container spacing={2} sx={{ justifyContent: "center", margin: "5px 0", justifyContent: "flex-start",
       display: "flex",
      flexDirection: "row",
      overflowX: "scroll",
      flexWrap: "nowrap"}}>
      {productItems.map((item) => (
        <Paper elevation={2} sx={{ padding: 1, maxWidth: "300px", minWidth:"250px", backgroundColor:"antiquewhite" }}>
          <Typography
            sx={{ fontSize: "15px", marginBottom: "2px" }}
            
          >Product recommendations</Typography>
          <Grid2 container spacing={1}>
            {item.products.map((product, index) => (
              <Grid2 item size={6} key={index}>
                <CollageView image={product.main_image_url} title={product.product_name} />
              </Grid2>
            ))}
          </Grid2>
        </Paper>
      ))}
    </Grid2>
  );
}

const CollageView = ({ image, title }) => (
  <Card variant="outlined">
    <CardMedia
      component="img"
      height={80}
      sx={{ aspectRatio: '4/3', objectFit: 'contain', margin: "5px 0px" }}
      image={image}
      alt={title}
    />
    <CardContent sx={{padding: 0, textAlign:"center"}}>
      <Typography sx={{fontSize: "12px"}} component="div">{title}</Typography>
    </CardContent>
  </Card>
);
