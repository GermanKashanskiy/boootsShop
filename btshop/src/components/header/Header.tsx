import React from 'react';
import Paper from '@mui/material/Paper';
import HeaderSearch from './shared/HeaderSearch';
import HeaderLogo from './shared/HeaderLogo';
import Nav from './shared/Nav';
import HeaderUser from './shared/HeaderUser';
import './style/Header.css'
import '../../styles/style.css'


const Header = () => {
    return (
        <Paper elevation={2}>
            <header className='header d-flex justify-space-around items-center'>
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