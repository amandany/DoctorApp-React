import React from 'react';
import Arrow from '../img/MyRecord/Arrow.svg';
import './MyRecord.css';
import PersonalCard from "../MakeAppointment/PersonalCard/PersonalCard";
import Calendar from "./Calendar";

const MyRecord = () => {
    return (
        <div className="RecordContainer">
            <div className="RecordHeader">
                <img src={Arrow} alt="<--"/>
                <p>Мои записи</p>
            </div>
            <div className="WorkArea">
                <div className="List">
                    <PersonalCard/>
                    <PersonalCard/>
                    <PersonalCard/>
                    <PersonalCard/>

                </div>
                <div className="Calendar">
                    <Calendar />
                </div>
            </div>
        </div>
    )
}

export default MyRecord;