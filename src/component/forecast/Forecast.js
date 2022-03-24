import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default class Forecast extends Component{

     constructor(props) {
            super(props);
            this.state = {
                city: '',
                items: []
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(e) {
            this.setState({[e.target.name]: e.target.value});
        }

        handleSubmit(e) {
        let city =  e.target.city.value

        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + this.state.city + "&appid=8d1d55987e65fd7428680f71ad1ecb43")
              .then(res => res.json())
              .then(
                (result) => {
                  this.setState({
                    items: result
                  });
                }
             )

        e.preventDefault();
        }



    render(){
      const { items } = this.state;
        return(
            <div>
                <h4>Forecast Page</h4>

                <form className="col s12" onSubmit={this.handleSubmit}>
                                    <div className="input-field">
                                        <input type="text" placeholder="Enter city" name="city" value={this.state.city}
                                               onChange={this.handleChange}/>
                                    </div>

                                    <div className="row text-center">
                                        <button className="btn waves-effect waves-light" type="submit" name="action">Forecast
                                        </button>
                                    </div>
                </form>


                {JSON.stringify(items.weather)}
                {JSON.stringify(items.main)}
                {JSON.stringify(items.wind)}
                {JSON.stringify(items.clouds)}

            </div>
        )
    }
}
