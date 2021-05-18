import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import ChatHistory from "../ChatHistory/ChatHistory";
import InputArea from "../InputArea";
import SideBanner from "../SideBanner/SideBanner";
import MainBanner from "../MainBanner/MainBanner";
import MessageArea from "../MessageArea/MessageArea";
import "../Chat.css";
import "./Dashboard.css";

function Dashboard() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <SideBanner />
                        <hr />
                        <div
                            className="d-flex align-items-start flex-column"
                            style={{
                                height: "460px",
                                overflow: "scroll",
                                // "-ms-overflow-style": "none",
                                // "scrollbar-width": "none",
                            }}>
                            <ChatHistory />
                        </div>
                    </Col>
                    <Col xs={12} md={8}>
                        <MainBanner />
                        <hr />
                        <div
                            className="d-flex align-items-start flex-column"
                            style={{
                                height: "420px",
                                width: "730px",
                                backgroundColor: "lightgray",
                            }}>
                            <MessageArea />
                        </div>
                        <div>
                            <InputArea />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Dashboard;

// {<div className="container">
// <div class="row-md-12">
//     <div className="col-8">
//         Chat heads
//     </div>
//     <div className="col-4">
//         Message Area
//         <InputArea />
//     </div>
// </div>
// </div>}
