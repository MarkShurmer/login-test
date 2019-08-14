import React, {ChangeEvent, FormEvent, useState} from 'react';
import './SignIn.css';
import {SignInDetails} from "./signin-details";
import {Link} from "react-router-dom";
import {routes} from "../../helpers/routes";

interface PropTypes {
    onSignin(signinDetails: SignInDetails): void,
    error: string
}


const SignIn = (props: PropTypes) => {
    const {onSignin, error} = props;

    const [signInDetails, setSignInDetails] = useState<SignInDetails>({username: "", password: ""});
    const [isUpdated, setIsUpdated] = useState<boolean>(false);

    const changeUserName = (e: ChangeEvent<HTMLInputElement>) => {
        setSignInDetails({...signInDetails, username: e.target.value});
        setIsUpdated(true);
    };

    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setSignInDetails({...signInDetails, password: e.target.value});
        setIsUpdated(true);
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsUpdated(false);
        onSignin(signInDetails);
    };

    return (
        <div className="">
            <h2>Sign in</h2>
            <form className="signin-form" onSubmit={onSubmit}>
                <label className="username-label">User name</label>
                <input className="username-entry" value={signInDetails.username} onChange={changeUserName}/>
                <label className="password-label">Password</label>
                <input className="password-entry" value={signInDetails.password} onChange={changePassword}/>
                <button className="submission">Sign in</button>
                {error.length > 0 && !isUpdated ? <div className="error">{error}</div> : null}
                <p className="reg-message">If you have no registration set up , please <Link to={routes.register}>register</Link></p>
            </form>
        </div>
    );
};


export {SignIn};
