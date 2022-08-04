import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    status: 'checking' | 'not-authenticated' | 'authenticated';
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    errorMessage: string | null;
}

const initialState: State = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: () => { },
        logout: () => { },
        checkingCredentials: (state: State) => {
            state.status = 'checking';
        }
    }
});


export const { login, logout, checkingCredentials } = authSlice.actions;
export default authSlice.reducer;