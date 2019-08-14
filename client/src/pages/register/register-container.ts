import {connect} from 'react-redux';
import {RegistrationDetails} from "./registration-details";
import Register from "./Register";
import {registrationThunk} from "../../redux/authentication-thunk";

function mapStateToProps(state: any) {
    return {
        error: state.authenticationError
    };
}

function mapDispatchToProps(dispatcher: any, otherProps: any) {
    return {
        onRegister: (details: RegistrationDetails) => dispatcher(registrationThunk(details, otherProps.history))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
