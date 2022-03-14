/* eslint-disable */
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateListingInput from './create-listing-input';
import { useFormik } from 'formik';
import * as yup from 'yup';
import MainButton from '../../components/button/main-button';
import APIService from '../../services/api-service';

const initialValues = {
  title: 'Placeholder',
  imageURL: 'URL link',
  description: 'Placeholder ',
  price: '',
  stock: '',
  condition: 'new',
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
  condition: yup
    .string()
    .required("Must choose condition"),
  manufacturer: yup
    .string()
    .required("Must enter manufacturer"),
  memory: yup
    .string()
    .matches(/^[0-9]{1,3}gb$/)
    .required("Must enter memory"),
  lust: yup
    .string()
    .required("Must enter lust")
});



const CreateListingPage = () => {
  const [itemPlaceholder, setItemPlaceholder] = useState(initialValues);
  const navigate = useNavigate();

  const handleCreateItem = async ( itemPlaceholder, {resetForm} ) =>{
    try {
      await APIService.createItem({ ...itemPlaceholder })
      navigate('/items');
    } catch (error) {
      console.log(error)
    }
    resetForm();
  }

  const {
    values, errors, touched, isValid, dirty,
    handleChange, handleBlur, setFieldValue, handleSubmit
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleCreateItem,
  })
  useEffect(() => {
    setItemPlaceholder(
      values
    )
  }, [values])

  return (
    <Box 
      component="form"
      onSubmit={handleSubmit}
      sx={{ my: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      <Typography variant='h6'> Create item listing</Typography>
      <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
        <CreateListingInput
          initialValues={initialValues}
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          setField={setFieldValue}
        />
      </Box>
      <MainButton 
        sx={{ width: 1/3, justifyContent: "center"}}
        type="submit"
        disabled={!isValid && !dirty}
      >Create listing 
      </MainButton>
    </Box>
  );
};

export default CreateListingPage;
