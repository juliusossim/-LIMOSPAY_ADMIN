import React, { useState } from 'react';
// @mui
import {
  Stack,
  Box, TextField, InputLabel, FormControl, MenuItem, Select
} from "@mui/material";
import { Alert, DesktopDatePicker, LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import useIsMountedRef from "../../../../../../hooks/useIsMountedRef";
import { FormProvider } from "../../../../../../components/hook-form";

export default function AccountStatementForm() {
  const [formData, setFormData] = useState({ fileType: 'pdf' });
  
  const isMountedRef = useIsMountedRef();
  
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
  
  const AccountStatementFormSchema = Yup.object().shape({
    startDate: Yup.string().required('You must select a start date'),
    endDate: Yup.string().required('You must select an end date')
  });
  
  const methods = useForm({
    resolver: yupResolver(AccountStatementFormSchema),
    formData,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const submit = (data) => {
    console.log(data);
  }
  const onSubmit = async (data) => {
    try {
      await submit(data);
    } catch (error) {
      reset();
      if (isMountedRef.current) {
        setError('afterSubmit', { ...error, message: error.message });
      }
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
        <Box>
          <h3 className="bold">Account Statement</h3>
          <p>Choose a timeline for your statement</p>
        </Box>
        <DesktopDatePicker
          label="Start Date"
          placeholder="select start date"
          inputFormat="MM/dd/yyyy"
          name="startDate"
          value={formData.startDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField variant="outlined" {...params} />}
          date={formData.startDate}
        />
        <DesktopDatePicker
          label="End Date"
          placeholder="select end date"
          inputFormat="MM/dd/yyyy"
          name="endDate"
          value={formData.endDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField variant="outlined" {...params} />}
          date={formData.endDate}
        />
        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Select File Type</InputLabel>
          <Select
            name="fileType"
            value={formData.fileType}
            onChange={handleChange}
            label="File Type"
          >
            <MenuItem value="pdf">PDF</MenuItem>
            <MenuItem value="csv">CSV</MenuItem>
          </Select>
        </FormControl>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting} style={{marginTop: 80, backgroundColor: 'black'}}>
          Generate Statement of Account
        </LoadingButton>

      </Stack>
    </FormProvider>
  );
}
