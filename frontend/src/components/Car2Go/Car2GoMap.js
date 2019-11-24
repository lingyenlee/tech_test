import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import car2goIcon from "../../assets/car2goIcon.png"
import carLicenseIcon from "../../assets/license-plate.svg"
import "./car2go.css"

//Level 1 child component of Car2GoContainer parent component
export const Car2GoMap = (props) => {

    //set initial and updated state of selected car in popup
    const [selectedCar, setSelectedCar] = useState(null)

    //set initial state of map
    const [viewport, setViewport] = useState({
        latitude: 53.5529,
        longitude: 10.0066,
        zoom: 13,
        width: "75vw",
        height: "100vh"
    })

    let content = (
        <div className="mapContainer">
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoieGthMTMzIiwiYSI6ImNqdnRqb3RnNDBjMDE0M3BoYmxjMHdkbjgifQ.-oSCRzQIEqwToXKKx01syA"
                mapStyle="mapbox://styles/xka133/cjvtmjxon14j31cq516z44i5v"
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}>
                {
                    props.vehicles.map(vehicle =>
                        <Marker key={vehicle.id}
                            latitude={vehicle.coordinates[1]}
                            longitude={vehicle.coordinates[0]} >
                            <button className="markerBtn" onClick={e => {
                                e.preventDefault();
                                setSelectedCar(vehicle);
                            }}>
                                <div className="car2goIcon">
                                    <img src={car2goIcon} alt="car2go-icon" />
                                </div>
                            </button>
                        </Marker>
                    )
                }
                {selectedCar ? (
                    <Popup
                        latitude={selectedCar.coordinates[1]}
                        longitude={selectedCar.coordinates[0]}
                        onClose={() => {
                            setSelectedCar(null)
                        }}
                    >
                        <div className="popUpText">
                            <div className="carLocationIcon">
                                <i className="material-icons">
                                    location_on
                                </i>
                                <p>{selectedCar.address}</p>
                            </div>
                            <p className="carLicenseIcon">
                                <img src={carLicenseIcon} alt="license plate icon" /></p>
                            <p>{selectedCar.name}</p>

                            <p>Car interior</p>
                            <p> {selectedCar.interior === "GOOD"
                                ? <i className="material-icons">thumb_up</i>
                                : <i className="material-icons">thumb_down</i>}
                            </p>

                            <p>Car exterior</p>
                            <p>{selectedCar.exterior === "GOOD"
                                ? <i className="material-icons">thumb_up</i>
                                : <i className="material-icons">thumb_down</i>}
                            </p>
                        </div>
                    </Popup>
                ) : null}
            </ReactMapGL>
        </div>
    )
    return content
}