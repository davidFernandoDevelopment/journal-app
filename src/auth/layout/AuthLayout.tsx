import { Grid, Typography } from '@mui/material';

interface Props {
    children: JSX.Element;
    title: string;
}


export const AuthLayout = ({ children, title }: Props) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                padding: 4,
                minHeight: "100vh",
                backgroundColor: "primary.main"
            }}
        >
            <Grid
                item
                xs={3}
                sx={{
                    padding: 3,
                    borderRadius: 2,
                    width: { md: 450 },
                    backgroundColor: "white",
                }}
                className='box-shadow'
            >
                <Typography variant="h5" sx={{ marginBottom: 1 }}>
                    {title}
                </Typography>

                {children}
            </Grid>
        </Grid>
    );
};

export default AuthLayout;