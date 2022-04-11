import React, { useState } from 'react';
// @mui
import {
  Stack,
  Box, TextField, IconButton, OutlinedInput, InputLabel, FormControl, MenuItem, Select
} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';

import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { DesktopDatePicker } from "@mui/lab";
import ProfileAvatarComponent from "./ProfileAvatarComponent";

export default function UpdateProfileForm() {
  const [formData, setFormData] = useState({ date_of_birth: new Date() });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date_of_birth: date
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }
  return (
      <Stack spacing={3}>
        <ProfileAvatarComponent name="Adam Umahi" acct="7464884709" mask hideName upload />
        <TextField  onChange={handleChange} name="firstName" label="First Name" variant="standard" />
        <TextField  onChange={handleChange} name="lastName" label="Last Name" variant="standard" />
        <DesktopDatePicker
          label="Date of Birth"
          inputFormat="MM/dd/yyyy"
          name="dateOfBirth"
          value={formData.date_of_birth}
          onChange={handleDateChange}
          renderInput={(params) => <TextField variant="standard" {...params} />}
          date={formData.date_of_birth}/>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
          <Select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          label="Gender"
        >
          <MenuItem value="">
            <em>Select gender</em>
          </MenuItem>
          <MenuItem value="m">Male</MenuItem>
          <MenuItem value="f">Female</MenuItem>
        </Select>
        </FormControl>
        <TextField  onChange={handleChange} name="email" label="Email" variant="standard" />
        <TextField  onChange={handleChange} name="phone" label="Phone Number" variant="standard" />
        <TextField  onChange={handleChange} name="state" label="District/State" variant="standard" />
        <TextField  onChange={handleChange} name="address" label="Address" variant="standard" />

      </Stack>
  );
}
