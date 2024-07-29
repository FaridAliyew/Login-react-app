import React, { useState } from 'react'



function Login() {

  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({});


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  }

  const validateForm = () => {
     document.querySelector(".create-account").addEventListener("click", ()=>{
      document.querySelector(".main-container-3").style.display = "none";
      document.querySelector(".main-container").style.display = "grid";
    })


    const errors = {};
    if (!formValues.email) {
      errors.email = "Emaili daxil edin";
    } else if(JSON.parse(localStorage.getItem("FormValues")).email !== formValues.email){

      let a =  document.querySelector(".create-account")
      a.style.display = "block";
      errors.email = "This user doesn’t exist";

    }
    if (!formValues.password) {
      errors.password = "Passwordu daxil edin";
    } else if(JSON.parse(localStorage.getItem("FormValues")).password !== formValues.password){
      errors.password = "This user doesn’t exist";
    }
    return errors;
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {

      let check = JSON.parse(localStorage.getItem("FormValues"));


      if (formValues.email === check.email && formValues.password === check.password) {
        document.querySelector('.main-container-3').style.display = 'none';
        document.querySelector('.main-container-4').style.display = 'block';
        document.getElementsByTagName('body')[0].style.overflowY = "unset";
      }

    } else {
      setFormErrors(errors);
    }
  }


  return (
    <div className='main-container-3 ' style={{ display: 'none' }}>
      <div className='main-container-2' >
        <div className='container' >
          <h1>Login</h1>
          <form className='my-form' onSubmit={handleSubmit}>

            <input
              type="email"
              name='email'
              value={formValues.email}
              onChange={handleInputChange}
              placeholder='Email' /> <br />
            {formErrors.email && <p className='error1'>{formErrors.email}</p>}

            <input
              type="password"
              name='password'
              value={formValues.password}
              onChange={handleInputChange}
              placeholder='Password' />
              <a href="#" className='create-account'>Create New Account</a>
            {formErrors.password && <p className='error2'>{formErrors.password}</p>} <br />

            <button type='submit' className='submit-button'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )

}

export default Login