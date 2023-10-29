import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^[A-Za-z]+$/, 'First name should contain only letters')
      .required('First name is required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^[A-Za-z]+$/, 'Last name should contain only letters')
      .required('Last name is required'),
    nic: Yup.string()
      .required('NIC is required')
      .matches(/^[0-9]{9}([vV]|[0-9]{1})?$/, 'Invalid NIC format')
      .length(10),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
      )
      .required('Password is required'),
    mobilenumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be a valid 10-digit number')
      .required('Mobile number is required'),
    // Address: Yup.string().required('Address is required'),
  });

  return (
    

    
    <div style={{ display: 'flex', flexDirection: 'column', justifycontent: 'center', alignItems: 'center',backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh',backgroundImage: 'url(https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?w=1060&t=st=1698206064~exp=1698206664~hmac=ad23c1ee90524321fc8506df2c3a01d9e4823e45df65bc387de71efe5e68b061)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#8d2d76', width: '40%', margintop: '0%', borderRadius: '20px' }}>
        <div style={{ padding: '30px' }}>
          <h1 style={{ textAlign: 'center' }}>Signup</h1>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              nic: '',
              password: '',
              mobilenumber: '',
              // Address: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
              axios
                .post('http://localhost:5001/v1/register', values)
                .then((res) => {
                  if (res && res.data) {
                    console.log(res.data);
                    toast.success(res.data);
                    navigate('/');
                  } else {
                    console.log('Unexpected response:', res);
                    toast.error('Unexpected response from the server.');
                  }
                })
                .catch((err) => {
                  if (err && err.response && err.response.data) {
                    const error = err.response.data;
                    console.log(error);
                    toast.error(error);
                  } else {
                    console.log('Error occurred:', err.message);
                    toast.error('Error occurred while processing the request.');
                  }
                });
            }}
          >
            {({ errors, touched, resetForm }) => (
              <Form style={{ maxWidth: '400px', margin: '0 auto' }}>
                <div style={{ display: 'flex', marginBottom: '25px' }}>
                  <div style={{ marginRight: '100px' }}>
                    <Field name="firstName" placeholder="First Name" style={{ width: '100%', padding: '0.5rem', backgroundColor: '#929692', fontSize: '18px', border: 'none' }} />
                    {errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
                  </div>
                  <div>
                    <Field name="lastName" placeholder="LastName" style={{ width: '100%', padding: '0.5rem', backgroundColor: '#929692', fontSize: '18px', border: 'none' }} />
                    {errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
                  </div>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <Field name="nic" type="nic" placeholder="NIC" style={{ width: '100%', padding: '0.5rem', backgroundColor: '#929692', fontSize: '18px', border: 'none' }} />
                  {errors.nic && touched.nic ? <div>{errors.nic}</div> : null}
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <Field name="email" type="email" placeholder="Email" style={{ width: '100%', padding: '0.5rem', backgroundColor: '#929692', fontSize: '18px', border: 'none' }} />
                  {errors.email && touched.email ? <div>{errors.email}</div> : null}
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <Field name="password" type="password" placeholder="Password" style={{ width: '100%', padding: '0.5rem', backgroundColor: '#929692', fontSize: '18px', border: 'none' }} />
                  {errors.password && touched.password ? <div>{errors.password}</div> : null}
                </div>
                <div style={{ marginBottom: '25px' }}>
                  <Field name="mobilenumber" type="mobilenumber" placeholder="Mobile Number" style={{ width: '100%', padding: '0.5rem', backgroundColor: '#929692', fontSize: '18px', border: 'none' }} />
                  {errors.mobilenumber && touched.mobilenumber ? <div>{errors.mobilenumber}</div> : null}
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button type="submit" style={{ width: '200px', height: '40px', border: 0, borderRadius: '15px', backgroundColor: '#14b31b', color: 'white', fontSize: '18px' }}>
                    Create Account
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
