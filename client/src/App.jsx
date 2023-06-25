import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-componets";
import MainRoutes from "./routes/MainRoutes";
import { theme } from "./themes/";
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
