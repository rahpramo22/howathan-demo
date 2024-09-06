import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#232f3e",
        color: "#ffffff",
        padding: "1rem 0",
        width: "100%",
        borderTop: "1px solid #ddd",
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        {/* Footer Bottom Text */}
        <Box sx={{ textAlign: "center", mt: 1 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Your eCommerce Store. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
