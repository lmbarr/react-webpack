import React from "react";

export default class SocialNet extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col col-sm-12">

                    <h1>Follow Us</h1>
                    <div className="btn-group">
                        <a className="btn btn-twitter btn-lg" href="#"><i className="icon-twitter icon-large"></i> Twitter</a>
                        <a className="btn btn-facebook btn-lg" href="#"><i className="icon-facebook icon-large"></i> Facebook</a>
                        <a className="btn btn-google-plus btn-lg" href="#"><i className="icon-google-plus icon-large"></i> Google+</a>
                    </div>

                </div>
            </div>
        );
    }
}

