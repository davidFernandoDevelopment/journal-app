import { Authenticate } from '../../auth/interfaces';
import { AppDispatch } from '../store';

import { checkingCredentials } from './';


export const checkingAuthentication = ({ }: Authenticate) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSign = () => {
    return async (dispatch: AppDispatch) => {

    };
};