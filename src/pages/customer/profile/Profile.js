import { capitalCase } from 'change-case';
// @mui
import { Container, Tab, Box, Tabs, IconButton, Stack, Paper, Avatar, Grid } from "@mui/material";
// routes
import { useState } from "react";
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useTabs from '../../../hooks/useTabs';
import useSettings from '../../../hooks/useSettings';
// _mock_
import { _userPayment, _userAddressBook, _userInvoices, _userAbout } from '../../../_mock';
// components
import Page from '../../../components/Page';
import SettingsMenus, { settingsMenu } from "./components/settingsMenus";

export default function Profile() {
  const { themeStretch } = useSettings();

  const { currentTab, setCurrentTab } = useTabs({});

  return (
    <Page title="User: Account Settings">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sx={{pr:4}}>
         <Box className="">
           <Paper elevation={3} sx={{p: 2, height: '100vh'}}>
             <SettingsMenus setCurrent={setCurrentTab} menu={settingsMenu} clss={{ main: 'mt-3 pt-2 pointer', name: 'bold'}} />
           </Paper>
         </Box>
          </Grid>
          <Grid xs={12} md={8} pr={4}>
         <Box sx={{ml: -5, mt: 5}}>
           {currentTab?.component}
         </Box>
          </Grid>
          </Grid>
      </Container>
    </Page>
  );
}
