import React from 'react';
import {
    Navbar,
    NavbarBrand,
    } from 'reactstrap';
    

export default class Header extends React.Component {
      render() {
        return (
          <div>
              <Navbar light expand="md">
                  <NavbarBrand href="#"><h5>Madical Record in BlockChain System</h5></NavbarBrand>
              </Navbar>
          </div>
        );
      }
  }