import React, {ChangeEvent, FormEvent, useState} from 'react';
import './Register.css';
import {RegistrationDetails} from "./registration-details";

interface PropTypes {
    onRegister: (regDetails: RegistrationDetails) => {},
    error: string
}

const Register = (props: PropTypes) => {
    const {onRegister, error} = props;

    const [registrationDetails, setRegistrationDetails] = useState<RegistrationDetails>({
        username: '', firstName: '', lastName: '', password: ''
    });
    const [isUpdated, setIsUpdated] = useState<boolean>(false);

    const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
        setRegistrationDetails({...registrationDetails, firstName: e.target.value});
        setIsUpdated(true);
    };

    const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
        setRegistrationDetails({...registrationDetails, lastName: e.target.value});
        setIsUpdated(true);
    };

    const handleChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
        setRegistrationDetails({...registrationDetails, username: e.target.value});
        setIsUpdated(true);
    };

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setRegistrationDetails({...registrationDetails, password: e.target.value});
        setIsUpdated(true);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsUpdated(false);
        onRegister(registrationDetails);
    };

    return (
        <div>
            <h1>Register</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="first-name" className="item">First name</label>
                <input id="first-name" className="item" value={registrationDetails.firstName} onChange={handleChangeFirstName}/>

                <label htmlFor="last-name" className="item">Last name</label>
                <input id="last-name" className="item" value={registrationDetails.lastName} onChange={handleChangeLastName}/>

                <label htmlFor="username" className="item">User name</label>
                <input id="username" className="item" value={registrationDetails.username} onChange={handleChangeUserName}/>

                <label htmlFor="password" className="item">Password</label>
                <input id="password" className="item" value={registrationDetails.password} onChange={handleChangePassword}/>

                <button className="submit-button">Register</button>

                {error.length > 0 && !isUpdated ? <div className="error">{error}</div> : null}
            </form>
        </div>
    );
};


export default Register;
