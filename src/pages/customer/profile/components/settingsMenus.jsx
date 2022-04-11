import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import UpdateAccount from "../pages/updateAccount/UpdateAccount";
import GenerateAccountStatement from "../pages/updateAccount/screens/GenerateAccountStatement";

SettingsMenus.propTypes = {
  setCurrent: PropTypes.func,
  menu: PropTypes.array,
  clss: PropTypes.object
};
export const settingsMenu = [
  {
    name: 'update account',
    description: 'Profile edit, Change Password, etc.',
    component: <UpdateAccount />
  },
  {
    name: 'Switch Account',
    description: 'Switch from Personal to Corperate Accounts',
    component: null
  },
  {
    name: 'Notification settings',
    description: 'Email, SMS, Push notification',
    component: null
  },
  {
    name: 'Payment settings',
    description: 'Card, Bank, Credentials',
    component: null
  },
  {
    name: 'Invite a friend',
    description: 'Share Wayabank to your friends & family',
    component: null
  },
  {
    name: 'Transparency',
    description: 'Terms & Condition, privacy policy, about us!',
    component: null
  },
  {
    name: 'Login Information',
    description: 'Location, device, time of login',
    component: null
  }
]
export const updateMenu = ({ click, setCurrentTab }) => (
  [
    {
      name: 'Edit Profile',
      component: null,
      click,
      class: 'pt-4'
    },
    {
      name: 'Account Statement',
      component: <GenerateAccountStatement setCurrentTab={setCurrentTab} />,
      class: 'pt-4'
    },
    {
      name: 'Change Pin',
      component: null,
      click: () => click(false),
      class: 'pt-4'
    }
  ]
)

export default function SettingsMenus ({ setCurrent, menu, clss }) {
  return menu.map((item => (
    <Box onClick={() => (typeof item.click === "function" && item.click(item)) || typeof setCurrent === 'function' && setCurrent(item)} key={item.name} className={`d-flex justify-content-between p-1 menu-div ${item.class} ${clss?.main}`}>
      <div className="" style={{ backgroundColor:'common.white' }}>
        <div className={clss?.name}>{item.name}</div>
        {item.description && <div className=""><small>{item.description}</small></div>}
      </div>
      <div className="">
        {item.element || <ChevronRightIcon />}
      </div>
    </Box>
  )))
};