import React from "react";
import { GetStepValid, SetStepValid, currentStep } from "./OrderValidation";
import { steps } from "./OrderConsts";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import DeliveryStep from "./steps/DeliveryStep";
import PaymentStep from "./steps/payment-step/PaymentStep";

const OrderStepper = () => {
  const [_currentStep, setCurrentStep] = React.useState(currentStep);

  const handleNext = () => {
    if (!GetStepValid()) {
      // return error ... 
      return;
    }

    if (_currentStep == steps.length - 1) {
      //AddNewAccount(newAccount)
    }

    setCurrentStep((step) => step + 1)
    SetStepValid(false)
  };

  const handleBack = () => {
    setCurrentStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <div id='stepper-section' className='mt-5 p-2'>
      <Stepper activeStep={_currentStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
          } = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {_currentStep === steps.length ? (
        <React.Fragment>

          All steps completed - you&apos;re finished

          <Button onClick={handleReset}>Reset</Button>

        </React.Fragment>
      ) : (
        <React.Fragment>

          {_currentStep == 0 ? (<DeliveryStep />) : (<PaymentStep />)}

          <Button color="inherit" disabled={_currentStep == 0} onClick={handleBack} sx={{ mr: 1 }}>Back</Button>

          <Button onClick={handleNext}>{_currentStep == steps.length - 1 ? 'Finish' : 'Next'}</Button>

        </React.Fragment>
      )}
    </div>
  )
}

export default OrderStepper;