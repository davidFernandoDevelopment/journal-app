import {
    Box,
    List,
    Drawer,
    Toolbar,
    Divider,
    Typography,
    useTheme,
    useMediaQuery,
} from '@mui/material';

import { SidebarItem } from './';
import { useAppSelector } from '../../hooks';



interface Props {
    drawerWidth: number;
}

export const Sidebar = ({ drawerWidth }: Props) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.only('xs'));
    const {
        auth: { user },
        journal: { notes }
    } = useAppSelector(state => state);

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
                    <Typography variant="h6" component="div">
                        {user?.displayName}
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        notes.map(note => (
                            <SidebarItem
                                key={note.id}
                                {...note}
                            />
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    );
};

export default Sidebar;