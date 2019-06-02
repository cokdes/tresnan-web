import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3 transparent">
            <Link to='/' className="brand-logo" style={{margin:"10px 0 0 10px"}}>
                <img src='logo.png' alt="Tresnan - Awal Keluarga Bahagia"/>
            </Link>
            <SignedInLinks />
            <SignedOutLinks />
        </nav>
    )
}

export default Navbar