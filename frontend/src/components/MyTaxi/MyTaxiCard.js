import React from "react";
import redTaxi from "../../assets/redCar.png"
import greenTaxi from "../../assets/greenCar.png"

export const MyTaxiCard = (props) => {

    let content = (
        <div data-test="" className="myTaxiData">
            {
                props.vehicles.map(vehicle =>
                    <div className="myTaxiCardBody" key={vehicle.id} >
                        <div className="myTaxiCardText" >
                            <p>{vehicle.state === "ACTIVE" ? "ACTIVE" : "INACTIVE"}</p>
                            <p className="carID">Taxi Id</p>
                            <span>{vehicle.id}</span>
                            <div className="myTaxiStateBox" >
                                {/* show green color car if car state is ACTIVE */}
                                {vehicle.state === "ACTIVE" && <img src={greenTaxi} alt="greencar" />}
                                {/* show red color car if car state is INACTIVE*/}
                                {vehicle.state === "INACTIVE" && <img src={redTaxi} alt="redcar" />}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
    return content
}