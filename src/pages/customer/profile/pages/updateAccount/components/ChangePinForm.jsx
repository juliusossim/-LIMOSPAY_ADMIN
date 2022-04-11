import React, { useState } from 'react';
// @mui
import {
  Box, DialogActions,
  Stack,
  TextField
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { LoadingButton } from "@mui/lab";
import CurrencyFormat from 'react-currency-format';


export default function ChangePinForm({ close }) {
  const [formData, setFormData] = useState({ date_of_birth: new Date() });
  const [sending, setSending] = useState(false);
  const [tab, setTab] = useState('email');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const closeChangePin = () => {
    close(false);
    setInterval(() => setSending(false), 3000);
  }
  const goNext = (next) => {
    setTab(next);
    setInterval(() => setSending(false), 3000);
  }

  const templates = {
    email: (
      <Stack spacing={3}>
        <Box mb={7}>
          <h3>Change Pin</h3>
          <p>The changes you make here will be updated</p>
        </Box>
        <TextField  onChange={handleChange} name="email" label="Email" variant="standard" placeholder="Please enter your email address" />
        <DialogActions>
          <LoadingButton fullWidth size="large" loading={sending}  color="primary" onClick={closeChangePin}>
            Cancel
          </LoadingButton>
          <LoadingButton fullWidth size="large" loading={sending}  color="primary" onClick={() => goNext('otp')}>
            Next
          </LoadingButton>
        </DialogActions>
      </Stack>
    ),
    otp: (
      <Stack spacing={3}>
        <Box alignSelf="center">
          <Box mb={7} >
            <h3>Verify Your Account</h3>
            <p>Please input the OTP sent to your mobile number</p>
          </Box>
         <Box textAlign="center" pl={10}>
           <CurrencyFormat placeholder="Enter OTP" format="# #  #  #  #  # " mask="_"/>
         </Box>
        </Box>
        <DialogActions>
          <LoadingButton fullWidth size="large" loading={sending}  color="primary" onClick={() => goNext('success')}>
            Verify
          </LoadingButton>
        </DialogActions>
        <LoadingButton fullWidth size="large" loading={sending}  color="primary" onClick={closeChangePin}>
          Did not get OTP?
        </LoadingButton>
      </Stack>
    ),
    success: (
      <Stack spacing={3}>
       <Box alignSelf="center" textAlign="center" mt={15}>
         <h1 >
           <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="50" cy="50" r="50" fill="#219653" fillOpacity="0.1"/>
             <path d="M32.6903 48.4295L45.7506 63.0677L68.9348 39.5124" stroke="#219653" strokeWidth="6"/>
           </svg>

         </h1>
         <Box mb={7} mt={5}>
           <h3>Successful</h3>
           <p className="mt-3">Your PIN reset was successful</p>
         </Box>
       </Box>

        <DialogActions>
          <LoadingButton fullWidth size="large" loading={sending}  color="error" className="grey-button"  onClick={closeChangePin}>
            Ok
          </LoadingButton>
        </DialogActions>
      </Stack>
    )
  }
  return templates[tab];
}
