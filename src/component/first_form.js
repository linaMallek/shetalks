import React from 'react';
import { Formik, Form, Field } from 'formik';
import YesNoCheckbox from '../component/second_form';
import NumberAndDateForm from '../component/third_form';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import '../App.css';

const RegistrationForm = ({ onSubmit }) => {
  return (
    <div className="overlay">
      <div className="left-section">
        <img src="image.png" alt="description de l'image" />
      </div>
      <div className='ligne'></div>
      <div className='right-section '>
        <h1>Sign up</h1>
        <Formik
          initialValues={{
            lastName: '',
            firstName: '',
            email: '',
            phoneNumber: '',
            address: '',
            userName: '',
            age: '',
            password: '',
            confirmPassword: ''
          }}
          validate={(values) => {
            const errors = {};
            // TODO: Add validation logic here
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='formR'>
                <div className='divR'>
                  <label>Last Name:</label>
                  <br />
                  <Field type="text" name="lastName" className='bntR' />
                  <br />
                  <label>First Name:</label>
                  <br />
                  <Field type="text" name="firstName" className='bntR' />
                  <br />
                  <label>Email</label>
                  <br />
                  <Field type="email" name="email" className='bntR' />
                  <br />
                  <label>Phone Number</label>
                  <br />
                  <Field type="tel" name="phoneNumber" className='bntR' />
                </div>

                <div>
                  <label>User Name</label>
                  <br />
                  <Field type="text" name="userName" className='bntR' />

                  <label><br />Age</label>
                  <br />
                  <Field type="number" name="age" className='bntR' />

                  <label><br />Password</label>
                  <br />
                  <Field type="password" name="password" className='bntR' />

                  <label><br />Confirm Password</label>
                  <br />
                  <Field type="password" name="confirmPassword" className='bntR' />
                </div>
              </div>
              <button type="submit" className='red-button' disabled={isSubmitting}>
                Next
              </button>
               
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RegistrationForm;
