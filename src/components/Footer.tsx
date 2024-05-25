import React from "react";
import { Typography, Box, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        marginTop: "50px",
      }}
    >
      <Typography variant='body1' align='left'>
        Contact Us
        <br />
        <Link href='tel:+18577018474'>(857)701-8474</Link>
        <br />
        <Link href='mailto:example@gmail.com'>example@gmail.com</Link>
      </Typography>
      <Typography variant='body2'>
        &copy; 2024 Your Company Name. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
