import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "rgb(255, 169, 125)",
            dark: "rgb(255, 134, 74, 1)",
            light: "rgba(255, 169, 125, 0.5)",
        },
        secondary: {
            main: "rgba(125, 211, 255, 1)",
            dark: "rgba(74, 194, 255, 1)",
            light: "rgba(125, 211, 255, 0.5)",
        }
    },
    typography:{
        fontFamily: ["Roboto Condensed", "Shadow Into Light"].join(",")
    }
})