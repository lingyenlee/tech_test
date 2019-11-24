import React from 'react';
import "./car2go.css";

//Level 1 child component of Car2GoContainer parent component
export const Car2GoCard = (props) => {
    // console.log(props)
    let content = (
        <div className="car2GoData">

            {
                props.vehicles.map(vehicle =>
                    <div className="car2GoCardBody" key={vehicle.id}>
                        <div className="car2GoCardText">
                            <p>Car Id</p>
                            <span>{vehicle.id}</span>

                            <p>License Plate</p>
                            <span>{vehicle.name}</span>

                            <p>Location</p>
                            <span>{vehicle.address}</span>

                            <p>Car interior</p>
                            <span> {vehicle.interior === "GOOD"
                                ? <i className="material-icons">thumb_up</i>
                                : <i className="material-icons">thumb_down</i>}
                            </span>

                            <p>Car exterior</p>
                            <span>{vehicle.exterior === "GOOD"
                                ? <i className="material-icons">thumb_up</i>
                                : <i className="material-icons">thumb_down</i>}
                            </span>
                            <p>Engine Type</p>
                            <span>{vehicle.engineType}</span>

                            <p>Fuel</p>
                            <span>{vehicle.fuel}</span>

                            <p>Vin</p>
                            <span>{vehicle.vin}</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
    return content
}
