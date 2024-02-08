import React from 'react';
import Paper from '@mui/material/Paper';
import HeaderSearch from './HeaderSearch';
import HeaderLogo from './HeaderLogo';
import Nav from './Nav';
import HeaderUser from './HeaderUser';
import './Header.css'


const Header = () => {
    return (
        <Paper elevation={3}>
            <header className='header'>
                <HeaderLogo />
                <HeaderSearch />
                <HeaderUser />
            </header>
            <nav>
                <Nav />
            </nav>
        </Paper>
    );
}

export default Header;