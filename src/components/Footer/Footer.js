import React from 'react';
import './Footer.css'
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className="custom-color">
            <div className="footer pt-3">
                <div>
                    {/* Footer Logo */}
                    <img className="footer-logo" src={logo} alt="" />
                </div>
                <div>
                    {/* Footer Motto and Social Part */}
                    <p className="text-size text-warning">Never Stop Learning</p><span className="text-center"><p><i className="fab fa-facebook-square"></i><i className="fab fa-twitter-square"></i><i className="fab fa-youtube"></i><i className="fab fa-google-plus"></i></p></span>
                </div>
            </div>
            <span className="copyright text-center">Copyright &copy; 2021 All Rights Reserved by <span className="text-danger">Hamdan Ahmed</span></span>
        </div>
    );
};

export default Footer;