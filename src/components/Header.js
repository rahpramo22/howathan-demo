import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      {/* Header Top Section */}

      <Grid
        container
        alignItems="center"
        padding={1}
        spacing={2}
        sx={{ color: "#ffffff", background: "#131921" }}
      >
        {/* Logo */}
        <Grid item xs={3}>
          <Link href="/" underline="none" sx={{ color: "#ffffff" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src="./logo.png" alt="E-Shop Logo" width="50" height="50" />
              <Typography variant="h5" component="div" color="inherit" sx={{fontSize: "18px"}}>
                E-Shop
              </Typography>
            </Box>
          </Link>
        </Grid>

        {/* Search Box */}
        <Grid item xs={5}>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search for products..."
              size="small"
              sx={{ backgroundColor: "white" }}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              color="inherit"
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Cart and Profile Icons */}
        <Grid item xs={4} sx={{ textAlign: "right" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              justifyContent: "end",
            }}
          >
            <Button variant="contained">Publish</Button>
            <Link
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                alignItems: "flex-start",
                color: "inherit",
              }}
              underline="hover"
            >
              <Typography component="div">Sign in</Typography>
            </Link>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <IconButton aria-label="cart" color="inherit">
                <ShoppingCartIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Navigation Links Section */}
      <Box
        sx={{
          paddingTop: "8px",
          backgroundColor: "#232f3e",
          color: "#ffffff",
        }}
      >
        <Grid container spacing={3} padding={2} justifyContent="center">
          <Grid item>
            <Link color="inherit" underline="hover" padding={1}>
              All
            </Link>
          </Grid>
          <Grid item>
            <Link color="inherit" underline="hover" padding={1}>
              Fresh
            </Link>
          </Grid>
          <Grid item>
            <Link color="inherit" underline="hover" padding={1}>
              Sell
            </Link>
          </Grid>
          <Grid item>
            <Link color="inherit" underline="hover" padding={1}>
              Best Sellers
            </Link>
          </Grid>
          <Grid item>
            <Link color="inherit" underline="hover" padding={1}>
              Today's deals
            </Link>
          </Grid>
          <Grid item>
            <Link color="inherit" underline="hover" padding={1}>
              Mobiles
            </Link>
          </Grid>
          <Grid item>
            <Link color="inherit" underline="hover" padding={1}>
              Electronics
            </Link>
          </Grid>
          <Grid item>
            <Link color="inherit" underline="hover" padding={1}>
              Fashion
            </Link>
          </Grid>
          <Grid item>
            <Link color="inherit" underline="hover" padding={1}>
              Customer Service
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
