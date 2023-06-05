import { Typography, Box } from "@mui/material";

const Header = ({ title, subtitle }) => {
    return (
        <Box mb="20px">
            <Typography
                variant="h2"
                color={"#F4CE14"}
                // sx={{ m: "0 0 5px 0" }}
            >
                {title}
            </Typography>
            <Typography variant="h5" color={"#EDEFEE"}>
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;
