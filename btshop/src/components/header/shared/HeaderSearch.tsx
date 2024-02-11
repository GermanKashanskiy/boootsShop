import React from "react";
import TextField from '@mui/material/TextField';
import { Box, SvgIcon } from "@mui/material";
import IconButton from '@mui/material/IconButton';


const HeaderSearch = () => {
    return (
        <Box borderRadius={"50px"} bgcolor={"#e0e0e0"} display={"flex"} alignItems={'center'}>
            <input className="header-search_input" type="text" placeholder="SearchO" />
            <div className="header-search_btn">
                <IconButton style={{ backgroundColor: '#171717' }}>
                    <SvgIcon><path color="#FBFBFB" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path></SvgIcon>
                </IconButton>
            </div>
        </Box>
    )
}

export default HeaderSearch;