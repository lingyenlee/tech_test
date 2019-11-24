import React from "react";
import { NavLink } from "react-router-dom";
import "./landingPage.css"
import myTaxiLogo from "../../assets/mytaxi_logo.png"
import car2goLogo from "../../assets/car2go_logo.svg"

export const LandingPage = () => {

    return (
        <div data-test="landingPageComponent" className="landingPageContainer">
            <div className="landingText">
                <span>Find your ride</span>
            </div>
            <div className="landingRow">
                <div className="landingLogoContainer">
                    <NavLink to="/mytaxi" >
                        <img data-test="logoIMG" src={myTaxiLogo} alt="Logo of myTaxi" />
                    </NavLink>
                </div>
                <div className="landingLogoContainer">
                    <NavLink to="/car2go" >
                        <img data-test="logoIMG" src={car2goLogo} alt="Logo of car2go" />
                    </NavLink>
                </div>
            </div>
        </div>

    )
}
