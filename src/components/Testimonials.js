import React from "react";
import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardHeader,
    Rating,
    Typography
} from "@mui/material";
import SubHeader from "./SubHeader";

const Testimonials = () => {
    const [value, setValue] = React.useState(3);

    return (
        <article>
            <Box
                display="grid"
                gridTemplateColumns={{xs: "repeat(1, 1fr)", md: "repeat(1, 1fr)"}}
                sx={{
                    paddingTop: "20px",
                    paddingLeft: {xs: "0px", md: "300px"},
                    paddingRight: {xs: "0px", md: "300px"},
                    textAlign: "center",
                }}
            >
                <Box
                    gridColumn="span 1"
                >
                    <SubHeader title="Testimonials"></SubHeader>
                </Box>
            </Box>


            <Box
                display="grid"
                gridTemplateColumns={{xs: "repeat(1, 1fr)", md: "repeat(12, 1fr)"}}
                alignItems="top"
                gap="20px"
                mb="20px"
                sx={{
                    paddingTop: "20px",
                    paddingLeft: {xs: "0px", md: "300px"},
                    paddingRight: {xs: "0px", md: "300px"},
                }}
            >

                {/* Rating 1 */}
                <Box
                    gridColumn="span 6"
                >
                    <Card sx={{maxWidth: 345}}>
                        <CardHeader
                            title={
                                <React.Fragment>
                                    <Typography
                                        component="legend"
                                        variant="h5"
                                    >
                                        Rating
                                    </Typography>
                                    <Rating
                                        name="rating"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </React.Fragment>
                            }
                        >
                        </CardHeader>
                        <CardContent>
                            <Box display="flex" alignItems="center"> {/* Add this Box */}
                                <Avatar
                                    sx={{
                                        width: "80px",
                                        height: "80px",
                                        marginRight: "16px" // Add marginRight for spacing
                                    }}
                                >
                                    NS
                                </Avatar>
                                <Box> {/* Add this Box */}
                                    <Typography variant="p" color="#333333">
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </Typography>
                                </Box>
                            </Box>
                            <br/>
                            <Typography gutterBottom variant="h6" component="div">
                                Name Surname
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                {/* Rating 2 */}
                <Box
                    gridColumn="span 6"
                >
                    <Card sx={{maxWidth: 345}}>
                        <CardHeader
                            title={
                                <React.Fragment>
                                    <Typography
                                        component="legend"
                                        variant="h5"
                                    >
                                        Rating
                                    </Typography>
                                    <Rating
                                        name="rating"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </React.Fragment>
                            }
                        >
                        </CardHeader>
                        <CardContent>
                            <Box display="flex" alignItems="center"> {/* Add this Box */}
                                <Avatar
                                    sx={{
                                        width: "80px",
                                        height: "80px",
                                        marginRight: "16px" // Add marginRight for spacing
                                    }}
                                >
                                    NS
                                </Avatar>
                                <Box> {/* Add this Box */}
                                    <Typography variant="p" color="#333333">
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </Typography>
                                </Box>
                            </Box>
                            <br/>
                            <Typography gutterBottom variant="h6" component="div">
                                Name Surname
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

            </Box>

        </article>
    )
}

export default Testimonials