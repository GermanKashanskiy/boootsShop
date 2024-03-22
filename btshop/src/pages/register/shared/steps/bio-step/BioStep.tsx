import React, { useState } from 'react';
import { SetStepValid } from '../../reg-stepper/shared/RegValidation';
import '../style/style.css';
import { UseAccountWithEmail, UseAccountWithUsername } from '../../../../../api/account/UseAccount';
import { validPasswordBigLetter, validPasswordLength, validPasswordNumber, validPasswordSmallLetter } from './shared/PasswordValidation';
import { newAccount } from '../../data/newAccount.data';

interface FormData {
  username: string,
  email: string,
  password: string,
}

interface PasswordVerification {
  passwordLen: boolean,
  passwordSLetter: boolean,
  passwordBLetter: boolean,
  passwordNums: boolean,
}

const BioStep = () => {
  const [isUsNameValid, setUsNameValid] = useState<boolean>();
  const [isEmailValid, setEmailValid] = useState<boolean>();
  const [currentInput, setCurrentInput] = useState<number>();
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });
  const [PasswordValidation] = useState<PasswordVerification>({
    passwordLen: false,
    passwordSLetter: false,
    passwordBLetter: false,
    passwordNums: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (isUsNameValid == true && isEmailValid == true && PasswordValidation.passwordLen && PasswordValidation.passwordSLetter && PasswordValidation.passwordBLetter && PasswordValidation.passwordNums) {
      newAccount.username = formData.username
      newAccount.email = formData.email
      newAccount.password = formData.password
      SetStepValid(true)
    } else {
      SetStepValid(false)
    }
  };

  const validateUsName = () => {
    setCurrentInput(0);
    if (UseAccountWithUsername(formData.username).length > 0) {
      setUsNameValid(false)
    } else {
      setUsNameValid(true)
    }
  }

  const validateEmail = () => {
    setCurrentInput(1);;
    if (UseAccountWithEmail(formData.email).length > 0) {
      setEmailValid(false)
    }
    else {
      setEmailValid(true)
    }
  }

  const validatePassword = () => {
    setCurrentInput(2);
  }

  const passwordLengthCheck = () => {
    if (validPasswordLength(formData.password)) {
      PasswordValidation.passwordLen = true
      return "#60a538"
    }
    else {
      PasswordValidation.passwordLen = false
      return "#ef3939"
    }
  }

  const passwordSmallLettCheck = () => {
    if (validPasswordSmallLetter(formData.password)) {
      PasswordValidation.passwordSLetter = true
      return "#60a538"
    }
    else {
      PasswordValidation.passwordSLetter = false
      return "#ef3939"
    }
  }

  const passwordBigLettCheck = () => {
    if (validPasswordBigLetter(formData.password)) {
      PasswordValidation.passwordBLetter = true
      return "#60a538"
    }
    else {
      PasswordValidation.passwordBLetter = false
      return "#ef3939"
    }
  }

  const passwordNumCheck = () => {
    if (validPasswordNumber(formData.password)) {
      PasswordValidation.passwordNums = true
      return "#60a538"
    }
    else {
      PasswordValidation.passwordNums = false
      return "#ef3939"
    }
  }

  React.useEffect(() => {
    passwordLengthCheck()
    passwordBigLettCheck()
    passwordSmallLettCheck()
    passwordNumCheck()
    validatePassword()
  }, [formData.password])

  React.useEffect(() => {
    validateEmail()
  }, [formData.email])

  React.useEffect(() => {
    validateUsName()
  }, [formData.username])

  React.useEffect(() => {
    validateForm();
  }, [isEmailValid, isUsNameValid, PasswordValidation.passwordBLetter, PasswordValidation.passwordLen, PasswordValidation.passwordNums, PasswordValidation.passwordSLetter]);

  return (
    <div className='d-flex justify-space-around items-center mt-3 mb-5 font-archivo font-900'>
      <div id='form-container' className='d-flex dir-column'>
        <input type='text' name="username" value={formData.username} onChange={handleChange} onFocus={validateUsName} placeholder='NAME' className='mt-2' />
        <input type='email' name="email" value={formData.email} onChange={handleChange} onFocus={validateEmail} placeholder='EMAIL' className='mt-2' />
        <input type='password' name="password" value={formData.password} onChange={handleChange} onFocus={validatePassword} placeholder='PASSWORD' className='mt-2' />
      </div>
      <div id='alert-container' className='mt-2 p-2 color-white d-flex dir-column justify-center'>
        {currentInput == 0 ? (
          <React.Fragment>
            <div className='mb-1'>USERNAME</div>
            {UseAccountWithUsername(formData.username).length > 0 ? (<div>THIS USERNAME ALREADY TAKEN</div>) : (<div>CHOOSE USERNAME FOR YOUR NEW ACCOUNT</div>)}
          </React.Fragment>
        ) : (
          currentInput == 1 ? (
            <React.Fragment>
              <div className='mb-1'>EMAIL</div>
              {UseAccountWithEmail(formData.email).length > 0 ? (<div>THIS EMAIL ALREADY ON USE. PLEASE TAKE ANOTHER ONE</div>) : (<div>CHOOSE AN EMAIL FOR YOUR NEW ACCOUNT</div>)}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className='mb-1'>PASSWORD REQUIRES</div>
              <div className='mt-0n5' style={{ color: passwordLengthCheck() }}>PASSWORD MUST BE GREATER THEN 8 CHARACTERS</div>
              <div className='mt-0n5' style={{ color: passwordBigLettCheck() }}>PASSWORD MUST CONTAIN UPPERCASE LETTER</div>
              <div className='mt-0n5' style={{ color: passwordSmallLettCheck() }}>PASSWORD MUST CONTAIN LOWERCASE LETTER</div>
              <div className='mt-0n5' style={{ color: passwordNumCheck() }}>PASSWORD MUST CONTAIN NUMBERS</div>
            </React.Fragment>
          )
        )}
      </div>
    </div>
  );
};

export default BioStep;

