import Box from "@mui/material/Box";
import Header from "./Header";
import {Formik} from "formik";
import SubHeader from "./SubHeader";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers";
import {
    Checkbox,
    FormControlLabel, FormHelperText,
    Slider,
    TextField,
    Typography
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import restaurant from "../assets/restaurant.jpg";
import restaurantChefB from "../assets/restaurant chef B.jpg";
import Button from "@mui/material/Button";
import React from "react";
import * as yup from "yup";
import dayjs from "dayjs";

const BookingForm = ({availableTimes, updateTimes, submitForm}) => {

    const marks = [
        {
            value: 0,
            label: 0,
        },
        {
            value: 2,
            label: 2,
        },
        {
            value: 4,
            label: 4,
        },
        {
            value: 6,
            label: 6,
        },
        {
            value: 8,
            label: 8,
        },
        {
            value: 10,
            label: 10,
        },
        {
            value: 12,
            label: 12,
        },
        {
            value: 14,
            label: 14,
        },
        {
            value: 16,
            label: 16,
        },
    ];

    const handleFormSubmit = async (values, {resetForm}) => {
        // Submit form
        submitForm(values)

        // Reset the form fields after the submission is complete
        resetForm();
    };

    return (
        <section>
            <Box
                display="grid"
                gridTemplateColumns={{xs: "repeat(1, 1fr)", md: "repeat(1, 1fr)"}}
                alignItems="top"
                gap="20px"
                sx={{
                    paddingTop: "20px",
                    paddingLeft: {xs: "0px", md: "300px"},
                    paddingRight: {xs: "0px", md: "300px"},
                    backgroundColor: "#495E57"
                }}
            >
                <Box
                    gridColumn="span 1"
                    textAlign="center"
                >
                    <Header title="Reservations" subtitle="Little Lemon Booking Form"/>
                </Box>
            </Box>

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
                validateOnMount={true}
                validateOnChange={true}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                      setFieldValue,
                      setFieldTouched,
                      isValid,
                      isSubmitting
                  }) => (
                    <form onSubmit={handleSubmit}>
                        {/* Booking Information */}
                        <Box
                            display="grid"
                            gridTemplateColumns={{xs: "repeat(1, 1fr)", md: "repeat(12, 1fr)"}}
                            alignItems="top"
                            gap="20px"
                            sx={{
                                paddingTop: "20px",
                                paddingLeft: {xs: "0px", md: "300px"},
                                paddingRight: {xs: "0px", md: "300px"},
                            }}
                        >
                            <Box
                                gridColumn="span 12"
                                gridRow="1"
                                textAlign="center"
                            >
                                <SubHeader title="Booking Information"/>
                            </Box>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Box
                                    gridColumn="span 3"
                                    gridRow="2"
                                >
                                    <DatePicker
                                        disablePast
                                        label="Booking Date"
                                        type="date"
                                        onBlur={handleBlur}
                                        onChange={(newValue) => {
                                            if (newValue !== null) {
                                                const newDate = dayjs(newValue.$d).startOf('day')
                                                setFieldValue('bookingDate', newDate);
                                                updateTimes(newDate.toDate());
                                                console.log(errors.bookingDate)
                                            }
                                        }}
                                        value={values.bookingDate}
                                        name="bookingDate"
                                        error={!!touched.bookingDate && !!errors.bookingDate}
                                        helperText={touched.bookingDate && errors.bookingDate}
                                    />
                                    {errors.bookingDate ? (
                                        <FormHelperText error>{errors.bookingDate}</FormHelperText>
                                    ) : null}
                                </Box>
                            </LocalizationProvider>
                            <Box
                                gridColumn="span 3"
                                gridRow="2"
                            >
                                <TextField
                                    fullWidth
                                    name="bookingTime"
                                    select
                                    label="Booking Time"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.bookingTime}
                                    error={!!touched.bookingTime && !!errors.bookingTime}
                                    helperText={touched.bookingTime && errors.bookingTime}
                                >
                                    {availableTimes.map((time) => (
                                        <MenuItem key={time} value={time}>{time}</MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                            <Box
                                position="relative"
                                gridColumn="span 6"
                                gridRow={{xs: "6", md: "2 / 5"}} // Allows Image to span 4 rows
                            >
                                <img src={restaurant} width="500px" alt="Restaurant"/>
                            </Box>
                            <Box
                                gridColumn="span 6"
                            >
                                <Typography
                                    variant="p"
                                >
                                    Number of Guests
                                </Typography>
                                <Slider
                                    data-testid="numberOfGuests-slider"
                                    label="Number of Guests"
                                    type="number"
                                    onBlur={handleBlur}
                                    // onChange={handleChange}
                                    onChange={(event, newValue) => {
                                        setFieldValue('numberOfGuests', newValue);
                                        setFieldTouched('numberOfGuests', true, false); // Mark the field as touched when the slider changes
                                    }}
                                    value={values.numberOfGuests}
                                    name="numberOfGuests"
                                    valueLabelDisplay="auto"
                                    step={2}
                                    marks={marks}
                                    min={0}
                                    max={16}
                                />
                                {touched.numberOfGuests && errors.numberOfGuests ? (
                                    <FormHelperText error>{errors.numberOfGuests}</FormHelperText>
                                ) : null}
                            </Box>
                            <Box
                                gridColumn="span 6"
                            >
                                <FormControlLabel
                                    control={<Checkbox/>}
                                    label="Smoking or Non-Smoking?"
                                    name="smoking"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.smoking}
                                />
                            </Box>
                        </Box>

                        {/* Personal Information */}
                        <Box
                            display="grid"
                            gridTemplateColumns={{xs: "repeat(1, 1fr)", md: "repeat(12, 1fr)"}}
                            alignItems="top"
                            gap="20px"
                            sx={{
                                paddingTop: "20px",
                                paddingLeft: {xs: "0px", md: "300px"},
                                paddingRight: {xs: "0px", md: "300px"},
                            }}
                        >
                            <Box
                                gridColumn="span 12"
                                gridRow="1"
                                textAlign="center"
                            >
                                <SubHeader title="Client Information"/>
                            </Box>
                            <Box
                                gridColumn="span 6"
                                gridRow="2"
                            >
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="First Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.first_name}
                                    name="first_name"
                                    error={!!touched.first_name && !!errors.first_name}
                                    helperText={touched.first_name && errors.first_name}
                                />
                            </Box>
                            <Box
                                position="relative"
                                gridColumn="span 6"
                                gridRow={{xs: "6", md: "2 / 5"}} // Allows Image to span 4 rows
                            >
                                <img src={restaurantChefB} width="500px" alt="Chef"/>
                            </Box>
                            <Box
                                gridColumn="span 6"
                            >
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Last Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.last_name}
                                    name="last_name"
                                    error={!!touched.last_name && !!errors.last_name}
                                    helperText={touched.last_name && errors.last_name}
                                />
                            </Box>
                            <Box
                                gridColumn="span 6"
                            >
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Number"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.number}
                                    name="number"
                                    error={!!touched.number && !!errors.number}
                                    helperText={touched.number && errors.number}
                                />
                            </Box>
                            <Box
                                gridColumn="span 6"
                            >
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    name="email"
                                    error={!!touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}
                                />
                            </Box>

                        </Box>

                        <Box
                            display="flex"
                            justifyContent="center"
                            mt="20px"
                            paddingBottom="20px"
                        >
                            <Button
                                variant="contained"
                                type="submit"
                                aria-label="On Click"
                                disabled={!isValid || isSubmitting}
                                sx={{
                                    borderRadius: "16px",
                                    color: "#333333",
                                    backgroundColor: "#F4CE14",
                                    fontFamily: "Karla",
                                    fontWeight: "bold",
                                    textTransform: "none" // Remove all Caps from MUI Button
                                }}
                            >
                                Reserve Table
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </section>
    )
}
const today = dayjs().startOf('day')
const checkoutSchema = yup.object().shape({
    bookingDate: yup.date()
        .typeError("Needs to be a date.")
        .min(today, "Date cannot be in the past")
        .required("Date Required"),
    bookingTime: yup.string().required("Time Required"),
    numberOfGuests: yup.number()
        .min(2, 'Must be at least 2')
        .max(16, 'Must be no more than 16')
        .required('Number Required'),
    first_name: yup.string().required("First Name Required"),
    last_name: yup.string().required("Last Name Required"),
    number: yup
        .string()
        .matches(
            /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
            "Phone number is not valid"
        )
        .required("Phone number Required"),
    email: yup.string().email("invalid email").required("Email Required"),

});
const initialValues = {
    bookingDate: dayjs(),
    bookingTime: "",
    numberOfGuests: 0,
    smoking: false,
    first_name: "",
    last_name: "",
    number: "",
    email: "",
};

export default BookingForm