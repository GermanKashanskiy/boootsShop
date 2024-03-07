import React, { useState } from 'react';
import { SetStepValid } from '../../../RegValidation';
import './styles/bio-step.css';
import { UseAccountWithEmail, UseAccountWithUsername } from '../../../../../../api/account/UseAccount';
import { validPasswordBigLetter, validPasswordLength, validPasswordNumber, validPasswordSmallLetter } from './shared/PasswordValidation';

interface FormData {
  username: string,
  email: string,
  password: string,
}

const BioStep = () => {
  const [isPasswordValid, setPasswordValid] = useState<boolean>(false);
  const [allertMsg, setAllertMsg] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const validateForm = () => {
    if (formData.username && formData.email && formData.password && isPasswordValid) {
      SetStepValid(true)
    } else {
      SetStepValid(false)
    }
  };

  const validateUsName = () => {
    const matchedAccounts = UseAccountWithUsername(formData.username);
    if (matchedAccounts.length > 0) {
      setAllertMsg("This username already in use");
    } else {
      setAllertMsg("No problems found");
    }
  }

  const validateEmail = () => {
    const matchedAccounts = UseAccountWithEmail(formData.email);
    if (matchedAccounts.length > 0) {
      setAllertMsg("This email alredy in use");
    }
    else {
      setAllertMsg("No problems found");
    }
  }

  const passwordLengthCheck = () => {
    if (validPasswordLength(formData.password)) {
      return "#FBFBFB"
    }
    else {
      return "#ef3939"
    }
  }

  const passwordSmallLettCheck = () => {
    if (validPasswordSmallLetter(formData.password)) {
      return "#FBFBFB"
    }
    else {
      return "#ef3939"
    }
  }

  const passwordBigLettCheck = () => {
    if (validPasswordBigLetter(formData.password)) {
      return "#FBFBFB"
    }
    else {
      return "#ef3939"
    }
  }

  const passwordNumCheck = () => {
    if (validPasswordNumber(formData.password)) {
      return "#FBFBFB"
    }
    else {
      return "#ef3939"
    }
  }

  React.useEffect(() => {
    passwordLengthCheck()
    passwordBigLettCheck()
    passwordSmallLettCheck()
    passwordNumCheck()
  }, [formData.password])

  React.useEffect(() => {
    validateEmail()
  }, [formData.email])

  React.useEffect(() => {
    validateUsName()
  }, [formData.username])

  React.useEffect(() => {
    validateForm();
  }, [formData]);

  return (
    <div className='d-flex justify-space-around mt-3 mb-5 font-archivo font-900'>
      <div id='form-container' className='d-flex dir-column'>
        <input type='text' name="username" value={formData.username} onChange={handleChange} onFocus={validateUsName} placeholder='NAME' className='mt-2' />
        <input type='email' name="email" value={formData.email} onChange={handleChange} placeholder='EMAIL' className='mt-2' />
        <input type='password' name="password" value={formData.password} onChange={handleChange} placeholder='PASSWORD' className='mt-2' />
      </div>
      <div id='alert-container' className='mt-2 p-2 color-white d-flex dir-column justify-center'>
        <div className='mb-1'>PASSWORD REQUIRES</div>
        <div style={{ color: passwordLengthCheck() }}>PASSWORD MUST BE GREATER THEN 8 CHARACTERS</div>
        <div style={{ color: passwordBigLettCheck() }}>PASSWORD MUST CONTAIN UPPERCASE LETTER</div>
        <div style={{ color: passwordSmallLettCheck() }}>PASSWORD MUST CONTAIN LOWERCASE LETTER</div>
        <div style={{ color: passwordNumCheck() }}>PASSWORD MUST CONTAIN NUMBERS</div>
      </div>
    </div>
  );
};

export default BioStep;

