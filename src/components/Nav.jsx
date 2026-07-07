import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import MovieLogo from '../assets/MOVIE CAT.svg'

function Nav(){
    function openMenu(){
        document.body.classList += " menu--open";
    } 

    function closeMenu (){
        document.body.classList.remove("menu--open");
    }

    

    return (
        <nav>
            <div className="nav__container"> 
                <Link to="/">
                    <img src={MovieLogo} alt="" className="logo"></img>
                </Link>
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/" className="nav__link"> Home </Link>
                        <Link to="/movies/fast" className="nav__link"> Movies </Link>
                        <Link to="/contact" className="nav__link"> Contact </Link>
                    </li>
                    <button className="btn__menu" onClick={openMenu}> 
                        <FontAwesomeIcon icon="bars" />
                    </button>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close">
                        <FontAwesomeIcon icon="times" onClick={closeMenu}/>
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link to="/" className="menu__link">Home</Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/movies" className="menu__link">Movies</Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/contact" className="menu__link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;