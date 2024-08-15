import { Grid, Typography } from "@mui/material"


export const AuthLayout = ({ children, title = '' }) => {
  return (
    <>
    <Grid 
      container
      paddingLeft= { 2 }
      justifyContent="left"
      backgroundColor='secondary.main'
    >
      <Typography variant="h3" color={"white"} padding={ 2 }> Bienvenido al portal de Mantenimiento</Typography>
    </Grid>
    
    <Grid 
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >

      <Grid item
      className="box-shadow"
      xs={ 3 }
      sx={{ 
        width: { sm: 450 },
        backgroundColor: 'white', 
        padding: 3, 
        borderRadius: 2 
    }}>
        <Typography variant="h5" sx={{ mb: 1 }}> { title } </Typography>

            {/* children */}
            { children }
      </Grid>
    
    </Grid>
    </>
  )
}
