import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(25, 'Maximum 25 characters')
    .required('Required!'),
  email: Yup.string().email('Invalid email format').required('Required!'),
  password: Yup.string().min(7, 'Minimum 7 characters').required('Required!'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(register(values));
    },
  });

  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
      <label className={css.label}>
        Username
        <input
          placeholder="Adrian Cross"
          className={css.input}
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={css.formikMessage}>{formik.errors.name}</div>
        ) : null}
      </label>
      <label className={css.label}>
        Email
        <input
          placeholder="across@mail.com"
          className={css.input}
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={css.formikMessage}>{formik.errors.email}</div>
        ) : null}
      </label>
      <label className={css.label}>
        Password
        <input
          title="Minimum 7 characters"
          className={css.input}
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={css.formikMessage}>{formik.errors.password}</div>
        ) : null}
      </label>
      <button className={css.button} type="submit">
        Register
      </button>
    </form>
  );
};
