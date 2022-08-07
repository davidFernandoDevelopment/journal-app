import { useMemo } from 'react';
import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { Note, setActiveNote } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks';

type Props = Note;

export const SidebarItem = ({ id, title, body, date, imageUrls }: Props) => {
    const dispatch = useAppDispatch();
    const { activeNote } = useAppSelector(state => state.journal);

    const newTitle = useMemo(() => {
        return title.length > 16
            ? title.substring(0, 16) + '...'
            : title;
    }, [title]);

    const onClickNote = () => {
        dispatch(setActiveNote({
            id,
            title,
            body,
            date,
            imageUrls
        }));
    };

    return (
        <ListItem disablePadding>
            <ListItemButton
                selected={activeNote?.id === id}
                onClick={onClickNote}
            >
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText
                        primary={newTitle}
                        secondary={body}
                    />
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};

export default SidebarItem;