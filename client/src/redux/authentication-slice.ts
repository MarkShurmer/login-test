import {createSlice} from 'redux-starter-kit';

const initialState = {
    authenticationToken: undefined,
    authenticationError: '',
};

const {actions, reducer: authReducer} = createSlice({
    slice: 'authentication',
    initialState: initialState,
    reducers: {
        register: (state, action) => {
            state.authenticationError = '';
        },
        registerSuccess: (state, action) => {
            state.authenticationError = '';
        },
        registerFailure: (state, action) => {
            state.authenticationError = action.payload;
        },
        signIn: (state, action) => {
            state.authenticationToken = undefined;
            state.authenticationError = '';
        },
        signInSuccess: (state, action) => {
            state.authenticationToken = action.payload;
            state.authenticationError = '';
        },
        signInFailure: (state, action) => {
            state.authenticationError = action.payload;
        },
        signOut: (state, action) => {
            state.authenticationToken = undefined;
            state.authenticationError = '';
        },

    }
});

const {register, registerSuccess, registerFailure, signIn, signInSuccess, signInFailure, signOut} = actions;

export {authReducer, register, registerSuccess, registerFailure, signIn, signInSuccess, signInFailure, signOut};
