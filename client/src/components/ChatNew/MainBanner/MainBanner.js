import React from "react";
import { Image } from "react-bootstrap";

// import "./SideBanner.css";

function MainBanner() {
    return (
        <div>
            <div className="row ml-3 mt-3">
                <div>
                    <Image
                        src="https://avatars.githubusercontent.com/u/26777048?v=4"
                        style={{ width: "45px", height: "45px" }}
                        roundedCircle
                    />
                </div>
                <div className="ml-3 mt-2">
                    <h4>Jothinayagan</h4>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;
