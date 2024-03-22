import { optionalStep } from "./Consts";

export var currentStep: number = 0

export var stepValid: boolean = false

var isOptionalStepSkipped: boolean = false

export const GetisOptionalStepSkipped = () => {
  return isOptionalStepSkipped
}

export const SetisOptionalStepSkipped = (skippedStatus: boolean) => {
  isOptionalStepSkipped = skippedStatus
}

export const isStepOptional = (step: number) => {
  return step === optionalStep
};

export const GetStepValid = () => {
  return stepValid
}

export const SetStepValid = (isValid: boolean) => {
  stepValid = isValid
}