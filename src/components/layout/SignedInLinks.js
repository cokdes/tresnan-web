import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">Profil Kamu</NavLink></li>
            <li><NavLink to="/">Cari Jodoh Yuk!</NavLink></li>
            <li><NavLink to="/">Ramalan dan Kepribadian Kamu    </NavLink></li>
            <li><NavLink to="/">Konsultasi Percintaan</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className='btn btn-floating pink lighten-1'>NN</NavLink></li>
        </ul>
    )
}

export default SignedInLinks