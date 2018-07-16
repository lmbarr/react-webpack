import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <header className="navbar navbar-bright navbar-fixed-top" role="banner">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="/" className="navbar-brand">Home</a>
                    </div>

                    <nav className="collapse navbar-collapse" role="navigation">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="/habits">Habits</a>
                            </li>
                            <li>
                                <a href="/Reports">Reports</a>
                            </li>
                        </ul>
                        <ul className="nav navbar-right navbar-nav">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="glyphicon glyphicon-search"></i></a>
                                <ul className="dropdown-menu">
                                    <form className="form-inline">
                                        <button type="submit" className="btn btn-default pull-right"><i className="glyphicon glyphicon-search"></i></button>
                                        <input type="text" className="form-control pull-left" placeholder="Search"/>
                                    </form>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                </div>
            </header>
        );
    }
}



