import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from '@mui/material';
import '../Styles/ContactScreen.css';
import Input from 'rc-input';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  name: yup.string().required('Name is required'),
  message: yup.string().required('Message is required'),
});

const Contact = () => {
  const [sending, setSending] = useState(false);

  const notify = () => {
    toast.success("Thank you for reaching out! We'll reach out to you as soon as possible.");
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: () => {
      setSending(true);
      setTimeout(() => {
        setSending(false);
        notify();
        formik.resetForm();
      }, 2000);
    },
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
          <form onSubmit={formik.handleSubmit} className="formcontainer">
            <Input
              className="forminput"
              id="name"
              name="name"
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="error">{formik.errors.name}</p>
            ) : null}
            <Input
              className="forminput"
              id="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="error">{formik.errors.email}</p>
            ) : null}
            <Input
              type="textarea"
              className="forminput"
              id="message"
              name="message"
              placeholder="Message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              multiline
              rows={4}
              style={{ backgroundColor: 'white' }}
            />
            {formik.touched.message && formik.errors.message ? (
              <p className="error">{formik.errors.message}</p>
            ) : null}
            <Button
              className="submit-button"
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Contact Us'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
