import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cars from "./components/Cars";
import CarSingle from "./components/CarSingle";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Route exact path="/" component={Cars} />
                    <Route exact path="/car/:id" component={CarSingle} />
                </Fragment>
            </Router>
        );
    }
}

export default App;
