import MyRouter from "./featchers/global/router/myRouters";
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { StylesProvider, jssPreset } from '@mui/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createTheme({
  direction: 'rtl', 
});

function App() {
  return(
  
  <ThemeProvider theme={theme}>
   <MyRouter />
  </ThemeProvider>
  )
}

export default App;
