import React from "react";
import data from "./Data";
import './ElectronicCard.css'

const ElectronicCard = () => {
    console.log(data);
    const list = data.map((data) => {
            if (data.id === 0) {
                return (
                    <li key={data.id}>
                        <div className="CardContainer">
                            <div className="Img">
                                <img src={data.picture} alt="Info"/>
                            </div>
                            <div className="Card">
                                <h1>{data.title}</h1>
                                <ul>
                                    <li>
                                        <span>{data.textOne}</span>
                                    </li>
                                    <li>
                                        <span>{data.textTwo}</span>
                                    </li>
                                    <li>
                                        <span>{data.textThree}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                )
            }

            return (
                <li key={data.id}>
                    <div className="CardContainer">
                        <div className="Img">
                            <img src={data.picture} alt="logo"/>
                        </div>
                        <div className="Card">
                            <h1>{data.title}</h1>
                            <p>{data.text}</p>
                        </div>
                    </div>
                </li>
            )
        }
    )
    return (
        <ul className="temp">
            {list}
        </ul>
    )
}
export default ElectronicCard;
