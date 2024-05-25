import React from "react";
import { Grid, Typography } from "@mui/material";

const ServiceMenu: React.FC = () => {
  return (
    <div>
      <Grid container spacing={3} sx={{ maxWidth: 1200, margin: "auto" }}>
        <Grid item xs={12}>
          <Typography variant='h3' align='center'>
            Grand Opening 15% Off
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h4' align='left'>
            (857)701-8474
          </Typography>
        </Grid>
        {/* First column */}
        <Grid item xs={12} sm={5}>
          <Typography variant='h6'>How it works?</Typography>
          <Typography>
            The host only has to set up tables and chairs, and provide plates
            and utensils. We bring our own hibachi grill and experienced chef.
            Each guest can choose their own customized meal. It starts with a
            side salad and comes with hibachi vegetables, fried rice, and 2
            choices of protein.
          </Typography>
          <br />
          <Typography variant='h6'>Hibachi Pricing</Typography>
          <Typography>
            $50 per person
            <br />
            $25 per child under 13
            <br />
            $500 minimum for all parties *<br />
            *Price may vary based on event location
          </Typography>
        </Grid>
        {/* Second column */}
        <Grid item xs={12} sm={3}>
          <Typography variant='h6'>Protein Choices</Typography>
          <Typography>
            Chicken
            <br />
            Steak
            <br />
            Shrimp
            <br />
            Scallops
            <br />
            Salmon
            <br />
            Vegetable (+tofu)
            <br />
            Filet Mignon (+$5)
            <br />
            Lobster Tail (+$10)
          </Typography>
        </Grid>
        {/* Third column */}
        <Grid item xs={12} sm={4}>
          <Typography variant='h6'>Appetizers</Typography>
          <Typography>
            Gyoza $10 (6pcs)
            <br />
            Edamame $5
          </Typography>
          <br />
          <Typography variant='h6'>Side Orders</Typography>
          <Typography>
            Chicken (+$10)
            <br />
            Steak (+$10)
            <br />
            Shrimp (+$10)
            <br />
            Scallops (+$10)
            <br />
            Salmon (+$10)
            <br />
            Vegetable (+tofu) (+$10)
            <br />
            Noodles (+$4)
            <br />
            Filet Mignon (+$15)
            <br />
            Lobster Tail (+$15)
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ServiceMenu;
