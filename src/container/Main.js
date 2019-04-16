import React, { Component } from 'react';
import Header from "../component/Header";
import MyTimeline from "../component/MyTimeline";
import AccountInfoCard from "../component/AccountInfoCard";
import { Container, Row, Col } from 'reactstrap';
import StickyBox from "react-sticky-box";
import { Card, CardBody } from 'reactstrap';
import { FormGroup, Label } from 'reactstrap';
import {Navbar, NavbarBrand} from 'reactstrap';
import { CustomInput } from 'reactstrap';
import groundXLogo from '../images/groundXLogo.png';

class Main extends Component{
    render(){
        return (
            <div>
                <Container style={{marginTop: 1 + '%'}}>
                <Row>
                    <Col xs="3">
                        <Navbar light expand="md">
                            <NavbarBrand href="#"><img src={groundXLogo} style={{ width: 60 + '%'}} alt="groundXLogo"/></NavbarBrand>
                        </Navbar>
                    </Col>
                    <Col>
                    <Header/>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col xs="3">
                    <StickyBox offsetTop={20}>
                    <div>
                        <Card>
                            <CardBody>
                            <FormGroup>
                            <Label for="exampleCheckbox"><h5>Filters</h5></Label>
                            <div>
                                <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="진료" checked/>
                                <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="처방" checked/>
                                <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="수술" checked/>
                            </div>
                            </FormGroup>
                            </CardBody>
                        </Card>
                    </div>
                    </StickyBox>
                    <div style={{height: 5 +'%'}}>

                    </div>
                    <StickyBox offsetTop={210} offsetBottom={10}>
                    <AccountInfoCard LoginedAccount="0x1234567890987654321012345678901234567890"/>
                    </StickyBox>
                    </Col>
                    <Col>
                    <MyTimeline/>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default Main;