import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import mytaxiIcon from "../../assets/myTaxi.jpg"
import "./myTaxi.css"

export const MyTaxiMap = (props) => {

    const [selectedCar, setSelectedCar] = useState(null)

    //set initial state of map
    const [viewport, setViewport] = useState({
        latitude: 53.5529,
        longitude: 10.0066,
        zoom: 13,
        width: "80vw",
        height: "80vh"
    })

    //function to define green border for active car marker in map
    const activeCar = (
        (<div className="greenCar">
            <img src={mytaxiIcon} alt="taxiIicon" />
        </div>)
    )

    // function to define red border for inactive car marker in map
    const inactiveCar = (<div className="redCar">
        <img src={mytaxiIcon} alt="taxiIcon" />
    </div>)

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
                            latitude={vehicle.coordinate.latitude}
                            longitude={vehicle.coordinate.longitude}>
                            {/* show color border according to state of car */}
                            <button className="markerBtn" onClick={e => {
                                e.preventDefault();
                                setSelectedCar(vehicle);
                            }}>
                                {vehicle.state === "ACTIVE" ? activeCar : inactiveCar}
                            </button>
                        </Marker>
                    )
                }
                {selectedCar ? (
                    <Popup
                        latitude={selectedCar.coordinate.latitude}
                        longitude={selectedCar.coordinate.longitude}
                        onClose={() => {
                            setSelectedCar(null)
                        }}
                    >
                        <div className="popUpText">
                            <p>Taxi ID: {selectedCar.id}</p>
                            <p>{selectedCar.state === "ACTIVE" ? "ACTIVE" : "INACTIVE"}</p>
                        </div>
                    </Popup>
                ) : null}
            </ReactMapGL>
        </div>
    )
    return content;
}