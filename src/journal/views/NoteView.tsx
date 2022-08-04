import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery, itemData } from '../components';

export const NoteView = () => {
    return (
        <Grid
            container
            sx={{ mb: 1 }}
            alignItems="center"
            justifyContent="space-between"
        >
            <Grid item>
                <Typography
                    fontSize={39}
                    fontWeight="light"
                >
                    28 de agosto, 2023
                </Typography>
            </Grid>
            <Grid item>
                <Button
                    color="primary"
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
                />
            </Grid>
            <ImageGallery data={itemData} />
        </Grid>
    );
};

export default NoteView;