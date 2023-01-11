import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
    // breakpoints: {
    //   values: {
    //     xs: 300,
    //     sm: 596,
    //     md: 768,
    //     lg: 1240,
    //     xl: 1440,
    //   },
    // },
});

export default theme