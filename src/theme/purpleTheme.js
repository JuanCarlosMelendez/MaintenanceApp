import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            // main: '#262254'
            main: '#263238'

        },
        secondary: {
            // main: '#543884'
            main: '#00bcd4'
        },
        error: {
            main: red.A400
        }
    }
})