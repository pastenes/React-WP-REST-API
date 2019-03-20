import React, { Component } from "react";
import CarItem from "./CarItem";
import axios from "axios";

export class Cars extends Component {
    state = {
        cars: [],
        isLoaded: false
    };

    componentDidMount() {
        axios
            .get("/wp-json/wp/v2/cars")
            .then(res =>
                this.setState({
                    cars: res.data,
                    isLoaded: true
                })
            )
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state);
        const { cars, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div>
                    {cars.map(car => (
                        <CarItem key={car.id} car={car} />
                    ))}
                </div>
            );
        }

        return <h3>Loading...</h3>;
    }
}

export default Cars;
