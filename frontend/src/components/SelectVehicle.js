import React from "react";


//Level 1 child components of both myTaxiContainer and car2goContainer components
//reusable component

export const SelectVehicle = (props) => {
    let content = (
        <div>
            <label className="label" htmlFor={props.title}>
                {props.title}
            </label>
            <select
                onChange={props.onChangeSelect}
            >
                <option value=""> {props.placeholder}</option>
                {props.options.map((item) =>
                    <option
                        key={item}
                        value={item}
                    >{item}</option>)}
            </select>
        </div>
    )
    return content
}