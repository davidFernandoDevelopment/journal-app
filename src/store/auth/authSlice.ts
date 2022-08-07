import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Error } from '../../firebase';

import { Status, User } from './';

interface AuthState {
    status: Status;
    user: User | null;
    error: Error | null;
}

const initialState: AuthState = {
    status: 'checking',
    user: null,
    error: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state: AuthState, { payload }: PayloadAction<User>) => {
            state.status = 'authenticated';
            state.user = payload;
            state.error = null;
        },
        logout: (
            state: AuthState,
            action: PayloadAction<Error | undefined>
        ) => {
            state.status = 'not-authenticated';
            state.user = null;
            if (action.payload) {
                state.error = {
                    code: action.payload.code,
                    message: action.payload.message
                };
            }
        },
        checkingCredentials: (state: AuthState) => {
            state.status = 'checking';
        }
    }
});


export const { login, logout, checkingCredentials } = authSlice.actions;
export default authSlice.reducer;