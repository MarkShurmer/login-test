import {configureStore} from 'redux-starter-kit'
import {authReducer} from './authentication-slice';

const store = configureStore({
    reducer: authReducer
});

// if (process.env.NODE_ENV !== 'production' && module.hot) {
//     module.hot.accept('./authentication-slice', () => store.replaceReducer(authReducer))
// }

export default store;


