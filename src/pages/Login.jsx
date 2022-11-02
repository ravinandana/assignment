import React from 'react';
import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container-fluid col-6 mt-3 p-4 bg bg-light border border-light">

            <Formik
                initialValues={
                    {

                        Email: '',
                        Password: '',
                    }
                }
                validationSchema={
                    yup.object({

                        Email: yup.string().required("Email Required").email("Invalid Email"),
                        Password: yup.string().required("Password Required").min(6),

                    })
                }

                onSubmit={
                    values => {
                        alert(JSON.stringify(values));
                    }
                }

            >

                <div className="border border-primary p-4 m-4 ">
                    <h2>Register User</h2>
                    <Form>
                        {
                            <div className='col-xl-12 col-sm-12'>
                                <dl>


                                    <dt>Email</dt>
                                    <dd>
                                        <Field type="text" name="Email" className="form-control" placeholder="Enter Email"></Field>
                                    </dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="Email"></ErrorMessage>
                                    </dd>

                                    <dt>Password</dt>
                                    <dd>
                                        <Field type="password" name="Password" className="form-control" placeholder="Enter Password"></Field>
                                    </dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="Password"></ErrorMessage>
                                    </dd>





                                </dl>
                                <button className="btn btn-primary w-100">Submit</button>

                            </div>
                        }
                    </Form>
                    <div className='pt-3'>
                    <NavLink to="/forgetpass"  >
                           Forget Password
                       </NavLink>
                       <span className='float-end'><NavLink to="/resetpass"  >
                           Reset Password
                       </NavLink></span>
                    </div>
                </div>


            </Formik>
        </div>


    );
};

export default Login;