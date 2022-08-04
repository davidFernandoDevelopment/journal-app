import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { JournalLayout } from '../layout';
import { NoteView } from '../views';

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <NothingSelectedView /> */}
            <NoteView />
            <IconButton sx={{
                color: "white",
                backgroundColor: "error.main",
                ':hover': {
                    backgroundColor: "error.main",
                    opacity: 0.9
                },
                position: 'fixed',
                bottom: 50,
                right: 50
            }}>
                <AddOutlined
                    sx={{ fontSize: 30 }}
                />
            </IconButton>
        </JournalLayout>
    );
};

export default JournalPage;