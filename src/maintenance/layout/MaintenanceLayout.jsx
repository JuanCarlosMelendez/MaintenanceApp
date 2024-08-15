import { Box } from "@mui/system"
import { Navbar, SideBar } from "../components";
import { Toolbar } from "@mui/material";


const drawerWidth = 280;

export const MaintenanceLayout = ({ children }) => {
  return (
    <Box className='animate__animated animate__fadeIn animate__fast' sx={{ display: 'flex' }} >

        <Navbar drawerWidth={ drawerWidth } />

        <SideBar drawerWidth={ drawerWidth }/>

        <Box
            component='main'
            sx={{  flexGrow: 1, p: 1 }}
        >
            <Toolbar />
            { children }

        </Box>
    </Box>
  )
}
