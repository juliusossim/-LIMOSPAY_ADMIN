import { Box, Button, FormControl, Grid, InputLabel, Select, Stack } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import KYCBox from "../components/KYCBox";

UpgradeKYC.propTypes = {
  setCurrentTab: PropTypes.func,
};
export default function UpgradeKYC ({ setCurrentTab }){
  const [formData, setFormData] = useState({});
  const colors = {
    pending: 'danger',
    completed: 'success'
  }
  const status = 'completed';
  const countryCodes = ['234', '01', '03'];
  return (
    <div>
      <div className="row">
        <div className="col-5">
          <Button onClick={() => setCurrentTab({ component: null })}>
            <div className="d-flex" style={{color: 'black'}}>
              <KeyboardBackspaceOutlinedIcon />
              <small className="ml-1">
                Back
              </small>
            </div>
          </Button>
        </div>
        <div className="col-7 bold">
          Upgrade KYC Level
        </div>
      </div>
      <Box className="border-left border-right border-top border-bottom bg-white p-4">
        <div className="d-flex justify-content-between">
          <div className="bold">Tier 1</div>
          <div>
              <div>
                <small>Status</small>
              </div>
              <div className={`bg-${colors[status]} text-white px-4 py-1`}>{status}</div>
            </div>
        </div>
        <Box py={2} className="bold kyc-box-shadow ">KYC Requirement</Box>
        <div className="kycBox pt-4 border-left border-bottom border-right p-2">
         <KYCBox />
        </div>
        <Box pb={15} mt={5}>
          <div className="bold">You are limited to:</div>
          <div>Daily Number of Transfers- External (2) </div>
          <div>Daily limit - External transfer (N10,000)</div>
          <div>Single Transfer limit- External Transfer  (N5,000)</div>
          <div>Daily Number of Trasfers - Internal (10) </div>
          <div>Daily limit - Internal  Transfer - Within Wayabank: (N15,000)</div>
          <div>Single Transfer limit- Internal  Transfer - Within Wayabank : (N5,000)</div>
        </Box>
      </Box>
    </div>
  )
}