import React from 'react';

const Footer = () => {
    return(
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Rencanakan Keluarga Bahagiamu</h5>
                <p className="grey-text text-lighten-4">Tresnan membantu kamu mencari jodoh terbaik untukmu.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="/">Cari jodoh yuk!</a></li>
                  <li><a className="grey-text text-lighten-3" href="/about">Tentang Kami</a></li>
                  <li><a className="grey-text text-lighten-3" href="/">Konsultasi Percintaan</a></li>
                  <li><a className="grey-text text-lighten-3" href="/">Blog</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
                © 2019 Copyright Tresnan.co
                <div className="tresnan-footer-sosmed right">
                <a className="grey-text text-lighten-4 right" href="/">
                    <img src="img/facebook.png" alt="tresnan" height="28px"/>
                </a>
                <a className="grey-text text-lighten-4 right" href="/">
                    <img src="img/instagram.png" alt="tresnan" height="28px"/>
                </a>
                </div>
            </div>
          </div>
        </footer>
    )
}

export default Footer