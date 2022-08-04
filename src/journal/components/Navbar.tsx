import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';

interface Props {
    drawerWidth: number;
}

export const Navbar = ({ drawerWidth = 240 }: Props) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: {
                    sm: `calc(100% - ${drawerWidth}px)`
                },
                ml: {
                    sm: `${drawerWidth}px`
                }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    sx={{
                        mr: 2,
                        display: { sm: 'none' }
                    }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container justifyContent="space-between" alignItems="center">
                    <Typography
                        noWrap
                        variant="h6"
                        component="div"
                    >
                        Journal App
                    </Typography>
                    <IconButton color="error">
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;