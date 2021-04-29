import React from 'react';
import './App.css';
import NavBar from "./Navbar/Navbar";
import Header from "./Header/header";
import MyRecord from "./MyRecord/MyRecord";
import {Route, Switch} from 'react-router-dom';
import MakeAppointment from "./MakeAppointment/MakeAppointment";

const App = () => {
    return (
        <div className="main">
            <NavBar/>
            <div className="layout">
                <Header/>
                <Switch>
                    <Route
                        path="/"
                        component={MakeAppointment}
                        exact/>
                    <Route
                        path="/record"
                        component={MyRecord}/>
                </Switch>
            </div>
        </div>
    )
}
export default App;