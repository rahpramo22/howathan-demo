import * as React from "react";
import {useState, useEffect} from "react";
import {
  Box,
  Grid2,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import {Copyright, Phone} from "@mui/icons-material";
import {getProducts} from "./api/fetchProducts";
import CardContainer from "./components/FeatureCard";
import "./App.css";
import Chatbox from "./chatbox/Chatbox";
import ProductCollageList from "./components/ProductCollage";
import ProductCarousel from "./components/ProductCarousel";
import {Facebook, Instagram, Pinterest, Twitter} from "@mui/icons-material";
import Footer from "./components/Footer";
import Header from "./components/Header";

const socialIcon = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "20px",
};


function App() {
  const [productInfo, setProductInfo] = useState({});
  const [designName, setDesignName] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(true);
  const [count, setCount] = useState(0);

  const getProductsbyDesign = (productDesign='grid', index) => {
    const length = designName.length - 1;
    const productJson = productInfo[length-index] || [];
    switch (productDesign) {
      case "carousel":
        return (
          <ProductCarousel productData={productJson}>Carousel</ProductCarousel>
        );
      case "grid":
        return (
          <>
            <ProductCollageList productData={productJson}>
              collage view
            </ProductCollageList>
          </>
        );
      case "list":
        return (
          <CardContainer productData={productJson}>featured</CardContainer>
        );
      case "default":
        return (
          <>
          No result found
          </>
        );
    }
    return productDesign;
  };

  const fetchApiWithPrompt = async (prompt) => {
    try {
      setDataLoaded(false);
      const response = await fetch(
        `https://ikpxydrg3sk3heexz4h5a6mrlq0apdmc.lambda-url.us-east-1.on.aws/?query=${prompt}`
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse, jsonResponse.products, jsonResponse.view);
        const newDesign = [...designName];
        newDesign.unshift(jsonResponse.view?.name);
        setDesignName(newDesign);
        const newData={...productInfo};
        newData[count] =  jsonResponse.products;
        let updatCount = count + 1;
        setCount(updatCount);
        setProductInfo(newData);
        setDataLoaded(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{flexGrow: 1, mt: 2}}>
      {/* Fixed Header */}
      <AppBar
        position="fixed"
        sx={{backgroundColor: "#fff", color: "#1976d2", fontSize: "20px"}}
      >
        <Toolbar>
          <Typography variant="h5">PS DigiAI</Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content Area */}
      <Box sx={{flexGrow: 1, padding: 2, paddingLeft: '15px', mt: "80px", border: "1px solid grey", height: "86vh"}}>
        <Grid2 container spacing={2} sx={{height: "100%"}}>
          <Grid2
            size={4}
            display="flex"
            height='100%'
            overflowY="scroll"
          >
            <Box sx={{flexGrow: 1, position:"relative"}}>
              <Chatbox fetchApiWithPrompt={fetchApiWithPrompt}></Chatbox>
            </Box>
          </Grid2>
          <Grid2
            size={8}
            sx={{
              borderLeft: "1px solid #d3d3d3",
              //paddingLeft: "10px",
              height: "100vh",
              overflowY: "scroll",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                background: "radial-gradient(black, transparent)",
                backgroundImage: 'url("../images/bg-cover.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                "::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay with 50% opacity
                  zIndex: 1, // Ensures the overlay is above the background but below content
                },
              }}
            >
              {/* Header with Fixed Height */}
              <Box
                sx={{
                  backgroundColor: "lightsteelblue",
                  flexShrink: 0,
                  zIndex: 2,
                }}
              >
                <Header></Header>
              </Box>
              {!dataLoaded && (
                <div className="loading">
                   <Paper elevation={2} sx={{ padding: 1, fontSize:'20px', color:"rgba(187, 200, 238, 1)", backgroundColor:"white", zIndex:3, width: "500px" }}>
                  Your customised preview is loading ...
                  </Paper>
                </div>
              )}
              {/* Content Area */}
              {dataLoaded && (
                <Box
                  sx={{
                    height: "60vh",
                    flexGrow: 1,
                    overflowY: "auto",
                    margin: "12px",
                    zIndex: 2,
                  }}
                >
                  {designName.map((item,index)=>getProductsbyDesign(item, index))}
                </Box>
              )}
              {/* Footer with Fixed Height */}
              <Box
                sx={{
                  backgroundColor: "lightsteelblue",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  zIndex: 2,
                }}
              >
                <Footer></Footer>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}

export default App;
