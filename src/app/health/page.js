"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Header from "../header";
import HealthFor from "./healthfor";
import PersonalInfo from "./personalinfo";
import Company from "./company";

const steps = [
  {
    labelA: null,
  },
  {
    labelA: null,
  },
  {
    labelA: null,
  },
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return <HealthFor handleNext={handleNext} handleReset={handleReset} />;
      case 1:
        return (
          <PersonalInfo
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
          />
        );
      case 2:
        return <Company handleBack={handleBack} handleReset={handleReset} />;
      default:
        return <div>Not Found</div>;
    }
  }
  function _renderStepContentTop(step) {
    switch (step) {
      case 0:
        return (
          <h1 className="health-header-text">
            What kind of Health insurance you need?
          </h1>
        );
      case 1:
        return (
          <h1 className="health-header-text">Please share Personal info</h1>
        );
      case 2:
        return (
          <h1 className="health-header-text">
            Let’s find the best insurance company for you!
          </h1>
        );
      default:
        return null;
    }
  }

  return (
    <>
      <Header />
      <div className="flex justify-center items-center py-4">
        <Box sx={{ width: "96%" }}>
          {_renderStepContentTop(activeStep)}
          <div className="flex justify-center items-center w-full">
            <div style={{ width: "50%" }}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  return (
                    <Step key={label.labelA} {...stepProps}>
                      <StepLabel {...labelProps}>{label.labelA}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </div>
          </div>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>{_renderStepContent(activeStep)}</React.Fragment>
          )}
        </Box>
      </div>
    </>
  );
}
