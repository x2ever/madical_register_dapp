import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

import './App.css';

import Main from "./container/Main";




class App extends Component {
    render() {
        return (
            <div>
                <Main />
            </div>
        );
    }
}

export default App;