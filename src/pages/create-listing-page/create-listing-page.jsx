/* eslint-disable */
import { Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ItemPageGridCard from '../items-page/item-page-grid-card';
import CreateListingInput from './create-listing-input';
import { useFormik } from 'formik';
import * as yup from 'yup';

const initialValues = {
  title: 'title',
  imageURL: '',
  description: '',
  value: '',
  stock: '',
  currency: 'USD',
  condition: '',
  manufacturer: '',
  memory: '',
  lust: '',
}
const validationSchema = yup.object({
  title: yup
    .string('Enter title')
    .required('Must enter title'),
  imageURL: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!',
    )
    .required('Must enter correct URL adress'),
  description: yup
    .string()
    .required('Must enter description'),
  price: yup
    .number()
    .required('Must enter price'),
  stock: yup
    .number()
    .required('Must enter quantity'),
  currency: yup
    .string()
    .required('Must choose currency'),
  condition: yup
    .string()
    .required("Must choose condition"),
  manufacturer: yup
    .string()
    .required("Must enter manufacturer"),
  memory: yup
    .number()
    .required("Must enter memory"),
  lust: yup
    .string()
    .required("Must enter lust")
});



const CreateListingPage = () => {
  const pageName = 'create-Listing-Page';

  const [itemPlaceholder, setItemPlaceholder] = useState(initialValues);

  const {
    values, errors, touched, isValid, dirty,
    handleChange, handleBlur,
  } = useFormik({
    initialValues,
    validationSchema,
  })
//  not updating initialValues and placeholder ???
  useEffect(() =>{
    setItemPlaceholder(
      initialValues
    ) 
  },[initialValues])

  console.log({itemPlaceholder, initialValues})

  return (
    <Box>
      <Typography variant="h5" textAlign="center">{pageName}</Typography>
      <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
        <CreateListingInput
          initialValues={initialValues}
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}

        />
        <ItemPageGridCard
          {...itemPlaceholder}
        />
      </Box>
    </Box>
  );
};

export default CreateListingPage;
