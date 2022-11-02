import React from 'react';
import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';

const Addproducts = () => {
    return (
        <div className="container-fluid col-10 mt-1 p-1">

            <Formik
                initialValues={
                    {
                        Name:'',
                        Desc:'',
                        Pcode:'',
                        MRP:'',
                        dte: '',
                        Image:'',
                        OfferP:'',
                        GST:'',
                        // Password: '',
                    }
                }
                validationSchema={
                    yup.object({
                        Name: yup.string().required("Name Required"),
                        Desc: yup.string().required('Description Required'),
                        Pcode: yup.number().required('Product Code Required'),
                        MRP: yup.number().required('MRP Required'),
                        dte: yup.date()
                        .required("Required")
                        .min(new Date(), "Date cannot be in the past"),
                        // Image: yup.object().shape({
                        //     file: yup.mixed().required('File is required'),
                        // }),

                        Image: yup.mixed()
                        .nullable()
                        .required("Image Required"),
                        OfferP: yup.number().required('Offer Price Required'),
                        GST: yup.number().required('GST Price Required'),
                        // Email: yup.string().required("Email Required").email("Invalid Email"),
                        // Password: yup.string().required("Password Required").min(6),

                    })
                }

                onSubmit={
                    values => {
                        alert(JSON.stringify(values));
                    }
                }

            >

                <div className="border brder-primary p-4 m-4 ">
                    <h2>Add Products</h2>
                    <Form>
                        {
                            <div className='col-xl-12 col-sm-12'>
                                <dl>

                                    <dt>Name of the Product</dt>
                                    <dd>
                                        <Field type="text" name="Name" className="form-control" placeholder="Enter Name"></Field>
                                    </dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="Name"></ErrorMessage>
                                    </dd>

                                    <dt>Description of the Product</dt>
                                    <dd>
                                        <Field as="textarea" name="Desc" className="form-control" placeholder="Enter Decription"></Field>
                                    </dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="Desc"></ErrorMessage>
                                    </dd>

                                    <dt>Product Code</dt>
                                    <dd>
                                        <Field type="number" name="Pcode" className="form-control" placeholder="Enter Product Code"></Field>
                                    </dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="Pcode"></ErrorMessage>
                                    </dd>
                                    <dt>MRP Price</dt>
                                    <dd>
                                        <Field type="number" name="MRP" className="form-control" placeholder="Enter MRP"></Field>
                                    </dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="MRP"></ErrorMessage>
                                    </dd>
                                    <dt>Offer Price</dt>
                                    <dd>
                                        <Field type="number" name="OfferP" className="form-control" placeholder="Enter Offer Price"></Field>
                                    </dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="OfferP"></ErrorMessage>
                                    </dd>

                                    <dt>GST Price</dt>
                                    <dd>
                                        <Field type="number" name="GST" className="form-control" placeholder="Enter Offer Price"></Field>
                                    </dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="GST"></ErrorMessage>
                                    </dd>

                                    <dt>Image</dt>
                                    <dd>
                                        <Field type="file" name="Image" className="form-control" placeholder="Choose image file"></Field>
                                    </dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="Image"></ErrorMessage>
                                    </dd>


                                    <dt>Date of Expiry</dt>
                                    <dd>
                                        <Field type="date" name="dte" className="form-control" placeholder="Enter Email"></Field>
                                    </dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="dte"></ErrorMessage>
                                    </dd>

                                    {/* <dt>Password</dt>
                                    <dd>
                                        <Field type="password" name="Password" className="form-control" placeholder="Enter Password"></Field>
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
                    <NavLink to="/product"  >
                           Product Catalog
                    </NavLink>
                       
                    </div>
                </div>


            </Formik>
        </div>


    );
};

export default Addproducts;