import React from 'react';
import FooterLogo from "../assets/MOVIE CAT.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src={FooterLogo} alt="" className="footer__logo--img" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">Home</Link>
                        <span className="footer__link no-cursor">About</span>
                        <Link to="/movies" className="footer__link">Movies</Link>
                        <span to="/contact" className="footer__link no-cursor">Contact</span>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2026 Movie Cat (Cody Osborne)
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;