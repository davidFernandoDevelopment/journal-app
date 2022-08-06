import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { FirebaseAuth } from '../firebase/config';
import { login, logout, Status, useAppDispatch, useAppSelector } from '../store';

export const useChecking = (): Status => {
    const dispatch = useAppDispatch();
    const { status } = useAppSelector(state => state.auth);

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout());

            dispatch(login({
                uid: user.uid,
                email: user.email,
                photoURL: user?.photoURL,
                displayName: user?.displayName,
            }));
        });
    }, [dispatch]);

    return status;
};