import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Error } from '../../firebase/providers';


export interface User {
    uid: string | null;
    email: string | null;
    displayName?: string | null;
    photoURL?: string | null;
}
interface State {
    status: 'checking' | 'not-authenticated' | 'authenticated';
    user: User | null;
    error: Error | null;
}

const initialState: State = {
    status: 'checking',
    user: null,
    error: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state: State, { payload }: PayloadAction<User>) => {
            state.status = 'authenticated';
            state.user = payload;
            state.error = null;
        },
        logout: (
            state: State,
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
        checkingCredentials: (state: State) => {
            state.status = 'checking';
        }
    }
});


export const { login, logout, checkingCredentials } = authSlice.actions;
export default authSlice.reducer;