import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

export class CarItem extends Component {
    state = {
        imageUrl: "",
        author: "",
        isLoaded: false
    };

    static propTyles = {
        car: PropTypes.object.isRequired
    };

    componentDidMount() {
        const { featured_media, author } = this.props.car;
        const getImageUrl = axios.get(`/wp-json/wp/v2/media/${featured_media}`);
        const getAuthor = axios.get(`/wp-json/wp/v2/users/${author}`);

        Promise.all([getImageUrl, getAuthor]).then(res => {
            this.setState({
                imageUrl: res[0].data.media_details.sizes.full.source_url,
                author: res[1].data.name,
                isLoaded: true
            });
        });
    }

    render() {
        const { id, title, excerpt } = this.props.car;
        const { author, imageUrl, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div className="post">
                    <h2>{title.rendered}</h2>
                    <small>
                        Car reviewed by <strong>{author}</strong>
                    </small>
                    <div>
                        <img src={imageUrl} alt={title.rendered} />
                    </div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: excerpt.rendered
                        }}
                    />
                    <Link to={`/car/${id}`}>Read More...</Link>
                </div>
            );
        }
        return <h3>Loading car...</h3>;
    }
}

export default CarItem;
