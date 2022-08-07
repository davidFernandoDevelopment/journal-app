import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';

import { startLogout } from '../../store';
import { useAppDispatch } from '../../hooks';

interface Props {
    drawerWidth: number;
}

export const Navbar = ({ drawerWidth = 240 }: Props) => {
    const dispatch = useAppDispatch();


    const onLogout = () => {
        dispatch(startLogout());
    };


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
                    <IconButton
                        color="error"
                        onClick={onLogout}
                    >
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;