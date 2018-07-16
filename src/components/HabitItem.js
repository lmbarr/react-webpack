import React from "react";
import styles from '../styles/HabitItem.css';

export default class Habit extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className={`row ${styles.habit}`}>
                <div className="col-md-2 col-sm-3">
                    <button onClick={this.props.handleClick} className="btn btn-default btn-lg" id={this.props.id}>
                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                    </button>
                </div>
                <div className="col-md-10 col-sm-9">
                    <h3><a href="/reports/">{this.props.name}</a></h3>
                    <div className="row">
                        <div className="col-xs-9">
                            <h4><span className="label label-default"></span></h4>
                            <h4><span className="label label-default"></span></h4>
                            <h4>
                                <small className="text-muted"></small>
                            </h4>
                            <h4>
                                <form className="" action="/habits/" method="post">
                                    <small className="text-muted">Daily quantity:</small>
                                    <input type="text" name="qty"/>
                                    <input type="submit" value="Submit"/>
                                </form>
                            </h4>
                            <h4>Total: xxx</h4>
                        </div>

                        <div className="col-xs-3">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


