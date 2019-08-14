import {register, registerFailure, registerSuccess, signIn, signInFailure, signInSuccess} from './authentication-slice';
import axios from 'axios';
import {Dispatch} from "redux";
import {SignInDetails} from '../pages/signin/signin-details';
import {routes} from "../helpers/routes";

export function signinThunk(userDetails: SignInDetails, history: any) {
    return async function (dispatch: Dispatch) {
        dispatch(signIn);

        try {
            const resp = await axios.post('http://localhost:4000/users/authenticate', {...userDetails});
            dispatch(signInSuccess(resp.data));
            localStorage.setItem('user', resp.data);
            history.push(routes.welcome)
        } catch (err) {
            const msg = err && err.response && err.response.data ? err.response.data.message : 'Server failure';
            dispatch(signInFailure(msg));
        }
    };
}

export function registrationThunk(userDetails: SignInDetails, history: any) {
    return async function (dispatch: Dispatch) {
        dispatch(register);

        try {
            await axios.post('http://localhost:4000/users/register', {...userDetails});
            dispatch(registerSuccess('success'));
            history.push(routes.signIn);
        } catch (err) {
            const msg = err && err.response && err.response.data ? err.response.data.message : 'Server failure';
            dispatch(registerFailure(msg));
        }
    };
}
