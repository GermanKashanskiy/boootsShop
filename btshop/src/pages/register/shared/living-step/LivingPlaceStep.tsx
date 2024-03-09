import React, { useState } from "react";
import './style/style.css';

interface FormData {
  fname: string,
  lname: string,
  country: string,
  city: string,
  street: string,
  building: string,
  phoneNum: string
}
const LivingPlaceStep = () => {
  const [formData, setFormData] = useState<FormData>({
    fname: "",
    lname: "",
    country: "",
    city: "",
    street: "",
    building: "",
    phoneNum: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='d-flex justify-space-around items-center mt-3 mb-5 font-archivo font-900'>
      <div id='form-container' className='d-flex dir-column'>
        <input type='text' name="fname" value={formData.fname} onChange={handleChange} placeholder='FIRST NAME*' className='mt-2' />
        <input type='text' name="lname" value={formData.lname} onChange={handleChange} placeholder='LAST NAME*' className='mt-2' />
        <input type='tel' name="phoneNum" value={formData.phoneNum} onChange={handleChange} /*onFocus={ }*/ placeholder='PHONE NUMBER*' className='mt-2' />
        <input type='text' name="country" value={formData.country} onChange={handleChange} placeholder='COUNTRY' className='mt-2' />
        <input type='text' name="city" value={formData.city} onChange={handleChange} placeholder='CITY' className='mt-2' />
        <input type='text' name="street" value={formData.street} onChange={handleChange} placeholder='STREET' className='mt-2' />
        <input type='text' name="building" value={formData.building} onChange={handleChange} placeholder='BUILDING' className='mt-2' />
      </div>
      <div id='alert-container' className='mt-2 p-2 color-white d-flex dir-column justify-center'>
        <div>PLEASE COMPLETE ALL ENTRIES FOR BETTER SERVICE IN THE FUTURE</div>
        <div className="mt-2">FIELDS WITH * ARE REQUIRED, REST ARE OPTIONAL</div>
        <div className="mt-2">ALL DATA IS PROTECTED AND IS NOT DISCLOSABLE TO THIRD PARTIES</div>
      </div>
    </div>
  );
}

export default LivingPlaceStep;