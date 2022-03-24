import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from '../component/login/LoginForm';
import Registration from '../component/register/RegistrationForm';
import Dashboard from '../component/dashboard/Dashboard';
import Forecast from '../component/forecast/Forecast';

const AppRouter = () => (

    <Router>
        <div>
            <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/login" component={Login}/>
            <Route path="/forecast" component={Forecast}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Redirect from='*' to='/' />
            </Switch>
        </div>
    </Router>

);

export default AppRouter;
