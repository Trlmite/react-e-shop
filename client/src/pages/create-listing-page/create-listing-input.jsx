/* eslint-disable */
import {
    Box,
    TextField,
    Typography,
    InputLabel,
    FormControlLabel,
    Checkbox,
} from '@mui/material';
import React from 'react';

const CreateListingInput = ({ values, errors, touched, handleBlur, handleChange, setField }) => {

    const handleContidionChange = (e) => {
        const newValue = e.target.value;
        setField('condition', newValue, true);
    }

    console.log(values.condition);
    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                pl: 2,
            }}
        >
            <InputLabel htmlFor="title" sx={{ fontWeight: 600, my: 1 }}>Title</InputLabel>
            <TextField
                sx={{ my: 1 }}
                id='title'
                name='title'
                /* props by formik */
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.title && Boolean(errors.title)}
                helpertext={touched.title && Boolean(errors.title)
                    ? errors.title
                    : ' '}
            />
            <InputLabel htmlFor="imageURL" sx={{ fontWeight: 600, my: 1 }}>ImageURL</InputLabel>
            <TextField
                sx={{ my: 1 }}
                id='imageURL'
                name='imageURL'
                /* props by formik */
                value={values.imageURL}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.imageURL && Boolean(errors.imageURL)}
                helpertext={touched.imageURL && Boolean(errors.imageURL)
                    ? errors.imageURL
                    : ' '}
            />
            <InputLabel htmlFor="description" sx={{ fontWeight: 600, my: 1 }}>Description</InputLabel>
            <TextField
                sx={{ my: 1 }}
                id='description'
                name='description'
                /* props by formik */
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.description && Boolean(errors.description)}
                helpertext={touched.description && Boolean(errors.description)
                    ? errors.description
                    : ' '}
            />
            <Box sx={{
                display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexBasis: 'auto',
            }}
            >
                <Box>
                    <InputLabel htmlFor="price" sx={{ fontWeight: 600 }}>Price</InputLabel>
                    <TextField
                        sx={{ my: 1 }}
                        type="number"
                        id="price"
                        name='price'
                        /* props by formik */
                        value={values.price}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.price && Boolean(errors.price)}
                        helpertext={touched.price && Boolean(errors.price)
                            ? errors.price
                            : ' '}
                    />
                </Box>
                <Box>
                    <InputLabel htmlFor="stock" sx={{ fontWeight: 600 }}>Quantity</InputLabel>
                    <TextField
                        sx={{ my: 1, width: 1 / 3 }}
                        type="number"
                        id="stock"
                        name='stock'
                        /* props by formik */
                        value={values.stock}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.stock && Boolean(errors.stock)}
                        helpertext={touched.stock && Boolean(errors.stock)
                            ? errors.stock
                            : ' '}
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <InputLabel htmlFor="new" sx={{ fontWeight: 600, my: 1 }}>Condition</InputLabel>
                    <Box>

                        <FormControlLabel
                            control={<Checkbox value="new"/>}
                            sx={{ mx: 2 }}
                            label="New"
                            id="new"
                            name='condition'
                            checked={values.condition === "new"} 
                            onChange={handleContidionChange}
                            onBlur={handleBlur}
                            
                        />
                        <FormControlLabel
                            control={<Checkbox  value="used"/>}
                            label="Used"
                            id="used"
                            name='condition'
                            checked={values.condition === "used"}
                            onChange={handleContidionChange}
                            onBlur={handleBlur}
                            
                        />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <InputLabel htmlFor="manufacturer" sx={{ fontWeight: 600, my: 1 }}>GPU&apos;s specs</InputLabel>
                <Box sx={{
                    display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%',
                }}
                >
                    <Box>
                        <InputLabel htmlFor="manufacturer" sx={{ fontWeight: 600, my: 1 }}>Manufacturer</InputLabel>
                        <TextField
                            sx={{ my: 1 }}
                            id="manufacturer"
                            name='manufacturer'
                            /* props by formik */
                            value={values.manufacturer}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.manufacturer && Boolean(errors.manufacturer)}
                            helpertext={touched.manufacturer && Boolean(errors.manufacturer)
                                ? errors.manufacturer
                                : ' '}
                        />
                    </Box>
                    <Box>
                        <InputLabel htmlFor="memory" sx={{ fontWeight: 600, my: 1 }}>Memory</InputLabel>
                        <TextField
                            sx={{ my: 1 }}
                            id="memory"
                            name='memory'
                            /* props by formik */
                            value={values.memory}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.memory && Boolean(errors.memory)}
                            helpertext={touched.memory && Boolean(errors.memory)
                                ? errors.memory
                                : ' '}
                        />
                    </Box>
                    <Box>
                        <InputLabel htmlFor="lust" sx={{ fontWeight: 600, my: 1 }}>Lust</InputLabel>
                        <TextField
                            sx={{ my: 1 }}
                            id="lust"
                            name='lust'
                            /* props by formik */
                            value={values.lust}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.lust && Boolean(errors.lust)}
                            helpertext={touched.lust && Boolean(errors.lust)
                                ? errors.lust
                                : ' '}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CreateListingInput;
