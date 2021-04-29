import React from "react";
import './PersonalCard.css';
import img from '../../img/Header/photo.svg';
import Data from "./Data";

const PersonalCard = (props) => {

    console.log(props.row);
    const List = Data.map((data) => {
        return(
            <li>
                <div className="Box">
                    <h1>{data.title}</h1>
                    <p>{data.location}</p>
                    <div className="Person">
                        <img src={data.photo} alt="Person" />
                        <div>
                            <p>{data.name}</p>
                            <p>{data.specialization}</p>
                        </div>
                    </div>
                    <button> Отменить </button>
                </div>
            </li>
        )
    })
    if(props.row === "true"){
        return (
            <ul className="pointer">
                {List}
            </ul>
        )
    }

    return (
        <ul>
            {List}
        </ul>
    )
}
export default PersonalCard;


/*
<div className="Box">
            <h1>Понедельник 15.06.20 | 15:30</h1>
            <p>СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А</p>
            <div className="Person">
                <img src={img} alt="Person" />
                <div>
                    <p>Малушко Т. Н.</p>
                    <p>Хирургия</p>
                </div>
            </div>
            <button> Отменить </button>
        </div>
*/
