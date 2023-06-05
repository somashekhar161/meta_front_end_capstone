import React from "react";
import Box from "@mui/material/Box";
import restauranfood from "../assets/restauranfood.jpg"
import Typography from "@mui/material/Typography";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const pages = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Menu', path: '/menu'},
        {name: 'Reservations', path: '/bookings'},
        {name: 'Order Online', path: '/order-online'},
        {name: 'Login', path: '/login'},
    ];

    const contacts = [
        "Administration",
        "011-111-2222",
        "admin@littlelemon.com",
    ]

    const socials = [
        {name: 'Facebook', path: 'https://facebook.com', icon: <FacebookIcon/>},
        {name: 'Instagram', path: 'https://instagram.com', icon: <InstagramIcon/>},
        {name: 'LinkedIn', path: 'https://linkedin.com', icon: <LinkedInIcon/>},
    ]
    return (
        <footer>
            <Box
                display="grid"
                gridTemplateColumns={{xs: "repeat(1, 1fr)", md: "repeat(12, 1fr)"}}
                gridAutoRows="310px"
                alignItems="top"
                sx={{
                    paddingTop: "20px",
                    paddingLeft: {xs: "0px", md: "300px"},
                    paddingRight: {xs: "0px", md: "300px"},
                    backgroundColor: "#333333"
                }}
            >
                <Box
                    gridColumn="span 3"
                >
                    <img src={restauranfood} width="200px" alt="Food"/>
                </Box>
                <Box
                    gridColumn="span 3"
                >
                    <ul>
                        <li
                            style={{
                                listStyleType: "none",
                                paddingBottom: "10px"
                            }}
                        >
                            <Typography
                                textAlign="left"
                                variant="h6"
                                color="#EDEFEE"
                            >
                                Navigation
                            </Typography>
                        </li>
                        {pages.map((page) => (
                                <li
                                    key={page.name}
                                    style={{
                                        paddingBottom: "10px"
                                    }}
                                >
                                    <Typography
                                        textAlign="center"
                                        component="a"
                                        href={page.path}
                                        color="#EDEFEE"
                                    >
                                        {page.name}
                                    </Typography>
                                </li>
                            )
                        )
                        }
                    </ul>
                </Box>
                <Box
                    gridColumn="span 3"
                >
                    <ul>
                        <li
                            style={{
                                listStyleType: "none",
                                paddingBottom: "10px"
                            }}
                        >
                            <Typography
                                textAlign="left"
                                variant="h6"
                                color="#EDEFEE"
                            >
                                Contact Us
                            </Typography>
                        </li>
                        {contacts.map((contact) => (
                                <li
                                    key={contact}
                                    style={{
                                        listStyleType: "none",
                                        paddingLeft: "10px",
                                        paddingBottom: "10px"
                                    }}
                                >
                                    <Typography
                                        textAlign="center"
                                        variant="p"
                                        color="#EDEFEE"
                                    >
                                        {contact}
                                    </Typography>
                                </li>
                            )
                        )
                        }
                    </ul>
                </Box>
                <Box
                    gridColumn="span 3"
                >
                    <ul>
                        <li
                            style={{
                                listStyleType: "none",
                                paddingBottom: "10px"
                            }}
                        >
                            <Typography
                                textAlign="left"
                                variant="h6"
                                color="#EDEFEE"
                            >
                                Social Media
                            </Typography>
                        </li>
                        {socials.map((social) => (
                                <li
                                    key={social.name}
                                    style={{
                                        listStyleType: "none",
                                        paddingLeft: "10px",
                                        paddingBottom: "10px"
                                    }}
                                >
                                    <Typography
                                        component="a"
                                        href={social.path}
                                        color="#EDEFEE"
                                    >
                                        {social.icon} {social.name}
                                    </Typography>
                                </li>
                            )
                        )
                        }
                    </ul>
                </Box>
            </Box>
        </footer>
    )
}

export default Footer