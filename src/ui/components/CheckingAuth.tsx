import { CircularProgress, Grid } from '@mui/material';


export const CheckingAuth = () => {
    return (
        <Grid
            container
            justifyContent="center"
            sx={{
                padding: 4,
                minHeight: "100vh",
                backgroundColor: "primary.main"
            }}
        >
            <Grid
                item
                container
                alignItems="center"
                justifyContent="center"
                sx={{
                    width: { sm: 450 },
                }}
            >
                <CircularProgress color='warning' />
            </Grid>
        </Grid>
    );
};

export default CheckingAuth;