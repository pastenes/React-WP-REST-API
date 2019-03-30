import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class CarSingle extends Component {
    state = {
        car: {},
        isLoaded: false
    };

    componentDidMount() {
        axios
            .get(`/wp-json/wp/v2/cars/${this.props.match.params.id}`)
            .then(res =>
                this.setState({
                    car: res.data,
                    isLoaded: true
                })
            )
            .catch(err => console.log(err));
    }
    render() {
        const { car, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div className="post">
                    <Link to="/">Go back</Link>
                    <hr />
                    <h2>{car.title.rendered}</h2>
                    <small>Make: {car.acf.make}</small>
                    <br />
                    <small>Model: {car.acf.model}</small>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: car.content.rendered
                        }}
                    />
                </div>
            );
        }
        return <h2>Loading...</h2>;
    }
}

export default CarSingle;
