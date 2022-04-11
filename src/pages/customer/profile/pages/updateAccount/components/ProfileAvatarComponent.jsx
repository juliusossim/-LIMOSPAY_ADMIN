import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { makeInitials, stringDoesNotExist } from "../../../../../../utilities/stringOperations";
import { RHFUploadSingleFile } from "../../../../../../components/hook-form";
import BackdropModal from "./BackdropModal";
import DragNDropFileInput from "./DragNDropFileInput";

ProfileAvatarComponent.propTypes = {
  acct: PropTypes.any,
  name: PropTypes.string,
  src: PropTypes.string,
  hideName: PropTypes.bool,
  mask: PropTypes.bool,
  upload: PropTypes.bool,
};

export default function ProfileAvatarComponent ({ acct, name, src, hideName, mask, upload }){
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          'cover',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );
  const uploadProfilePicture = (
    <div>
      <div>Display Picture</div>
      {/* <div className={isFile ? '' : 'd-none'}> */}
      <DragNDropFileInput
        name={name}
        supportedFiles={['jpeg', 'jpg']}
        handleData={handleDrop}
        label="profile pix"
      />
    </div>
  )

  return (
    <Box className="text-center">
      {
        stringDoesNotExist(src)
        ? <Avatar style={{ display: 'inline-flex', fontWeight: 'bold', background: '#FDAF8E' }} sx={{ height: 74, width: 74 }}>{makeInitials(name)}</Avatar>
        : <Avatar style={{ display: 'inline-flex', fontWeight: 'bold', background: '#FDAF8E' }} sx={{ height: 74, width: 74 }} src={src || value} />
      }
        <Box mt={4}>
          {upload && (
            <div className="mt-4">
              <Button mt={3} className="bold" sx={{color: 'black'}} onClick={() => {
                setOpen(true);
                console.log(open);
              }}>
                <small>Upload profile image</small>
              </Button>
            </div>
          )}

          {!hideName && <div className="bold"> {name} </div>}
          <div className="">{`Acct: ${mask ? `${acct?.slice(0, 3)}XXXXXXX` : acct}`}</div>
        </Box>
      <BackdropModal open={open} content={uploadProfilePicture} handleClose={() => setOpen(false)} />
    </Box>
  )
}