/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

const DragNDropFileInput = ({
  handleData, label, uploaded, supportedFiles
}) => {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) => {
    setFileNames(acceptedFiles.map((file) => file.name));
    handleData(acceptedFiles);
  };

  return (
    <div className="">
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <div>
                    <div className="font-regular">
                      <span>Drop or</span>
                      <button type="button" className="bold bg-transparent mx-1 font-black">browse</button>
                      <span className="">{label}</span>
                      <p>
                        <small>{`Supports: ${supportedFiles || '.pdf, .docs, .jpg, .jpeg'}`}</small>
                      </p>
                    </div>

            </div>
          </div>
        )}
      </Dropzone>
    </div>
  );
};
export default DragNDropFileInput;
