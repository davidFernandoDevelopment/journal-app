import {
    Error,
    signInWithGoogle,
    signInEmailPassword,
    registerEmailPassword,
    logoutFirebase,
} from '../../firebase';

import { Authenticate } from '../../auth';
import { checkingCredentials, logout, login, User } from './';
import { clearNotesLogout } from '../journal';
import { AppThunk } from '../';


export const checkingAuthentication = (): AppThunk => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSign = (): AppThunk => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, result } = await signInWithGoogle();
        if (!ok) return dispatch(logout(result as Error));

        dispatch(login(result as User));
    };
};

export const startCreatingUserWithEmailPassword = (user: Authenticate): AppThunk => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const { ok, result } = await registerEmailPassword(user);
        if (!ok) return dispatch(logout(result as Error));

        dispatch(login(result as User));
    };
};

export const startLoginWithEmailPassword = (credentials: Authenticate): AppThunk => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const { ok, result } = await signInEmailPassword(credentials);
        if (!ok) return dispatch(logout(result as Error));

        dispatch(login(result as User));
    };
};

export const startLogout = (): AppThunk => {
    return async (dispatch) => {
        await logoutFirebase();

        dispatch(logout());
        dispatch(clearNotesLogout());
    };
};