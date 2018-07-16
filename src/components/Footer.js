import React from 'react';
import styles from '../styles/Footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <ul className="list-inline">
                                <li className=""><i className="fa fa-facebook fa-lg"></i></li>
                                <li className=""><i className="fa fa-twitter fa-lg"></i></li>
                                <li className=""><i className="fa fa-google-plus fa-lg"></i></li>
                                <li className=""><i className="fa fa-pinterest fa-lg"></i></li>
                            </ul>

                        </div>
                        <div className={"col-sm-10"}>

                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}




