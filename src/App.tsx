import { ThemeProvider } from "@/components/theme-provider";
import { Main } from "@/pages/Main.tsx";
import "./App.css";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Main />
        </ThemeProvider>
    );
}

export default App;
