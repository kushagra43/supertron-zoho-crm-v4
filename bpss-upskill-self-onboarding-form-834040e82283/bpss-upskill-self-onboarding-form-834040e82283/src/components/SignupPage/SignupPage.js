import React, { useState } from "react";
import './SignupPage.css';
import { createUserInPlatform } from './../../apis/apis';


function SignupPage({ showSuccessModal, setSuccessModal }) {
  const [formData, setFormData] = useState({
    firstName: '',
    contact: '',
    companyName: '',
    email: ''
  });
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    contact: '',
    email: ''
  });

  const [registering, setRegistering] = useState(false);
  const [submitErrorMessage, setSubmitErrorMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newFormData = { ...formData };
    let newFormErrors = { ...formErrors };

    switch (name) {
      case 'firstName':
        // Allow only letters, spaces, and hyphens
        if (!/^[a-zA-Z\s-]*$/.test(value)) {
          newFormErrors[name] = 'Name should only contain letters, spaces, and hyphens';
        } else if (!value.trim()) {
          newFormErrors[name] = 'Name is required';
        } else {
          newFormErrors[name] = '';
        }
        break;
      case 'contact':
        // Allow only numbers
        if (!/^\d{10}$/.test(value)) {
          newFormErrors[name] = 'Phone number should contain exactly 10 digits';
        } else if (!value.trim()) {
          newFormErrors[name] = 'Phone number is required';
        } else {
          newFormErrors[name] = '';
        }
        break;
      case 'email':
        // Validate email format
        if (!/\S+@\S+\.\S+/.test(value)) {
          newFormErrors[name] = 'Invalid email address';
        } else if (!value.trim()) {
          newFormErrors[name] = 'Email is required';
        } else {
          newFormErrors[name] = '';
        }
        break;
      default:
        break;
    }

    newFormData[name] = value;
    setFormData(newFormData);
    setFormErrors(newFormErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    let isValid = true;
    setRegistering(true);

    if (!formData.firstName.trim()) {
      errors.firstName = 'Name is required';
      isValid = false;
    } else if (!/^[a-zA-Z\s-]*$/.test(formData.firstName)) {
      errors.firstName = 'Name should only contain letters, spaces, and hyphens';
      isValid = false;
    }

    if (!formData.contact.trim()) {
      errors.contact = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.contact)) {
      errors.contact = 'Phone number should contain exactly 10 digits';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!isValid) {
      setRegistering(false);
      setFormErrors(errors);
      return;
    } else {
      const transformedPayload = {
        "firstName": formData?.firstName,
        "lastName": " ",
        "gender": "MALE",
        "dob": "1990-01-01",
        "isConsentAccepted": true,
        "contacts": [
          {
            "contact": `+91${formData?.contact}`,
            "isPrimary": true,
            "type": "MOBILE"
          },
          {
            "contact": formData?.email,
            "isPrimary": true,
            "type": "EMAIL"
          }
        ],
        "workDetails": [
          {
            "organisation": formData?.companyName,
            "designation": "EMPLOYEE", // default designation
            "joinedFrom": "2024-01-01" // default joined date
          }
        ]
      };
      createUserInPlatform(transformedPayload)
        .then(data => {
          setRegistering(false);
          setSuccessModal(true);
        }
        )
        .catch(error => {
          setRegistering(false);
          console.log('error:', error);
          if (error?.response?.status === 400 || error?.response?.data?.errorCode === 400) {
            setSubmitErrorMessage(error?.response?.data?.errorMessage || 'Registration failed as no response')
          }
        });
    }
  };


  return (
    <div className="">
      <div className="">
        <div className="container mt-5 skiling-onboarding-form px-5">
          <h2 className="text-center sighupHeading">Sign Up</h2>
          <div className="form-group">
            <label className="mb-0" htmlFor="firstName">Name<span className="text-danger"> *</span></label>
            <input type="text" className={`form-control border-left-0 border-right-0 border-top-0 rounded-0 ${formErrors.firstName ? 'is-invalid' : ''}`} id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} />
            {formErrors.firstName && <div className="invalid-feedback">{formErrors.firstName}</div>}
          </div>
          <div className="form-group">
            <label className="mb-0" htmlFor="phone">Phone Number<span className="text-danger"> *</span></label>
            <input type="tel" className={`form-control border-left-0 border-right-0 border-top-0 rounded-0 ${formErrors.contact ? 'is-invalid' : ''}`} id="phone" name="contact" value={formData.contact} onChange={handleInputChange} />
            {formErrors.contact && <div className="invalid-feedback">{formErrors.contact}</div>}
          </div>
          <div className="form-group">
            <label className="mb-0" htmlFor="company">Company Name</label>
            <input type="text" className="form-control border-left-0 border-right-0 border-top-0 rounded-0" id="company" name="companyName" value={formData.companyName} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label className="mb-0" htmlFor="email">Email<span className="text-danger"> *</span></label>
            <input type="email" className={`form-control border-left-0 border-right-0 border-top-0 rounded-0 ${formErrors.email ? 'is-invalid' : ''}`} id="email" name="email" value={formData.email} onChange={handleInputChange} />
            {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
          </div>
          <div className="formSubmit">
            {
              registering ? <button type="button" disabled className="btn btn-primary btn-block bg-transparent rounded-pill text-dark">In progress..</button> :
                <button type="button" onClick={handleSubmit} className="btn btn-primary btn-block bg-transparent rounded-pill text-dark">Submit</button>
            }
          </div>
          {submitErrorMessage && <p className='errorMessage text-danger' style={{ textAlign: 'center' }}>{submitErrorMessage}</p>}
        </div>
      </div>
    </div>
  )
}

export default SignupPage;
