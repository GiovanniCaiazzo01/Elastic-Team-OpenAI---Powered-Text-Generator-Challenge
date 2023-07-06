import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";
import MainRoutes from "./routes/MainRoutes";
import { ToastContainer } from "react-toastify";
import { AuthProvider, ChatProvider } from "./providers";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <ChatProvider>
            <ToastContainer />
            <MainRoutes />
          </ChatProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
