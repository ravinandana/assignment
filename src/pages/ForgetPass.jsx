import React from 'react';
import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';
const ForgetPass = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const phoneRegExp1=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    
    return (
        <div className="container-fluid col-6 mt-3 p-4 bg bg-light border border-light">

            <Formik
                initialValues={
                    {

                        Email: '',
                        Mobile: '',
                    }
                }
                validationSchema={
                    yup.object({

                        Email: yup.string().required("Email Required").email("Invalid Email"),
                        // Password: yup.string().required("Password Required").min(10),
                      Mobile:  yup.string().required("Mobile number Required").matches(phoneRegExp1, 'Phone number is not valid').min(10, "too short")
                      .max(10, "too long"),
                    })
                }

                onSubmit={
                    values => {
                        alert(JSON.stringify(values));
                    }
                }

            >

                <div className="border brder-primary p-4 m-4 border border-primary">
                    <h2>Forget Password</h2>
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

                                    <dt>Mobile</dt>
                                    <dd>
                                        <Field type="text" name="Mobile" className="form-control" placeholder="Enter Mobile"></Field>
                                    </dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="Mobile"></ErrorMessage>
                                    </dd>





                                </dl>
                                <button className="btn btn-primary w-100">Submit</button>

                            </div>
                        }
                    </Form>
                    <div className='pt-3'>
                        Existing User?
                    <NavLink to="/login"  >
                           Login
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

export default ForgetPass;