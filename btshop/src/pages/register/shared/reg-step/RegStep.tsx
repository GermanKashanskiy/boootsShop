import BioStep from './shared/BioStep/BioStep';
import LivingPlaceStep from './shared/LivingPlaceStep';
import FavoritesStep from './shared/FavoritesStep';
import React, { useState } from 'react';
import { currentStep } from '../RegValidation';

const StepController = () => {
  const [_currentStep] = useState(currentStep)

  switch (_currentStep) {
    case 0:
      return <BioStep />;
    case 1:
      return <LivingPlaceStep />;
    case 2:
      return <FavoritesStep />;
    default:
      return <div>Unknown step</div>;
  }
};

export default StepController;
