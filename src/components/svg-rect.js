import React from "react"

const SvgRect = () =>{
    return (
        <div className="divSvg">
            <svg width="300" height="100">
                <rect height="99" width="299" y="1" x="1" stroke-width="1.5" stroke="#0c0c" fill="transparent"/>   
                <polyline points="5,5 75,95 150,5 225,95 295,5" stroke="#000" fill="transparent" stroke-width="1.5" stroke-dasharray="4 1 2 3"/>
            </svg>
        </div>
    )
}

export default SvgRect;
