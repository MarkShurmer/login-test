import React from 'react';
// @ts-ignore
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/configure-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Welcome from "./pages/welcome/Welcome";
import SignInContainer from "./pages/signin";
import {RegisterContainer} from "./pages/register";
import {routes} from "./helpers/routes";
import Home from "./pages/home/Home";


function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>test</h1>
                </header>
                <Router>
                    <Route component={Home} exact path={routes.home}/>
                    <Route component={Welcome} exact path={routes.welcome}/>
                    <Route component={SignInContainer} exact path={routes.signIn}/>
                    <Route component={RegisterContainer} exact path={routes.register}/>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
