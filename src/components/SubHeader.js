import { Typography, Box } from "@mui/material";

const SubHeader = ({ title }) => {
    return (
        <Box mb="20px">
            <Typography
                variant="h4"
                color={"#333333"}
                // sx={{ m: "0 0 5px 0" }}
            >
                {title}
            </Typography>
        </Box>
    );
};

export default SubHeader;
