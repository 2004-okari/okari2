import React, { useState, useEffect } from 'react';
import {
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoLogoTwitter,
} from 'react-icons/io5';
import { useForm } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import '../Styles/ContactScreen.css';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  name: yup.string('Enter your name').required('Name is required'),
  message: yup.string('Enter your message'),
});

const Contact = () => {
  const [state, handleSubmit] = useForm('mvoebdaq');
  const [sending, setSending] = useState(false);

  const notify = () => {
    toast(
      "Thank you for reaching out. We'll get back to you as soon as possible",
      {
        type: 'success',
      },
    );
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
  });

  return (
    <div className="contact">
      <div className="contactcontent">
        <div className="contactform">
          <h2 className="contacttitle">Contact Me</h2>
          <p className="contacttext">
            If you have an application you are interested in developing, a
            feature that you need built or a project that needs coding. I’d love
            to help with it!
          </p>
          <form onSubmit={handleSubmit} className="formcontainer">
            <TextField
              className="forminput"
              variant="outlined"
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              className="forminput"
              variant="outlined"
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              className="forminput"
              variant="outlined"
              id="message"
              name="message"
              label="Message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              multiline
              rows={4}
            />
            <Button
              className="submit-button"
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              disabled={state.submitting}
              onClick={() => {
                setSending(true);
                setTimeout(() => {
                  setSending(false);
                  notify();
                  formik.resetForm();
                }, 2000);
              }}
            >
              {sending ? 'SENDING...' : 'CONTACT US'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
