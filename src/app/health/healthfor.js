import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import ReplayIcon from "@mui/icons-material/Replay";

const HealthFor = ({ handleNext, handleReset }) => {
  return (
    <>
      {/* back button */}
      <Link href="/" className="insurance-back-btn">
        <ArrowBackIcon /> Back
      </Link>
      {/* reset button */}
      <button className="insurance-start-over-btn" onClick={handleReset}>
        <ReplayIcon /> Start Over
      </button>
      <div className="flex justify-center items-center pt-10">
        <div className="select-health-card">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="individual"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="individual"
                control={<Radio />}
                label="Individual"
                className="radio-health-select"
              />
              <FormControlLabel
                value="family"
                control={<Radio />}
                label="Family"
                className="radio-health-select"
              />
              <FormControlLabel
                value="business"
                control={<Radio />}
                label="Business"
                className="radio-health-select"
              />
            </RadioGroup>
          </FormControl>
          {/* next to personal info page */}
          <button className="insurance-next-btn" onClick={handleNext}>
            Next <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default HealthFor;
