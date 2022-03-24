import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

const Forecast = () => {

       const [city, setCity] = useState('');
       const [items, setItems] = useState('');
       const handleSubmit = e => {
       fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8d1d55987e65fd7428680f71ad1ecb43")
              .then(res => res.json())
              .then(
                (result) => {
                  setItems(
                    result
                  );
                }
             )

        e.preventDefault();
        }

        useEffect(() => {
             let status = localStorage.getItem('status');
             if (status == false || status == "false"){
                 window.location.href = "/dashboard";
             }
        });

        return(
            <div>
                <h4>Forecast Page</h4>

                <form className="col s12" onSubmit={handleSubmit}>
                                    <div className="input-field">
                                        <input type="text" placeholder="Enter city" name="city" value={ city }
                                             onChange={ event => setCity(event.target.value) }
                                              />
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

export default Forecast;
