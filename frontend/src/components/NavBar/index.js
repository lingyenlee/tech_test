import React from "react";
import { NavLink } from "react-router-dom";
import myTaxiLogo from "../../assets/mytaxi_logo.png"
import car2goLogo from "../../assets/car2go_logo.svg"
import "./navBar.css"

//reusable component, appear in all components except <Landing Page /> component 
//in app.js
export const NavBar = () => {
    let content = (
        <div data-test="navBar" className="navBar">
            <div className="row">
                <div className="navLogoContainer">
                    <div className="navLogo">
                        <NavLink to="/mytaxi" activeClassName="active" >
                            <img data-test="logoIMG" src={myTaxiLogo} alt="Logo of myTaxi" />
                        </NavLink>
                    </div>
                    <div className="navLogo">
                        <NavLink to="/car2go">
                            <img data-test="logoIMG" src={car2goLogo} alt="Logo of car2go" />
                        </NavLink>
                    </div>
                </div>
                <div className="homeLogo">
                    <NavLink exact to="/" >
                        <i data-test="logoIMG" className="material-icons homeLink">
                            home
                    </i>
                    </NavLink>
                </div>
            </div>
        </div>
    )
    return content
}
