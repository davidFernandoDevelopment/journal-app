import { useMemo, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';

import { ImageGallery, itemData } from '../components';
import { startSaveNote } from '../../store';
import { useAppDispatch, useAppSelector, useForm } from '../../hooks';

export const NoteView = () => {

    const dispatch = useAppDispatch();
    const {
        isSaving,
        activeNote,
        messageSaved,
    } = useAppSelector(state => state.journal);
    const {
        body,
        date,
        title,
        formState,
        onInputChange
    } = useForm(activeNote);

    const dateString = useMemo(() => {
        const newDate = new Date(date).toUTCString();
        return newDate;
    }, [date]);

    const onSaveNote = () => {
        if (formState) dispatch(startSaveNote(formState));
    };

    useEffect(() => {
        if (messageSaved) {
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }
    }, [messageSaved]);


    return (
        <Grid
            container
            sx={{ mb: 1 }}
            alignItems="center"
            justifyContent="space-between"
            className="animate__animated animate__fadeIn animate__faster"
        >
            <Grid item>
                <Typography
                    fontSize={39}
                    fontWeight="light"
                >
                    {dateString}
                </Typography>
            </Grid>
            <Grid item>
                <Button
                    color="primary"
                    disabled={isSaving}
                    onClick={onSaveNote}
                >
                    <SaveOutlined
                        sx={{
                            fontSize: 30,
                            mr: 1
                        }}
                    />
                    Guardar
                </Button>
            </Grid>
            <Grid item container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    label="Titulo"
                    placeholder='Ingrese un titulo'
                    sx={{
                        border: "none",
                        mb: 1
                    }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    minRows={5}
                    placeholder='Que sucedio hoy'
                    sx={{
                        border: "none",
                        mb: 1
                    }}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>
            <ImageGallery data={itemData} />
        </Grid>
    );
};

export default NoteView;