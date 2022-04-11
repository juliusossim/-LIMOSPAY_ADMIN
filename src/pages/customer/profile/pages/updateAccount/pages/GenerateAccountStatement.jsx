import { Button } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import AccountStatementForm from "../components/AccountStatementForm";

GenerateAccountStatement.propTypes = {
  setCurrentTab: PropTypes.func,
};
export default function GenerateAccountStatement ({ setCurrentTab }){

  return (
    <div>
      <Button onClick={() => setCurrentTab({ component: null })}>
        <div className="d-flex" style={{color: 'black'}}>
          <ArrowBackIosOutlinedIcon />
          <small className="ml-1">
            Back
          </small>
        </div>
      </Button>
      <div className="offset-md-3 col-md-6">
        <AccountStatementForm />
      </div>
    </div>
  )
}