import React from 'react';
import './header.css';
import bell from '../img/Header/bell.svg';
import button from '../img/Header/button.svg';
import eye from '../img/Header/eye.svg';
import photo from '../img/Header/photo.svg';
import search from '../img/Header/search.svg'

const Header = () => {
    return (
        <div className="containerHeader">
            <header id="navbar">
                <p className="logo">Мой профиль</p>
                <ul className="content">
                    <li>
                        <img className="right-pic" src={search} alt="search"/>
                    </li>
                    <li>
                        <img className="right-pic" src={bell} alt="bell"/>
                    </li>
                    <li>
                        <img className="right-pic" src={eye} alt="eye"/>
                    </li>
                    <li>
                        <img className="right-pic photo" src={photo} alt="person"/>
                    </li>
                    <li className="bk">
                        <img className="right-pic" src={button} alt="button"/>
                    </li>
                </ul>
            </header>
        </div>
    )
}
export default Header;