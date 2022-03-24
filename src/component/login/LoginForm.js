import React, {useState, Route, useEffect} from 'react';
import './LoginForm.css';
import {Redirect, Link} from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';

const LoginForm = () => {
const [email, setEmail] = useState('');
const [redirect, setRedirect] = useState('');
const [password, setPassword] = useState('');
const [errorMsg, setErrorMsg] = useState('');


const handleSubmit = e => {
     let username = localStorage.getItem('email');
      let password = localStorage.getItem('password');
      if ((username == e.target.email.value) && (password == e.target.password.value)) {
          localStorage.setItem('status', true);
          setRedirect({redirect: true})
          setErrorMsg('Successfully Logged In')
          window.location.href = "/dashboard";
      } else {
          setErrorMsg('Invalid Username or Password')
      }
      e.preventDefault();

};

 useEffect(() => {
             let status = localStorage.getItem('status');
             if (status == true || status == "true"){
                 window.location.href = "/dashboard";
             }
        });

    return (
        <div className="col s12">
            <div><h4 className="center-align">Login Here</h4></div>
            <div className="text-center"><p>{errorMsg}</p></div>
            <form className="col s12" onSubmit={handleSubmit}>

                <div className="input-field">
                    <input type="email" placeholder="Email" name="email"
                           value={ email }
                             onChange={ event => setEmail(event.target.value) }
                           />
                </div>

                <div className="input-field">
                    <input type="password" placeholder="Password" name="password"
                    value={ password }
                      onChange={ event => setPassword(event.target.value) }
                    />
                </div>
                <div className="row text-center">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Login
                    </button>

                </div>
                <div className="row text-center">
                    <Link to={'/registration'}>Register Here</Link>
                </div>

            </form>
        </div>
    );

};

export default LoginForm;

