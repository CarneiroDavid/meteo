export default function WeatherDisplay({dict}) {
    // const dict = {
    //     "coord": {
    //         "lon": 2.3488,
    //         "lat": 48.8534
    //     },
    //     "weather": [{
    //         "id": 800,
    //         "main": "Clear",
    //         "description": "ciel dégagé",
    //         "icon": "01d"
    //     }],
    //     "base": "stations",
    //     "main": {
    //         "temp": 291.93,
    //         "feels_like": 291.01,
    //         "temp_min": 290.99,
    //         "temp_max": 293.19,
    //         "pressure": 1023,
    //         "humidity": 44
    //     },
    //     "visibility": 10000,
    //     "wind": {
    //         "speed": 7.2,
    //         "deg": 50
    //     },
    //     "clouds": {
    //         "all": 0
    //     },
    //     "dt": 1684932202,
    //     "sys": {
    //         "type": 2,
    //         "id": 2041230,
    //         "country": "FR",
    //         "sunrise": 1684900740,
    //         "sunset": 1684956968
    //     },
    //     "timezone": 7200,
    //     "id": 2988507,
    //     "name": "Paris",
    //     "cod": 200
    // }
    let dateNow = new Date();
    console.log(dict.weather[0].icon)
    if (dict != null || dict != undefined) {
        return (
            <div>
                <h1 className="mb-4 mt-4 text-center">{dict.name}, {dict.sys.country}</h1>
                <div className="bloc-un">
                    <div className="card flex-row type">
                        <img className="card-img-left example-card-img-responsive image-meteo" src={process.env.PUBLIC_URL + '/icons/' + dict.weather[0].icon + '.png'} />

                        <div className="card-body m-auto ms-5">
                            <div>
                                <h3 className="card-subtitle mb-2 text-muted">{dateNow.toLocaleDateString()}</h3>
                            </div>
                            <div>
                                <h3 className="card-subtitle mb-2 text-muted">{dateNow.getHours() + ':' + dateNow.getMinutes()}</h3>
                            </div>
                            <div>
                                <h3 className="card-subtitle mb-2 text-muted">{dict.main.temp}°C</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bloc-un">
                    <div className="card mt-4 bloc-info">
                        <div className="card-body">
                            <div>
                                <h5 className="card-text">Temps :</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{dict.weather[0].description}</h6>
                            </div>
                            <div>
                                <h5 className="card-text">Vitesse du vent :</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{dict.wind.speed} Km/h</h6>
                            </div>
                            <div>
                                <h5 className="card-text">Humidité :</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{dict.main.humidity} %</h6>
                            </div>
                        </div>
                        <div className="card-body">
                            <div>
                                <h5 className="card-text">Température maximale :</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{dict.main.temp_max}°C</h6>
                            </div>
                            <div>
                                <h5 className="card-text">Température minimale :</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{dict.main.temp_min}°C</h6>
                            </div>
                            <div>
                                <h5 className="card-text">Température ressentie :</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{dict.main.feels_like}°C</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}