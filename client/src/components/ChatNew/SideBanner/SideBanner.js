import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import "./SideBanner.css";

function SideBanner() {
    return (
        <div>
            <div className="row mt-3 ml-3">
                <div> 
                    <Image
                        src="https://avatars.githubusercontent.com/u/26777048?v=4"
                        style={{ width: "45px", height: "45px" }}
                        roundedCircle
                    />
                </div>
                <div className='ml-3 mt-2'>
                    <h4>Starboy</h4>
                </div>
            </div>
        </div>
    );
}

export default SideBanner;
