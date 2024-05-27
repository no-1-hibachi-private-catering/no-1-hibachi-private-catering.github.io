import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { PHONE_NUMBER } from "../constants";

const Booking: React.FC = () => {
  return (
    <Grid container direction='column' alignItems='center' spacing={2}>
      {/* Title */}
      <Grid item>
        <Typography variant='h4' gutterBottom>
          Booking
        </Typography>
      </Grid>
      {/* Cards */}
      <Grid item>
        <Grid container justifyContent='center' spacing={2}>
          <Grid item>
            <Card sx={{ maxWidth: 300 }}>
              <CardContent>
                <Typography variant='h4' align='center' gutterBottom>
                  Rhode Island
                </Typography>
                <Typography variant='body1'>
                  Book your hibachi experience in Rhode Island.
                </Typography>
                <Typography variant='h5'>Text/Call: {PHONE_NUMBER}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 300 }}>
              <CardContent>
                <Typography variant='h4' align='center' gutterBottom>
                  Massachusetts
                </Typography>
                <Typography variant='body1'>
                  Book your hibachi experience in Massachusetts.
                </Typography>
                <Typography variant='h5'>Text/Call: {PHONE_NUMBER}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Booking;
