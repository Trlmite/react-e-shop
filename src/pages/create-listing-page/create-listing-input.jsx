/* eslint-disable */
import {
    Box,
    TextField,
    Typography,
    InputLabel,
    MenuItem,
    FormControlLabel,
    Checkbox,
} from '@mui/material';
import React from 'react';


const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
];

const CreateListingInput = ({ values, errors, touched, handleBlur, handleChange }) => {
    const pageName = 'createListingInput';
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
            <Typography>{pageName}</Typography>
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
                helperText={touched.title && Boolean(errors.title)
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
                helperText={touched.imageURL && Boolean(errors.imageURL)
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
                helperText={touched.description && Boolean(errors.description)
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
                        helperText={touched.price && Boolean(errors.price)
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
                        helperText={touched.stock && Boolean(errors.stock)
                            ? errors.stock
                            : ' '}
                    />
                </Box>
                <Box>
                    <InputLabel htmlFor="currency" sx={{ fontWeight: 600 }}>Currency</InputLabel>
                    <TextField
                        sx={{ my: 1 }}
                        fullWidth
                        select
                        id="currency"
                        name='currency'
                        /* props by formik */
                        value={values.currency}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.currency && Boolean(errors.currency)}
                        helperText={touched.currency && Boolean(errors.currency)
                            ? errors.currency
                            : ' '}
                    >

                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <InputLabel htmlFor="new" sx={{ fontWeight: 600, my: 1 }}>Condition</InputLabel>
                    <Box>

                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            sx={{ mx: 2 }}
                            label="New"
                            id="new"
                            name='condition'
                            value={values.condition}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.condition && Boolean(errors.condition)}
                            helperText={touched.condition && Boolean(errors.condition)
                                ? errors.condition
                                : ' '}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Used"
                            id="used"
                            name='condition'
                            value='used'
                            value={values.condition}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.condition && Boolean(errors.condition)}
                            helperText={touched.condition && Boolean(errors.condition)
                                ? errors.condition
                                : ' '}
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
                            helperText={touched.manufacturer && Boolean(errors.manufacturer)
                                ? errors.manufacturer
                                : ' '}
                        />
                    </Box>
                    <Box>
                        <InputLabel htmlFor="memory" sx={{ fontWeight: 600, my: 1 }}>Memory</InputLabel>
                        <TextField
                            sx={{ my: 1 }}
                            type="number"
                            id="memory"
                            name='memory'
                            /* props by formik */
                            value={values.memory}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.memory && Boolean(errors.memory)}
                            helperText={touched.memory && Boolean(errors.memory)
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
                            helperText={touched.lust && Boolean(errors.lust)
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
