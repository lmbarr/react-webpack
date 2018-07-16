import React from "react";

export default class Buttons extends React.Component {
    render() {
        return (
            <div className="row">
                    <div className="col-sm-1">
                        <a href="/habits/addhabit" className="btn btn-default">Add habit</a>
                    </div>
                    <div className="col-sm-1">
                        <a href="/reports" className="btn btn-default">Reports</a>
                    </div>
                <div className={"col-sm-11"}></div>
            </div>
        );
    }
}

