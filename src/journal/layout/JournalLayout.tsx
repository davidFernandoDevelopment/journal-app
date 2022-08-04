import { Toolbar, Box, useTheme } from '@mui/material';


import { Navbar, Sidebar } from '../components';


interface Props {
    children: JSX.Element | JSX.Element[];
}

const drawerWidth = 240;


export const JournalLayout = ({ children }: Props) => {
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar drawerWidth={drawerWidth} />
            <Sidebar drawerWidth={drawerWidth} />
            <Box
                component='main'
                sx={{
                    flexGrow: 1
                }}
            >
                <Toolbar />
                <Box
                    sx={{
                        height: `calc(100vh - 56px)`,
                        [theme.breakpoints.up("sm")]: {
                            height: `calc(100vh - 64px)`
                        },
                        p: 3
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Box>

    );
};

export default JournalLayout;