import React from 'react';
import './App.css';
// TODO: import useFormik from formik library
import { useFormik } from 'formik';

function App() {
  // Create a Login form with Validation using Formik

  // Your form should include the following:

  //    1. Email Field
  //    2. Password Field
  //    3. Submit Button

  // Your form should implement the following input validation rules:

  //    - If the username or password inputs are empty, 
  //      display the message "field required" under the text input.
  //    - If the username is not in an email format, 
  //      display the message "username should be an email" under the text input.
  //    - If the username and password pass the validation above, 
  //      then display the message "Login Successful" in an `alert` box.

  // Your form should implement the following specific details:

  // - The email input field should have an id of `emailField`
  // - The email error message should be within a `div` element that has an id of `emailError`
  // - The password input field should have an id of `pswField`
  // - The password error message should be within a `div` element that has an id of `pswError`
  // - The submit button should have an id of `submitBtn`

  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''      
    },
    onSubmit: values =>{
      console.log('form:',values);
      alert('Login Successful');
    },
    validate: values => {
      let errors = {};

      if ( !values.emailField ) {
        errors.emailError = 'field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailError = 'username should be an email';
      }

      if(!values.pswField) errors.pswError = 'field required';

      return errors;
    }
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

        <div>Email:&nbsp;
          <input type="email" name="emailField" id="emailField" onChange={formik.handleChange} value={formik.values.emailField}/>
        </div>
        {formik.errors.emailError ? <div style={{color:'red'}} id="emailError">{formik.errors.emailError}</div> : null}        
        
        <div>Password:&nbsp;
        <input type="text" name="pswField" id="pswField" onChange={formik.handleChange} value={formik.values.pswField}/>
        </div>
        {formik.errors.pswError ? <div style={{color:'red'}} id="pswError">{formik.errors.pswError}</div> : null}

        <button type="submit" id="submitBtn">Submit</button>
      </form>      
    </div>
  );
}

export default App;
