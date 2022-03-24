import React from "react";
import {BrowserRouter as Router, Redirect, Route, Link} from "react-router-dom";
import Login from '../component/login/LoginForm';
import Registration from '../component/register/RegistrationForm';
import Dashboard from '../component/dashboard/Dashboard';
import Forecast from '../component/forecast/Forecast';

const AppRouter = () => (

    <Router>
        <div>
            <Route path="/" exact component={Login}/>
            <Route path="/login" component={Login}/>
            <Route path="/forecast" component={Forecast}/>
            <Route path="/registration" component={Registration}/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <Route exact path="*">
              <Redirect to="/" />
            </Route>
        </div>
    </Router>

);
function PrivateRoute({component: Component, ...rest}) {
    let isLoggedIn = localStorage.getItem('status');
    console.log(false);
    return (
        <Route
            {...rest}
            render={
            (props) => (isLoggedIn=='true') ? (<Component {...props} />) :(<Redirect to={"/login"}/>)
            }
        />
    );
}

export default AppRouter;
