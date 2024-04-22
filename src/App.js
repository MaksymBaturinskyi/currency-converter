import AppRouter from "./navigation/AppRouter";
import {ThemeProvider} from "./contexts/ThemeContext";
import './styles/main.scss';

function App() {
  return (
      <ThemeProvider>
          <div className="App">
              <AppRouter />
          </div>
      </ThemeProvider>
  );
}

export default App;
