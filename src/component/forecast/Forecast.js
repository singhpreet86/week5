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


                {JSON.stringify(items.weather)}
                {JSON.stringify(items.main)}
                {JSON.stringify(items.wind)}
                {JSON.stringify(items.clouds)}

            </div>
        )
}

export default Forecast;
