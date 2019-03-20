import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export class CarItem extends Component {
    static propTyles = {
        car: PropTypes.object.isRequired
    };

    componentDidMount() {}
    render() {
        const { title, excerpt } = this.props.car;
        return (
            <div>
                <h2>{title.rendered}</h2>
                <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
            </div>
        );
    }
}

export default CarItem;
