import { TurnedInNot } from '@mui/icons-material';
import {
    Box,
    List,
    Drawer,
    Toolbar,
    Divider,
    ListItem,
    Typography,
    ListItemIcon,
    ListItemButton,
    Grid,
    ListItemText,
    useTheme,
    useMediaQuery,
} from '@mui/material';



interface Props {
    drawerWidth: number;
}

export const Sidebar = ({ drawerWidth }: Props) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.only('xs'));


    return (
        <Box
            component="nav"
            sx={{
                width: { sm: drawerWidth },
                flexShrink: { sm: 0 }
            }}
        >
            <Drawer
                open
                variant={isMobile ? 'temporary' : 'permanent'}
                sx={{
                    display: {
                        xs: "block"
                    },
                    '& .MuiDrawer-paper': {
                        boxSizing: "border-box",
                        width: drawerWidth
                    }
                }}
            >
                <Toolbar>
                    <Typography variant="h6" component="div">David</Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        Array.from({ length: 4 }).map((_, i) => (
                            <ListItem key={i} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText
                                            primary='Productos'
                                            secondary='Example products'
                                        />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    );
};

export default Sidebar;