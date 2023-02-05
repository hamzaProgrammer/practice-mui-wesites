import './App.css';
import {createContext , useState} from "react"
import Routes from './routes/Routes'
//import Theme from "./theme/ThemseSettings"
//import { ThemeProvider } from "@mui/material/styles";
export const ThemeContext = createContext(null)


function App() {
  const [ theme , setTheme ] = useState(true);
  return (
    <>
        <ThemeContext.Provider value={[theme , setTheme]} >
            <Routes />
        </ThemeContext.Provider>
    </>
  );
}

export default App;
