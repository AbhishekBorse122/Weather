import React, { useEffect, useState } from "react";
function Weather() {
    const [btn, setBtn] = useState();
    const [search, setSearch] = useState();
    const [city, setCity] = useState();
    const [wind, setWind] = useState();

    const D = new Date().toLocaleTimeString();

    useEffect(() => {
        async function getWeather() {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=eddac9d96c713a5e1618eb7813b08267`);
            const response = await res.json();
            setCity(response.main);
            setWind(response.wind);
        }
        getWeather();
    })
    return (
        <>
            <div id='block' className='col-xxl-4 col-lg-4 col-xs-12 mt-3 '>
                <div id='heading'><span style={{ display: 'inline' }}>Weather</span></div>
                <div id='Input' className='mt-3'>
                    &nbsp;&nbsp;<input type="text" placeholder='Enter City' className='bg-dark' onChange={(event) => {
                        setBtn(event.target.value);
                    }} /> &nbsp; &nbsp;
                    <button onClick={() => { setSearch(btn) }} className='btn btn-dark' id='btn'>&nbsp;&nbsp;<i className="fas fa-search-plus"></i></button>
                </div>
                {!city || !wind ? <p>No Data Found</p> : (
                    <div id='weather' className='container mt-2'>
                        <div className='center'>
                            <h2>{search}</h2>
                            <h3>{city.temp}&#176;C &nbsp;&nbsp;<i className="fas fa-thermometer-three-quarters"></i></h3>
                        </div>
                        <div id='table'>
                            <table className="table" style={{ color: 'white' }} >
                                <thead>
                                    <tr>
                                        <th scope="col" colspan='2'><h4 style={{ fontWeight: 'bold' }}>Details</h4></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Min<h6>{city.temp_min}&#176;C&nbsp;&nbsp;<i className="fas fa-cloud-rain"></i></h6></td>
                                        <td>Max<h6>{city.temp_max}&#176;C&nbsp;&nbsp;<i className="fas fa-cloud-sun"></i></h6></td>
                                    </tr>
                                    <tr>
                                        <td>Reel Feel<h6>{city.feels_like}&nbsp;&nbsp;<i className="fas fa-sun"></i></h6></td>
                                        <td>Pressure<h6>{city.pressure}hPa &nbsp;&nbsp;<i className="fas fa-tachometer-alt"></i></h6></td>
                                    </tr>
                                    <tr>
                                        <td>Wind<h6>{wind.speed * 3.6}&nbsp;km/hr &nbsp;&nbsp;<i className="fas fa-wind"></i></h6></td>
                                        <td>Humidity<h6>{city.humidity}% &nbsp;&nbsp;<i class="fas fa-tint"></i></h6></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='center mt-3' id='last'>
                            {D}
                        </div>
                    </div>)}
            </div>
        </>
    )

}
export default Weather;

// openWeather API : https://openweathermap.org/api