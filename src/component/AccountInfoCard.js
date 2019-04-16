import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardBody } from 'reactstrap';
import { Container } from 'reactstrap';

class AccountInfoCard extends Component{
    render(){
        return (
            <div>
                <Card>
                    <Container>
                        <CardImg top width="50%" src={"https://api.adorable.io/avatars/256/" + this.props.LoginedAccount} style={{marginTop: 5 + '%'}}alt="Card image cap"/>
                    </Container>
                    <CardBody>
                    <CardTitle><h5 style={{fontSize: 0.8 + 'em'}}>Current Account:</h5></CardTitle>
                    <CardTitle><h5 style={{fontSize: 0.58 + 'em'}}>{this.props.LoginedAccount}</h5></CardTitle>
                    <Button outline color="danger" size="sm" block>Log out</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default AccountInfoCard;