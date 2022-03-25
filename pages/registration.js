import React, {Component} from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        let status = true;
       if (this.state.email == '') {
            status = false;
            this.setState({errorMsg: "Email field is Empty"});
        }

        if (status) {

            localStorage.setItem('password', this.state.password);
            localStorage.setItem('email', this.state.email);

            this.setState({errorMsg: "User added Successfully"});

        }
        e.preventDefault();

    }

    render() {
        return (

            <div className="col s12">
                <div><h4 className="center-align">Register Here</h4></div>
                <div className="text-center"><p>{this.state.errorMsg}</p></div>
                <form className="col s12" onSubmit={this.handleSubmit}>

                    <div className="input-field">
                        <input type="email" placeholder="Email" name="email" value={this.state.email}
                               onChange={this.handleChange}/>
                    </div>


                    <div className="input-field">
                        <input type="password" placeholder="Password" name="password" value={this.state.password}
                               onChange={this.handleChange}/>
                    </div>


                    <div className="row text-center">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        </button>
                    </div>
                    <div className="row text-center">
                    </div>

                </form>
            </div>
        );
    }
}



