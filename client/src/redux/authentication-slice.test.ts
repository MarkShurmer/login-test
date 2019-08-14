import {
    authReducer,
    register,
    registerFailure,
    registerSuccess,
    signIn,
    signInFailure,
    signInSuccess, signOut
} from "./authentication-slice";

describe('Authentication slice', () => {
    it('should work for register', () => {
        const result = authReducer({}, register('payload'));
        expect(result.authenticationError).toBe('')
    });

    it('should work for registerSuccess', () => {
        const result = authReducer({}, registerSuccess('payload'));
        expect(result.authenticationError).toBe('')
    });

    it('should work for registerFailure', () => {
        const result = authReducer({}, registerFailure('error with server'));
        expect(result.authenticationError).toBe('error with server')
    });

    it('should work for signIn', () => {
        const result = authReducer({}, signIn());
        expect(result.authenticationToken).toBe(undefined);
        expect(result.authenticationError).toBe('');
    });

    it('should work for signInSuccess', () => {
        const result = authReducer({}, signInSuccess('payload'));
        expect(result.authenticationToken).toBe('payload');
        expect(result.authenticationError).toBe('');
    });

    it('should work for signInFailure', () => {
        const result = authReducer({}, signInFailure('error with service'));
        expect(result.authenticationToken).toBe(undefined);
        expect(result.authenticationError).toBe('error with service');
    });

    it('should work for signOut', () => {
        const result = authReducer({}, signOut());
        expect(result.authenticationToken).toBe(undefined);
        expect(result.authenticationError).toBe('');
    });
});
