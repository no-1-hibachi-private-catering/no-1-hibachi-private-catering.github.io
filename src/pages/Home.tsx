import React from "react";
import { Typography, Box } from "@mui/material";
import ServiceMenu from "../components/ServiceMenu";
import Booking from "../components/Booking";

const Home: React.FC = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh", // Adjust as needed
        }}
      >
        <Typography variant='h3' align='right'>
          We Bring
          <br />
          Hibachi
          <br />
          To Your Backyard
        </Typography>
      </Box>
      <ServiceMenu />
      <Booking />
    </div>
  );
};

export default Home;
