import { Navigate, Route, Routes } from 'react-router-dom';
import { JournalView } from '../views';

const JournalRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<JournalView />} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default JournalRoutes;