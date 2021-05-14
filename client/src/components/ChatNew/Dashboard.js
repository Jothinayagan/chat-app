import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import NavBar from "../NavBar/NavBar";
import ChatHistory from "./ChatHistory/ChatHistory";
import InputArea from "./InputArea";
import SideBanner from "./SideBanner/SideBanner";
import "./Chat.css";
import MainBanner from "./MainBanner/MainBanner";
import MessageArea from "./MessageArea/MessageArea";

function Dashboard() {
    return (
        <div>
            <NavBar />
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <SideBanner />
                        <hr />
                        <ChatHistory />
                    </Col>
                    <Col xs={12} md={8}>
                        <MainBanner />
                        <hr />
                        <MessageArea />
                        <InputArea />
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
