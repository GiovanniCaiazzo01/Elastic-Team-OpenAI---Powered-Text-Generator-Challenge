import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";
import MainRoutes from "./routes/MainRoutes";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
