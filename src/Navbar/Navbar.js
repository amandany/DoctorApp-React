import React from 'react';
import './Navbar.css';
import heart from '../img/Navbar/Vector.svg';
import phonendoscop from '../img/Navbar/Vector2.svg';
import message from '../img/Navbar/Vector3.svg';
import test from '../img/Navbar/test1.svg';
import book from '../img/Navbar/Vector5.svg'
import help from '../img/Navbar/help.svg';
import logo from '../img/Navbar/logo.svg'

const NavBar = () => {
    return (
        <div className="container">
            <ul className="list">
                <li className="list-item">
                    <p>Логотип</p>
                </li>
                <li className="active list-item">
                    <img src={heart} alt="heart"/>
                    <p>Профиль</p>
                </li>
                <li className="list-item">
                    <img src={phonendoscop} alt="phonendoscop"/>
                    <p>Врачи и клиники</p>
                </li>
                <li className="list-item">
                    <img src={message} alt="message"/>
                    <p>Сообщения</p>
                </li>
                <li className="list-item">
                    <img src={test} alt="test"/>
                    <p>Тестирование</p>
                </li>
                <li className="list-item">
                    <img src={book} alt="book"/>
                    <p>Полезно знать</p>
                </li>
                <li className="list-item">
                    <button className="button">Подать заявку</button>
                </li>
            </ul>

            <ul className="below list">
                <li  className="list-item">
                    <img src={help} alt="help"/>
                    <p>Помощь</p>
                </li>
                <li  className="list-item">
                    <img className="picFullSize" src={logo} alt="picFullSize"/>
                </li>
            </ul>
        </div>
    )
}
export default NavBar;

