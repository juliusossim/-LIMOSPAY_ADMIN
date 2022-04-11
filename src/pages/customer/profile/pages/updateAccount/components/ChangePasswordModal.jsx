import * as React from 'react';
import { useTheme, Dialog, DialogTitle, IconButton, Typography } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

export default function ChangePasswordModal({state,title,actions,...props}) {
  const theme = useTheme()
  const styles = {
    '& .MuiDialog-paper.MuiPaper-rounded': {
      minWidth: 550,
      p: 2,
      borderRadius: '8px',
      borderTop: `8px solid ${theme.palette.primary.main}`,
    },
    '.btnClose': {
      position: 'absolute',
      right: '2rem',
      top: 'calc(50% - 1rem)',
    },
    '.title': {
      color: theme.palette.grey[800],
      fontWeight: 'normal',
      textAlign: 'center',
      mb: 2,
    },
    '.subtitle': {
      color: theme.palette.grey[400],
      fontWeight: 'normal',
      textAlign: 'center',
      width: 1,
      display: 'block'
    },
    '.MuiFormControl-root': {
      width: '100%'
    },
    '.MuiDialogActions-root button': {
      width: '100%'
    },
    ...props.sx
  }
  return (
    <Dialog open={state} {...props} sx={styles} loading={false}>
      <DialogTitle sx={{my:4,position:'relative'}}>
        {title && <Typography variant="h5" className="title">{title}</Typography>}
        {props.subtitle && <Typography variant="caption" className="subtitle">{props.subtitle}</Typography>}
        <IconButton onClick={props.onClose} className="btnClose"><CloseOutlined/></IconButton>
      </DialogTitle>
      {props.children}
    </Dialog>
  );
}
