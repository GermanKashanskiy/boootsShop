import React, { useState } from "react";
import { GetAuthorizedAccount } from "../../../../routes/AuthAccount";
import { SetStepValid } from "../OrderValidation";

interface FormData {
  fname: string,
  lname: string,
  country: string,
  city: string,
  street: string,
  building: string,
  phoneNum: string
}

const DeliveryStep = () => {
  const account = GetAuthorizedAccount()
  const [isFNameValid, setFNameValid] = useState<boolean>();
  const [isLNameValid, setLNameValid] = useState<boolean>();
  const [isCountryValid, setCountryValid] = useState<boolean>();
  const [isCityValid, setCityValid] = useState<boolean>();
  const [isStreetValid, setStreetValid] = useState<boolean>();
  const [isBuildingValid, setBuildingValid] = useState<boolean>();
  const [isPhoneValid, setPhoneValid] = useState<boolean>();
  const [formData, setFormData] = useState<FormData>({
    fname: account?.fName || "",
    lname: account?.lName || "",
    country: account?.country || "",
    city: account?.city || "",
    street: account?.street || "",
    building: account?.building || "",
    phoneNum: account?.phone || ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const stepValidation = () => {
    if (isFNameValid && isLNameValid && isPhoneValid && isCountryValid && isCityValid && isStreetValid && isBuildingValid) {
      SetStepValid(true)
    }
    else {
      SetStepValid(false)
    }
  }

  React.useEffect(() => {
    setFNameValid(formData.fname.length > 0)
  }, [formData.fname])

  React.useEffect(() => {
    setLNameValid(formData.lname.length > 0)
  }, [formData.lname])

  React.useEffect(() => {
    setPhoneValid(formData.phoneNum.length > 9)
  }, [formData.phoneNum])

  React.useEffect(() => {
    setCountryValid(formData.country.length > 0)
  }, [formData.country])

  React.useEffect(() => {
    setCityValid(formData.city.length > 0)
  }, [formData.city])

  React.useEffect(() => {
    setStreetValid(formData.street.length > 0)
  }, [formData.street])

  React.useEffect(() => {
    setBuildingValid(formData.building.length > 0)
  }, [formData.building])

  React.useEffect(() => {
    stepValidation()
  }, [isFNameValid, isLNameValid, isPhoneValid, isCountryValid, isCityValid, isStreetValid, isBuildingValid])

  return (
    <div className='d-flex justify-space-around items-center mt-3 mb-5 font-archivo font-900'>
      <div id='form-container' className='d-flex dir-column'>
        <input type='text' name="fname" value={formData.fname} onChange={handleChange} placeholder='FIRST NAME' className='mt-2' />
        <input type='text' name="lname" value={formData.lname} onChange={handleChange} placeholder='LAST NAME' className='mt-2' />
        <input type='tel' name="phoneNum" value={formData.phoneNum} onChange={handleChange} placeholder='PHONE NUMBER' className='mt-2' />
        <input type='text' name="country" value={formData.country} onChange={handleChange} placeholder='COUNTRY' className='mt-2' />
        <input type='text' name="city" value={formData.city} onChange={handleChange} placeholder='CITY' className='mt-2' />
        <input type='text' name="street" value={formData.street} onChange={handleChange} placeholder='STREET' className='mt-2' />
        <input type='text' name="building" value={formData.building} onChange={handleChange} placeholder='BUILDING' className='mt-2' />
      </div>
    </div>
  );
}

export default DeliveryStep;