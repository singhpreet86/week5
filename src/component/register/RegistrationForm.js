import React, {useState} from 'react';
import './RegistrationForm.css';
import { Link, useNavigate } from 'react-router-dom';
const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
            localStorage.setItem('password', this.state.password);
            localStorage.setItem('email', this.state.email);

            e.preventDefault();

    }

    return (
            <div className="col s12">
                <div><h4 className="center-align">Register Here</h4></div>
                <form className="col s12" onSubmit={handleSubmit}>

                    <div className="input-field">
                        <input type="email" placeholder="Email" name="email"  value={ email }
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
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        </button>
                    </div>
                    <div className="row text-center">
                        <Link to={'/login'}>Login</Link>
                    </div>

                </form>
            </div>
        );
}

export default RegistrationForm;


