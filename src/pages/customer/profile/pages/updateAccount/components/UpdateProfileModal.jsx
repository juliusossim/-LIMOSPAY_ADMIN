import * as React from 'react';
import { useTheme, Dialog, DialogTitle, IconButton, Typography, Box } from "@mui/material";
import { CloseOutlined } from '@mui/icons-material';

export default function UpdateProfileModal({state,title,actions, leftAction, rightAction, loading,...props}) {
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
       <div className="d-flex">
         {leftAction && leftAction}
         <Box mt={3}>{title && <Typography variant="h3" className="title" color="blue">{title}</Typography>}</Box>
         {rightAction && rightAction}
       </div>
      </DialogTitle>
      {props.children}
    </Dialog>
  );
}
