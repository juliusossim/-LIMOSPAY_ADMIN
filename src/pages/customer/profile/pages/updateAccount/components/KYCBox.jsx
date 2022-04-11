import React, { useState } from 'react';
// @mui
import {
  Stack,
  Box, Button
} from "@mui/material";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

export default function KYCBox() {

  return (
      <Stack spacing={3}>
        <div className="d-flex justify-content-between">
          <Box flex={1} className=""><small>Phone Number</small></Box>
          <Box flex={3} className="d-flex ">
            <div className="border-radius-5 mr-2 p-1 border"><small>+234</small></div>
            <div className="border-radius-5 mr-2 p-1 border" style={{width: '10vw'}}><small>81278889</small></div>
            <Button sx={{color: 'black'}} className="border-radius-5 mr-2 p-1 border d-flex" >
              <ArrowRightAltOutlinedIcon />
              <span><small>Verify</small></span>
            </Button>
            <div className="border-radius-5 ml-5 p-1 text-success d-flex">
              <CheckCircleOutlinedIcon />
              <span>Approved</span>
            </div>
          </Box>
        </div>
        <div className="d-flex justify-content-between">
          <Box flex={1} className=""><small>Email Address</small></Box>
          <Box flex={3} className="d-flex ">
            <div className="border-radius-5 mr-2 p-1 border" style={{width: '13vw'}}><small>bimpe@gmail.com</small></div>
            <Button sx={{color: 'black'}} className="border-radius-5 mr-2 p-1 border d-flex " >
              <ArrowRightAltOutlinedIcon />
              <small>Verify</small>
            </Button>
            <div className="border-radius-5 ml-5 p-1 text-success d-flex">
              <CheckCircleOutlinedIcon />
              <span>Approved</span>
            </div>
          </Box>
        </div>
      </Stack>
  );
}
