import {connect} from 'react-redux';
import {SignIn} from './SignIn';
import {signinThunk} from '../../redux/authentication-thunk';
import {SignInDetails} from "./signin-details";

function mapStateToProps(state: any) {
    return {
        error: state.authenticationError
    };
}

function mapDispatchToProps(dispatcher: any, otherProps: any) {
    return {
        onSignin: (details: SignInDetails) => dispatcher(signinThunk(details, otherProps.history))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
