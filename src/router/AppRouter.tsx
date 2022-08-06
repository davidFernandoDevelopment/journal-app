import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { AuthRoutes } from '../auth';
import { CheckingAuth } from '../ui';
import { JournalRoutes } from '../journal';
import { FirebaseAuth } from '../firebase/config';
import { useAppDispatch, useAppSelector, login, logout } from '../store';



export const AppRouter = () => {
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
    }, []);

    if (status === "checking") return <CheckingAuth />;

    return (
        <Routes>
            {
                status === "authenticated"
                    ? <Route path="/*" element={<JournalRoutes />} />
                    : <Route path="auth/*" element={<AuthRoutes />} />
            }
            <Route path="/*" element={<Navigate to="auth/login" />} />
        </Routes>
    );
};

export default AppRouter;