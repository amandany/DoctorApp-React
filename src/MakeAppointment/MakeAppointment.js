import React from "react";
import PersonalCard from "./PersonalCard/PersonalCard";
import "./MakeAppointment.css";
import {Link} from "react-router-dom";
import ElectronicCard from "./ElectronicCard/ElectronicCard";

const MakeAppointment = () => {
    return (
        <>
            <div className="AppointmentContainer">
                <h1 className="NameOfFirstService">Запись на прием</h1>
                <div className="CardDoctor">
                    <PersonalCard row="true"/>
                    <div className="MoreInfo">
                        <p>Еще 3 записи </p>
                        <Link to="/record/">Подробнее</Link>
                    </div>
                </div>
            </div>

            <h1 className="NameOfFirstService NameOfSecondService">Электронная карта</h1>
            <div className="ElectronicCardContainer" >
                <ElectronicCard />
            </div>
        </>
    )
}
export default MakeAppointment;