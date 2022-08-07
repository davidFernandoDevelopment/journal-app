import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth';
import { CheckingAuth } from '../ui';
import { JournalRoutes } from '../journal';
import { useChecking } from '../hooks';



export const AppRouter = () => {
    const status = useChecking();

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