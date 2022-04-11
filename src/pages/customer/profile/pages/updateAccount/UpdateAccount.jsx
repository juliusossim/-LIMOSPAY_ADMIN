
import {
  Container,
  Tab,
  Box,
  Tabs,
  IconButton,
  Stack,
  Paper,
  Avatar,
  Switch,
  FormControlLabel,
  Grid, Typography, Button, DialogContent, DialogActions
} from "@mui/material";
// routes
import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import useTabs from '../../../../../hooks/useTabs';
import useSettings from '../../../../../hooks/useSettings';
import Page from '../../../../../components/Page';
import SettingsMenus, { updateMenu } from "../../components/settingsMenus";
import useAuth from "../../../../../hooks/useAuth";
import TransferLimitComponent from "./components/TransferLimitComponent";
import InviteEarnComponent from "./components/InviteEarnComponent";
import ProfileAvatarComponent from "./components/ProfileAvatarComponent";
import ChangePasswordComponent from "./components/ChangePasswordForm";
import ChangePasswordModal from "./components/ChangePasswordModal";
import UpdateProfileModal from "./components/UpdateProfileModal";
import UpdateProfileForm from "./components/UpdateProfileForm";
import ChangePinModal from "./components/ChangePinModal";
import ChangePinForm from "./components/ChangePinForm";

export default function UpdateAccount() {
  const { themeStretch } = useSettings();
  const { user } = useAuth();


  const { currentTab, setCurrentTab } = useTabs({});
  const [twoFactor, setTwoFactor]  = useState(false);
  const [hideBalance, setHideBalance]  = useState(false);
  const [beginDelete, setBeginDelete]  = useState(false);
  const [changePassword, setChangePassword]  = useState(false);
  const [updateProfile, setUpdateProfile]  = useState(false);
  const [ loading,setLoading ] = useState(false)
  const [ updateProfileLoading,setUpdateProfileLoading ] = useState(false)
  const [ changePin,setChangePin ] = useState(false)


  const updateMenu2 = [
    {
      name: 'Hide Balance',
      class: 'pt-2',
      element: (
        <FormControlLabel
          control={<Switch />}
          label=""
          checked={hideBalance}
          onChange={() => setHideBalance(!hideBalance)}
        />
      )
    },
    {
      name: 'Change Password',
      component: <ChangePasswordComponent />,
      click: () => setChangePassword(true),
      class: 'pointer pt-4'
    }
  ]
  const handleClose = () => {
    setChangePassword(false);
    setInterval(() => setLoading(false), 3000);
  }
  const closeUpdateProfile = () => {
    setUpdateProfile(false);
    setInterval(() => setUpdateProfileLoading(false), 3000);
  }
  const startUpdateProfile = (update = true) => update ? setUpdateProfile(true) : setChangePin(true)

  return (
    <Page title="User: Account Settings">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        {
          currentTab?.component
          || (
            <Paper>
              <Grid container spacing={2} p={2}>
                <Grid item xs={12} md={6} pr={4}>
                  <Stack direction="column" mt={5} spacing={2}>
                    <ProfileAvatarComponent name={user.displayName} acct="023568857" />
                    <Box pt={5}>
                      <SettingsMenus menu={updateMenu({ click: startUpdateProfile, setCurrentTab })} setCurrent={setCurrentTab} clss={{ main: 'mt-4 pt-3 pointer', name: ''}} />
                      <Box alignSelf="flex-start" sx={{mt: 5, pb: 30}}>
                        <span className="mt-5 mr-2">
                          <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H6L9 21L12 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM10 16H8V14H10V16ZM12.07 8.25L11.17 9.17C10.45 9.9 10 10.5 10 12H8V11.5C8 10.4 8.45 9.4 9.17 8.67L10.41 7.41C10.78 7.05 11 6.55 11 6C11 4.9 10.1 4 9 4C7.9 4 7 4.9 7 6H5C5 3.79 6.79 2 9 2C11.21 2 13 3.79 13 6C13 6.88 12.64 7.68 12.07 8.25Z" fill="black" fillOpacity="0.4"/>
                          </svg>

                        </span>
                        <span className="mr-3" style={{ position: 'relative', top: '-6px' }}>Two-factor Auth</span>
                        <FormControlLabel
                          control={<Switch />}
                          label={twoFactor ? 'Enabled' : 'Disabled'}
                          checked={twoFactor}
                          onChange={() => setTwoFactor(!twoFactor)}
                          labelPlacement='end'
                        />
                      </Box>
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6} pr={4}>
                  <Stack direction="column" spacing={2}>
                    <Box>
                      <TransferLimitComponent limit={10000} setCurrentTab={setCurrentTab} />
                      <InviteEarnComponent setCurrentTab={setCurrentTab} amount={20000} hide={hideBalance} code="BYJ64595" />
                    </Box>
                    <Box pt={4}>
                      <SettingsMenus
                        menu={updateMenu2}
                        clss={{ main: 'mt-4', name: ''}}
                      />
                    </Box>
                  </Stack>
                </Grid>
              </Grid>

              <Box mt={-15} pb={5}>
                <Typography align="center" color="error" className="pointer" onClick={() => setBeginDelete(true)}>
                  Delete My Account
                </Typography>
              </Box>

              {/* todo: call api for change password */}

              {/* change Password */}
              <ChangePasswordModal state={changePassword} scroll="body" loading={loading}
                title="Change Password" subtitle="The changes you make here will be updated"
                onClose={handleClose}
              >
                <DialogContent sx={{gap:2,display:"flex",flexDirection:"column"}}>
                  <ChangePasswordComponent />
                </DialogContent>
                <DialogActions>
                  <LoadingButton fullWidth size="large" loading={loading} variant="outlined" onClick={handleClose}>
                    Cancel
                  </LoadingButton>
                  <LoadingButton fullWidth size="large" loading={loading} variant="contained" color="primary" onClick={handleClose}>
                   Change Password
                  </LoadingButton>
                </DialogActions>
              </ChangePasswordModal>

              {/* update profile */}
              <UpdateProfileModal state={updateProfile} scroll="body" loading={updateProfileLoading}
                title="Update Profile"
                onClose={closeUpdateProfile}
                leftAction={
                  (
                    <DialogActions>
                      <LoadingButton fullWidth size="large" loading={loading} onClick={closeUpdateProfile}>
                                          Cancel
                      </LoadingButton>
                    </DialogActions>
                  )
                }
                rightAction={
                  (
                    <DialogActions>
                      <LoadingButton fullWidth size="large" loading={loading}  color="primary" onClick={closeUpdateProfile}>
                      Save
                      </LoadingButton>
                    </DialogActions>
                  )}
              >
                <DialogContent sx={{gap:2,display:"flex",flexDirection:"column"}}>
                  <UpdateProfileForm />
                </DialogContent>
              </UpdateProfileModal>
              <ChangePinModal state={changePin}>
                <ChangePinForm close={setChangePin} />
              </ChangePinModal>

            </Paper>
          )
        }
      </Container>
    </Page>
  );

}
