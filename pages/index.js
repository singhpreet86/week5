import React, {Component} from 'react';
import Link from 'next/link'
import Router from 'next/router'
import styles from '../styles/Home.module.css'

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirect:false,
            status: false
        };
        this.logOut =this.logOut.bind(this);
    }

    logOut(){
        localStorage.setItem('status',false);
        this.setState({redirect:true});
        window.location.href = "/login";
    }

    logIn(){
        window.location.href = "/login";
    }

    componentDidMount() {
        let isLoggedIn = localStorage.getItem('status');
        this.setState({status: isLoggedIn})
    }

    render(){

    let {redirect}= this.state;
            if(redirect) return <Redirect to={"/login"}/>;
            let {status} = this.state

        return(
          <div className={styles.container}>
                              <span className="col-md-6">
                                 <Link href="forecast">
                                                                <a>Forecast</a>
                                                              </Link>
                             </span>
                             <span className="col-md-6">
                             { status == "true" || status == true?
                                  <button className="btn waves-effect waves-light" onClick={this.logOut} type="submit" name="action"> Log out </button>
                                  :
                                  <button className="btn waves-effect waves-light" onClick={this.logIn} type="submit" name="action"> Log in </button>
                                  }
                             </span>
                               <span className="col-md-6">
                                                              <Link href="registration">
                                                                                             <a>Register</a>
                                                                                           </Link>
                                                          </span>
                       </div>

        )
    }
}
