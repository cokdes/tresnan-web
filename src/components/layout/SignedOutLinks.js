import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">Cari Jodoh Yuk!</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><a href="/daftar" className="waves-effect waves-light btn-small pink">Daftar</a></li>
        </ul>
    )
}

export default SignedOutLinks