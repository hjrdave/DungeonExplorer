import { BrowserRouter as Router } from "react-router-dom";
import { TerminalContextProvider } from "react-terminal";
import Routes from "./Routes";
import "./Styles.scss";
function App() {
  return (
    <>
      <Router basename="/">
        <TerminalContextProvider>
          <Routes />
        </TerminalContextProvider>
      </Router>
    </>
  );
}

export default App;
