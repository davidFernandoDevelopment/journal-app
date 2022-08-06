import {
    Error,
    signInWithGoogle,
    signInEmailPassword,
    registerEmailPassword,
} from '../../firebase/providers';

import { Authenticate } from '../../auth/interfaces';
import { AppDispatch } from '../store';

import { checkingCredentials, logout, login, User } from './';


export const checkingAuthentication = ({ }: Authenticate) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSign = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());
        const { ok, result } = await signInWithGoogle();
        if (!ok) return dispatch(logout(result as Error));

        dispatch(login(result as User));
    };
};

export const startCreatingUserWithEmailPassword = (user: Authenticate) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const { ok, result } = await registerEmailPassword(user);
        if (!ok) return dispatch(logout(result as Error));

        dispatch(login(result as User));
    };
};

export const startLoginWithEmailPassword = (credentials: Authenticate) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const { ok, result } = await signInEmailPassword(credentials);
        if (!ok) return dispatch(logout(result as Error));

        dispatch(login(result as User));
    };
};