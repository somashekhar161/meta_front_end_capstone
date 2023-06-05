import React from "react";
import Header from "./Header";
import {Box, Button, Typography} from "@mui/material";
import restaurant from "../assets/restaurant.jpg"

const Hero = () => {

    return (
        <article>
            <Box
                display="grid"
                gridTemplateColumns={{ xs: "repeat(1, 1fr)", md: "repeat(12, 1fr)" }}
                gridAutoRows="360px"
                alignItems="top"
                sx={{
                    paddingTop: "20px",
                    paddingLeft: { xs: "0px", md: "300px" },
                    paddingRight: { xs: "0px", md: "300px" },
                    backgroundColor: "#495E57"
                }}
            >
                <Box
                    gridColumn="span 6"
                >
                    <Header title="Little Lemon" subtitle="Chicago"></Header>
                    <Typography variant="p" color={"#EDEFEE"}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <Box
                        sx={{
                            paddingTop: "80px"
                    }}
                    >
                        <Button
                            variant="contained"
                            aria-label="On Click"
                            href={"/bookings"}
                            sx={{
                                borderRadius: "16px",
                                color: "#333333",
                                backgroundColor: "#F4CE14",
                                fontFamily: "Karla",
                                fontWeight: "bold",
                                textTransform: "none" // Remove all Caps from MUI Button
                            }}
                        >
                            Reserve a Table
                        </Button>
                    </Box>
                </Box>


                <Box
                    gridColumn="span 2"
                    mb="30px"
                >
                    <img src={restaurant} width="500px" alt="Restaurant"/>
                </Box>
            </Box>
        </article>
    )
}

export default Hero