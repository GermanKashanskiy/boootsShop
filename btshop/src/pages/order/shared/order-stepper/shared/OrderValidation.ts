export var currentStep: number = 0

export var stepValid: boolean = false

export var isPaid: boolean = false

export const GetStepValid = () => {
  return stepValid
}

export const SetStepValid = (isValid: boolean) => {
  stepValid = isValid
}