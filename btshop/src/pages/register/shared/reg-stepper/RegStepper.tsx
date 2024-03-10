import * as React from 'react';
import './style/reg-stepper.css';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { steps } from '../RegConsts';
import { GetStepValid, GetisOptionalStepSkipped, SetStepValid, SetisOptionalStepSkipped, currentStep, isStepOptional, stepValid } from '../RegValidation';
import BioStep from '../steps/bio-step/BioStep';
import LivingPlaceStep from '../steps/LivingPlaceStep';
import FavoritesStep from '../FavoritesStep';
import { AddNewAccount } from '../../../../api/account/UseAccount';
import { newAccount } from '../newAccount.data';

const RegStepper = () => {
  const [_currentStep, setCurrentStep] = React.useState(currentStep);

  const handleNext = () => {
    if (!GetStepValid() && !isStepOptional(_currentStep)) {
      // return error ... 
      return;
    }

    if (_currentStep == steps.length - 1) {
      AddNewAccount(newAccount)
    }

    setCurrentStep((step) => step + 1)
    SetStepValid(false)
  };

  const handleBack = () => {
    setCurrentStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(_currentStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setCurrentStep((prevActiveStep) => prevActiveStep + 1);
    SetisOptionalStepSkipped(true);
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
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (<Typography variant="caption">Optional</Typography>);
          }
          if (GetisOptionalStepSkipped()) {
            stepProps.completed = false;
          }
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

          {_currentStep == 0 ? (<BioStep />) : (_currentStep == 1 ? (<LivingPlaceStep />) : (<FavoritesStep />))}

          <Button color="inherit" disabled={_currentStep == 0} onClick={handleBack} sx={{ mr: 1 }}>Back</Button>

          {isStepOptional(_currentStep) && (
            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>Skip</Button>
          )}

          <Button onClick={handleNext}>{_currentStep == steps.length - 1 ? 'Finish' : 'Next'}</Button>

        </React.Fragment>
      )}
    </div>
  );
}

export default RegStepper;