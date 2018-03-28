import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="/">
                                Bible Train TRain
                            </a>
                            <div className="navbar-burger">
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                        {/* <div className="navbar-menu">
                            <div className="navbar-start">
                                <div className="navbar-item">adsf</div>
                            </div>
                        </div> */}
                    </nav>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
