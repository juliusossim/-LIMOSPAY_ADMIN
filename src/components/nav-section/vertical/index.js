import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { List, Box, ListSubheader, Button, Alert } from '@mui/material';
import { useState } from 'react';
import { NavListRoot } from './NavList';
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';

// ----------------------------------------------------------------------

export const ListSubheaderStyle = styled((props) => <ListSubheader disableSticky disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.overline,
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    color: theme.palette.text.primary,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter,
    }),
  })
);

// ----------------------------------------------------------------------

NavSectionVertical.propTypes = {
  isCollapse: PropTypes.bool,
  navConfig: PropTypes.array,
};

export default function NavSectionVertical({ navConfig, isCollapse = false, ...other }) {
  const { logout } = useAuth();
  const isMountedRef = useIsMountedRef();
  const [error, setError] = useState({});

  const onLogout = async () => {
    try {
      await logout();
    } catch (error) {
      if (isMountedRef.current) {
        setError({ ...error, message: error.message });
      }
    }
  };

  return (
    <Box {...other}>
      {!!error && <Alert severity="error">{error.message}</Alert>}
      {navConfig.map((group) => (
        <List key={group.subheader} disablePadding>
          {group.items.map((list) => (
            <NavListRoot key={list.title} list={list} isCollapse={isCollapse} />
          ))}
        </List>
      ))}
      <Button style={{marginTop: 50, marginLeft: 10}} onClick={onLogout} key="logouut">
        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8116 3H2.79036C1.75796 3 0.930176 3.89 0.930176 5V9H2.79036V5H15.8116V19H2.79036V15H0.930176V19C0.930176 19.5304 1.12616 20.0391 1.47501 20.4142C1.82386 20.7893 2.29701 21 2.79036 21H15.8116C16.305 21 16.7781 20.7893 17.127 20.4142C17.4758 20.0391 17.6718 19.5304 17.6718 19V5C17.6718 3.89 16.8347 3 15.8116 3ZM7.51522 15.58L8.83595 17L13.4864 12L8.83595 7L7.51522 8.41L9.92416 11H0.930176V13H9.92416L7.51522 15.58Z" fill="#FF4400"/>
        </svg>
        <span style={{marginLeft: 20, color: '#FF4400'}}>Logout</span>
      </Button>
    </Box>
  );
}
