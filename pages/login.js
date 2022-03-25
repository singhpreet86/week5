import React, {Component} from 'react';
import Link from 'next/link'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            redirect: false,
            errorMsg: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

       componentDidMount() {
            let isLoggedIn = localStorage.getItem('status');
            if (isLoggedIn == true || isLoggedIn == "true"){
                window.location.href = "/";
            }
        }

    handleSubmit(e) {
        if (typeof window !== 'undefined'){
        let username = localStorage.getItem('email');
        let isLoggedIn = localStorage.getItem('status');
        let password = localStorage.getItem('password');
        }
        if ((username == e.target.email.value) && (password == e.target.password.value)) {
            localStorage.setItem('status', true);
            this.setState({redirect: true});
            this.setState({errorMsg: 'Successfully Logged In'});
            window.location.href = "/";
        } else {
            this.setState({errorMsg: 'Invalid Username or Password'});
        }
        e.preventDefault();

    }

    render() {

        return (
            <div className="col s12">
                <div><h4 className="center-align">Login Here</h4></div>
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
                        <button className="btn waves-effect waves-light" type="submit" name="action">Login
                        </button>

                    </div>
                    <div className="row text-center">
                        <Link href="registration">
                                  <a>Register Here</a>
                                </Link>
                    </div>

                </form>
            </div>
        );
    }
}



