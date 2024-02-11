import React from 'react';
import Paper from '@mui/material/Paper';
import HeaderSearch from './shared/HeaderSearch';
import HeaderLogo from './shared/HeaderLogo';
import Nav from './shared/Nav';
import HeaderUser from './shared/HeaderUser';
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