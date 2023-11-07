// ** Thuva ** //

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Login.css'; // Import your login page styles here
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Login = () => {
    const navigate = useNavigate();

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
            )
            .required('Password is required'),
    });

<<<<<<< HEAD
  return (
    <div>
      <Navbar/>
    <div className='loginpage'>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            if (values.email === 'admin12@example.com' && values.password === 'adminPassword123@') {
              toast.success('Admin Login successful', { autoClose: 3000 });
              localStorage.setItem('valid', 'admin');
              localStorage.setItem('email', values.email);
              navigate('/Admin'); // Redirect to the Admin page
=======
    const handleAdminLogin = async (values) => {
        try {
            if (values.email === 'admin@example.com' && values.password === 'adminPassword123@') {
                toast.success('Admin Login successful', { autoClose: 3000 });
                localStorage.setItem('valid', 'admin');
                localStorage.setItem('email', values.email);
                navigate('/Admin'); // Redirect to the Admin page
>>>>>>> 229e2ed47e4d9367909af10e03c2f51cc6178dbd
            } else {
                // Handle user login here
                const response = await axios.post('http://localhost:5001/v1/login', values);
                console.log(response.data);
                toast.success('User Login successful', { autoClose: 3000 });
                localStorage.setItem('valid', response.data);
                localStorage.setItem('email', values.email);
                navigate('/User'); // Redirect to the User page
            }
<<<<<<< HEAD
          } catch (error) {
=======
        } catch (error) {
>>>>>>> 229e2ed47e4d9367909af10e03c2f51cc6178dbd
            console.error(error);
            const errorMessage = error.response?.data || 'An error occurred';
            toast.warning(errorMessage, { autoClose: 3000 });
        }
    };

    return (
        <div>
            <Navbar />
            <div className='loginpage'>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={async (values) => {
                        handleAdminLogin(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="login-form">
                                <div style={{ marginBottom: '25px' }}>
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        style={{
                                            width: '100%',
                                            padding: '0.5rem',
                                            backgroundColor: '#66b3ff',
                                            fontSize: '18px',
                                            border: 'none',
                                        }}
                                    />
                                    <ErrorMessage name="email" component="div" className="error-message" />
                                </div>
                                <div style={{ marginBottom: '25px' }}>
                                    <Field
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        style={{
                                            width: '100%',
                                            padding: '0.5rem',
                                            backgroundColor: '#66b3ff',
                                            fontSize: '18px',
                                            border: 'none',
                                        }}
                                    />
                                    <ErrorMessage name="password" component="div" className="error-message" />
                                </div>
                                <button className="login-button" type="submit">
                                    Login
                                </button>
                                <div className="forgot-password">
                                    <a href="ForgotPassword">Forgot password?</a>
                                </div>
                                <Link to="/Signup" state={{}}>
                                    <button className="create-account-button">Create new account</button>
                                </Link>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;
