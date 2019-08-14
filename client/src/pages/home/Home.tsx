import React from 'react';
import {Redirect} from "react-router";
import {routes} from "../../helpers/routes";

interface PropTypes {

}

const Home = (props: PropTypes) => {

    console.log('----- ', localStorage.getItem('user'))

    return (
        <div>
            <Redirect to={localStorage.getItem('user') ? routes.welcome : routes.signIn}/>
        </div>
    );
};

export default Home;
