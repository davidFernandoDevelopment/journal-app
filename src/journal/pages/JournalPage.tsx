import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';


import { NoteView, NothingSelectedView } from '../views';
import { JournalLayout } from '../layout';
import { startNewNote } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const JournalPage = () => {
    const dispatch = useAppDispatch();
    const {
        isSaving, activeNote
    } = useAppSelector(state => state.journal);

    const onClickNewNote = () => {
        dispatch(startNewNote());
    };

    return (
        <JournalLayout>
            {
                activeNote
                    ? <NoteView />
                    : <NothingSelectedView />
            }
            <IconButton
                sx={{
                    color: "white",
                    backgroundColor: "error.main",
                    ':hover': {
                        backgroundColor: "error.main",
                        opacity: 0.9
                    },
                    position: 'fixed',
                    bottom: 50,
                    right: 50
                }}
                disabled={isSaving}
                onClick={onClickNewNote}
            >
                <AddOutlined
                    sx={{ fontSize: 30 }}
                />
            </IconButton>
        </JournalLayout>
    );
};

export default JournalPage;