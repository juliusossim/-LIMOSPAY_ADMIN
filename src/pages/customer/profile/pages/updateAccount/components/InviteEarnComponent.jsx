import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import InviteFriend from "../screens/InviteFriend";

InviteEarnComponent.propTypes = {
  amount: PropTypes.number,
  setCurrentTab: PropTypes.func,
  hide: PropTypes.bool,
  code: PropTypes.string
};
export default function InviteEarnComponent ({ amount, setCurrentTab, hide, code  }){
  return (
    <Box className="pointer" onClick={() => setCurrentTab({ component: <InviteFriend setCurrentTab={setCurrentTab} /> })} style={{border: '1px solid grey'}} p={1}>
      <Grid container spacing={2} border>
        <Grid item xs={12} md={8} pr={4}>
          <Box sx={{ mb: 3 }} className="bold">Invite & Earn</Box>
          <small className="">
            <span>Referral Code:</span>
            <Typography color="error" component="span"  className="ml-2 error">{code}</Typography>
          </small>
        </Grid>
        <Grid item xs={12} md={4}>
          <small>Amount Earn</small>
          <div>{hide ? '*********' : `N${amount.toLocaleString()}`}</div>
        </Grid>
      </Grid>
    </Box>
  )
}