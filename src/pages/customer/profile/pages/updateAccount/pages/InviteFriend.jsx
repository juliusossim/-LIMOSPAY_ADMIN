import { Alert, Box, Button, FormControl, Grid, InputLabel, Select, Stack } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import { copyText } from "../../../../../../utilities/stringOperations";

InviteFriend.propTypes = {
  setCurrentTab: PropTypes.func,
};
export default function InviteFriend ({ setCurrentTab }){
  const [formData, setFormData] = useState({});
  const colors = {
    pending: 'danger',
    completed: 'success'
  }
  const referralCode = '22BCA7RT';
  const totalEarning = 23000;
  const totalSignup = 15;
  const copySuccess = ({ copied, str }) => {
   if (copied === str ) {
     return <Alert severity="success">Copied to clipboard</Alert>
   }
     return <Alert severity="error">Failed to copy</Alert>

  }
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
          Account Settings
        </div>
      </div>
      <Box className="border-left border-right border-top border-bottom bg-white p-4">
      <div className="row">
        <div className="col-md-7">
          <div className="col-md-8">
            <h5>Invite your friends and Earn</h5>
            <p className="pt-3">
              Invite your friends and earn for yourself
              when they complete registration and start
              performing transactions
            </p>
          </div>
        </div>
        <div className="col-md-5">
          <Box className="border-left border-right border-top border-bottom p-3">
            <div className="d-flex justify-content-between">
              <Box>
                <p className="mb-3">
                  <small>Refferal Code</small>
                </p>
                <h6>{referralCode}</h6>
              </Box>
              <Box className="pointer" onClick={() => copyText({ str: referralCode, callback: copySuccess })}>
                <small className="error">
                  <FileCopyOutlinedIcon color="error" />
                </small>
                <small style={{ top: '-9px', position: 'relative' }}>Copy Link</small>
              </Box>
            </div>
          </Box>
          <Box className="border-left border-right border-top border-bottom mt-4 grey-button p-3">
            <div className="d-flex justify-content-between">
              <Box>
                <p className="mb-3">
                  <small>Total Earning</small>
                </p>
                <h6>{`N ${totalEarning}`}</h6>
              </Box>
              <Box>
                <p className="mb-3">
                  <small>Total Signups</small>
                </p>
                <h6>{totalSignup}</h6>
              </Box>
            </div>
          </Box>
        </div>
      </div>
        <Box mt={15} textAlign="center">
          <Button>Share</Button>
        </Box>
      </Box>
    </div>
  )
}