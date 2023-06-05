import {Box} from "@mui/material";
import Header from "../components/Header";
import React from "react";

const ConfirmedBooking = () => {
    return(
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
                <Header title="Booking Confirmation" subtitle="Your booking has been confirmed."/>
            </Box>
        </Box>
    )

}

export default ConfirmedBooking