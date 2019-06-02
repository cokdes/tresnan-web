import React from 'react';

const Hero = () => {
    return(
        <div className="tresnan-hero">
            <div className="container tresnan-hero-content">
                <h3 className="tresnan-welcome-header">Keluarga Bahagia Kamu</h3>
                <h5 className="tresnan-welcome-caption">
                    Berawal dari <b>Jodoh yang Baik</b><br/>
                </h5>
                <br/>
                <a href="/" className="waves-effect waves-light btn-large pink" >
                    <i className="material-icons left">favorite</i>
                    Cari Jodoh Yuk!
                </a>
            </div>
        </div>
    )
}

export default Hero