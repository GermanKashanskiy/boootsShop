import React, { useContext, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SvgIcon from '@mui/material/SvgIcon';
import { Link } from "react-router-dom";
import '../../../../styles/style.css';
import { AuthContext } from "../../../../routes/Routes";
import LogOutSvg from "./svg/LogOutSvg";
import { AuthorizeInAccount } from "../../../../routes/AuthAccount";
import HeaderCart from "./header-cart/HeaderCart";


const HeaderUser = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logOutClick = () => {
        setIsAuthenticated(false)
        setAnchorEl(null);
    }

    const Logout = () => {
        AuthorizeInAccount(null)
    }

    useEffect(() => {
        if (isAuthenticated == false) {
            Logout()
        }
    }, [isAuthenticated])

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                <HeaderCart />

                <Tooltip title="Account" style={{ marginRight: '0.4rem' }}>
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }} />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >

                {isAuthenticated == false ? (<div></div>) :
                    (
                        <MenuItem onClick={handleClose}>
                            <Link to={"/profile"} className="d-flex">
                                <Avatar />
                                <div className="font-900">PROFILE</div>
                            </Link>
                        </MenuItem>
                    )}

                <Divider />

                {isAuthenticated == true ? (<div></div>) :
                    (
                        <MenuItem onClick={handleClose}>
                            <Link to={"/sign-in"} className="d-flex">
                                <SvgIcon style={{ marginRight: '0.2rem' }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"></path></SvgIcon>
                                <div className="font-900">SIGN IN</div>
                            </Link>
                        </MenuItem >
                    )}

                {isAuthenticated == false ? (<div></div>) :
                    (
                        <MenuItem onClick={logOutClick}>
                            <LogOutSvg />

                            <div className="font-900">LOG OUT</div>
                        </MenuItem>
                    )}
            </Menu>
        </React.Fragment>
    );
}

export default HeaderUser;
