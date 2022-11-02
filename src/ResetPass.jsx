import React from 'react';
import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';

const ResetPass = () => {
    return (

        <div className="container-fluid col-6 mt-3 p-4 bg bg-light">

            <Formik
                initialValues={
                    {

                        Email: '',
                        // Password: '',
                    }
                }
                validationSchema={
                    yup.object({

                        Email: yup.string().required("Email Required").email("Invalid Email"),
                        // Password: yup.string().required("Password Required").min(6),

                    })
                }

                onSubmit={
                    values => {
                        alert(JSON.stringify(values));
                    }
                }

            >

                <div className="border brder-primary p-4 m-4">
                    <h2>Reset Password</h2>
                    <Form>
                        {
                            <div>
                                <dl>


                                    <dt>Email</dt>
                                    <dd>
                                        <Field type="text" name="Email" className="form-control" placeholder="Enter Email"></Field>
                                    </dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="Email"></ErrorMessage>
                                    </dd>

                                    {/* <dt>Password</dt>
                                    <dd>
                                        <Field type="password" name="Password" className="form-control"></Field>
                                    </dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="Password"></ErrorMessage>
                                    </dd> */}





                                </dl>
                                <button className="btn btn-primary w-100">Submit</button>

                            </div>
                        }
                    </Form>
                    <div className='pt-3'>
                    <NavLink to="/forgetpass"  >
                           Forget Password
                       </NavLink>
                    <span className='float-end'>
                    Existing User?
                        <NavLink to="/login" >
                           Login
                       </NavLink></span>
                    </div>
                </div>


            </Formik>
        </div>


        // <div>
        //     <h1>Login page</h1>
        //     <div className='border border-primary'>

        //     </div>


        // </div>
    );
};

export default ResetPass;