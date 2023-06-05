import React from "react";
import {Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import greekSalad from "../assets/greek salad.jpg";
import bruchetta from "../assets/bruchetta.png";
import lemonDessert from "../assets/lemon dessert.jpg";
import basket from "../assets/Basket.svg";
import SubHeader from "./SubHeader";

const Specials = () => {

    return (
        <article>
            <Box
                display="grid"
                gridTemplateColumns={{ xs: "repeat(1, 1fr)", md: "repeat(12, 1fr)" }}
                alignItems="top"
                sx={{
                    paddingTop: "20px",
                    paddingLeft: { xs: "0px", md: "300px" },
                    paddingRight: { xs: "0px", md: "300px" },
                }}
            >
                <Box
                    gridColumn="span 6"
                >
                    <SubHeader title="Specials"></SubHeader>
                </Box>

                <Box gridColumn="span 4"></Box>

                <Box
                    gridColumn="span 2"
                    mb="30px"
                >
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: "16px",
                            color: "#EDEFEE",
                            backgroundColor: "#495E57",
                            fontFamily: "Karla",
                            fontWeight: "bold",
                            textTransform: "none" // Remove all Caps from MUI Button
                        }}
                    >
                        Menu
                    </Button>
                </Box>
            </Box>


            <Box
                display="grid"
                gridTemplateColumns={{ xs: "repeat(1, 1fr)", md: "repeat(12, 1fr)" }}
                alignItems="top"
                gap="20px"
                mb="20px"
                sx={{
                    paddingTop: "20px",
                    paddingLeft: { xs: "0px", md: "300px" },
                    paddingRight: { xs: "0px", md: "300px" },
                }}
            >
                {/* Special Item 1 */}
                <Box
                    gridColumn="span 4"
                >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={greekSalad}
                            title="Greek Salad"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Greek Salad
                            </Typography>
                            <Typography variant="p" color="#333333">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography variant="p" color="#333333">
                                Order Delivery
                            </Typography>
                            <IconButton aria-label="order">
                                <img src={basket} width="20px" alt="Basket Icon"/>
                            </IconButton>
                        </CardActions>
                    </Card>
                </Box>


                {/* Special Item 2 */}
                <Box
                    gridColumn="span 4"
                >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={bruchetta}
                            title="Bruchetta"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Bruchetta
                            </Typography>
                            <Typography variant="p" color="#333333">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography variant="p" color="#333333">
                                Order Delivery
                            </Typography>
                            <IconButton aria-label="order">
                                <img src={basket} width="20px" alt="Basket Icon"/>
                            </IconButton>
                        </CardActions>
                    </Card>
                </Box>


                {/* Special Item 3 */}
                <Box
                    gridColumn="span 4"
                >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={lemonDessert}
                            title="Lemon Dessert"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lemon Dessert
                            </Typography>
                            <Typography variant="p" color="#333333">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography variant="p" color="#333333">
                                Order Delivery
                            </Typography>
                            <IconButton aria-label="order">
                                <img src={basket} width="20px" alt="Basket Icon"/>
                            </IconButton>
                        </CardActions>
                    </Card>
                </Box>
            </Box>

        </article>
    )
}

export default Specials