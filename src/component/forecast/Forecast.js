import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default class Forecast extends Component{

     constructor(props) {
            super(props);
            this.state = {
                city: '',
                items: [],
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(e) {
            this.setState({[e.target.name]: e.target.value});
        }

           componentDidMount() {
                let status = localStorage.getItem('status');
                             if (status == false || status == "false"){
                                 window.location.href = "/dashboard";
                             }
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
      let listItems;

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

        {
            items.weather?
            <div>
            <h1> WEATHER </h1>

            <table>
                {items.weather.map((item) => (
                    <tr >
                        {Object.keys(item).map((key) => (
                          <th>{key}</th>
                        ))}
                     </tr>
              ))}

              {items.weather.map((item) => (
                <tr >
                    {Object.values(item).map((val) => (
                    <td>{val}</td>
                ))}
                </tr>
              ))}
            </table>
            </div>
            :
            ""
         }
        {
            items.main?
            <div>
            <h1> MAIN </h1>
            <table>
                {[items.main].map((item) => (
                    <tr >
                        {Object.keys(item).map((key) => (
                          <th>{key}</th>
                        ))}
                     </tr>
              ))}

              {[items.main].map((item) => (
                <tr >
                    {Object.values(item).map((val) => (
                    <td>{val}</td>
                ))}
                </tr>
              ))}
            </table>
            </div>
            :
            ""
         }

         {
                     items.wind?
                     <div>
                     <h1> WIND </h1>
                     <table>
                         {[items.wind].map((item) => (
                             <tr >
                                 {Object.keys(item).map((key) => (
                                   <th>{key}</th>
                                 ))}
                              </tr>
                       ))}

                       {[items.wind].map((item) => (
                         <tr >
                             {Object.values(item).map((val) => (
                             <td>{val}</td>
                         ))}
                         </tr>
                       ))}
                     </table>
                     </div>
                     :
                     ""
                  }

{
                     items.clouds?
                     <div>
                     <h1> CLOUDS </h1>
                     <table>
                         {[items.clouds].map((item) => (
                             <tr >
                                 {Object.keys(item).map((key) => (
                                   <th>{key}</th>
                                 ))}
                              </tr>
                       ))}

                       {[items.clouds].map((item) => (
                         <tr >
                             {Object.values(item).map((val) => (
                             <td>{val}</td>
                         ))}
                         </tr>
                       ))}
                     </table>
                     </div>
                     :
                     ""
                  }





            </div>
        )
    }
}
