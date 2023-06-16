import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReplayIcon from '@mui/icons-material/Replay';

const PersonalInfo = ({handleBack, handleNext, handleReset}) => {
  return (
    <>
      <button className="insurance-back-btn" onClick={handleBack}>
        <ArrowBackIcon /> Back
      </button>
      <button className="insurance-start-over-btn" onClick={handleReset}>
        <ReplayIcon /> Start Over
      </button>
      <div className="flex justify-center items-center pt-10">
        <div className="select-health-card">
          <div className="flex justify-between w-full">
            <div className="date-pick">
              <p style={{ fontSize: "10px" }}>Date of Birth</p>
              <input type="date" className="w-full" />
            </div>
            <div className="add-salary">
              <p style={{ fontSize: "10px" }}>Salary</p>
              <div className="flex w-full">
                <p style={{ fontSize: "14px" }}>AED</p>
                <input type="text" className="w-full" />
              </div>
            </div>
          </div>
          <div className="add-emirate">
            <p style={{ fontSize: "10px" }}>Select Emirate</p>
            <select name="emirate" id="emirate" className="w-full">
              <option value="dubai">Dubai</option>
              <option value="abudhabi">Abu Dhabi</option>
              <option value="sharjah">Sharjah</option>
              <option value="ajman">Ajman</option>
            </select>
          </div>
          <div className="flex justify-between w-full">
            <div>
              <p style={{ fontSize: "10px" }}>Gender</p>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="man"
                name="radio-buttons-group"
              >
                <FormControlLabel value="man" control={<Radio />} label="Man" />
                <FormControlLabel
                  value="woman"
                  control={<Radio />}
                  label="Woman"
                />
              </RadioGroup>
            </div>
            <div>
              <p style={{ fontSize: "10px" }}>Marital Status</p>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="married"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="married"
                  control={<Radio />}
                  label="Married"
                />
                <FormControlLabel
                  value="single"
                  control={<Radio />}
                  label="Single"
                />
              </RadioGroup>
            </div>
          </div>
          <div className="w-full">
            <p style={{ fontSize: "10px" }}>Are you Investor?</p>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="yes"
              name="radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </div>
          <div className="w-full">
            <p style={{ fontSize: "10px" }}>
              Do your take regular medication for any existing medical
              condition?
            </p>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="yes"
              name="radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </div>
          <button className="insurance-next-btn" onClick={handleNext}>
            Next <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
