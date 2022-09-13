import React, { useState } from 'react';
import { Formik } from 'formik';

import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

import './newElement.scss';

const NewElement = ({ title, inputs }) => {
  const [file, setFile] = useState('');

  const userFormInitialVlues = {
    file: '',
    user: '',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    password: '',
  };

  const productFormInitialVlues = {
    title: '',
    description: '',
    category: '',
    price: '',
    stock: '',
  };

  const handleUserFormValidate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.user) {
      errors.user = 'Required';
    }

    return errors;
  };

  const handleProductFormValidate = (values) => {
    const errors = {};

    return errors;
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h2>{title}</h2>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className="right">
            <Formik
              className="form"
              initialValues={
                title.includes('User')
                  ? userFormInitialVlues
                  : productFormInitialVlues
              }
              validate={(values) =>
                title.includes('User')
                  ? handleUserFormValidate(values)
                  : handleProductFormValidate(values)
              }
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="formInput">
                    <label htmlFor="file" className="fileLabel">
                      Upload Image <DriveFolderUploadIcon className="icon" />
                    </label>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      onChange={(e) => {
                        handleChange(e);
                        setFile(e.target.files[0]);
                      }}
                      onBlur={handleBlur}
                      value={values.file}
                      style={{ display: 'none' }}
                    />
                    <div className="error">
                      {errors.file && touched.file && errors.file}
                    </div>
                  </div>

                  {inputs.map((input) => {
                    return (
                      <div className="formInput" key={input.id}>
                        <label htmlFor={input.label}>{input.label}</label>
                        <input
                          type={input.type}
                          name={input.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values[input.type]}
                          placeholder={input.placeholder}
                        />
                        <div className="error">
                          {errors[input.name] &&
                            touched[input.name] &&
                            errors[input.name]}
                        </div>
                      </div>
                    );
                  })}

                  <div className="submit">
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewElement;
