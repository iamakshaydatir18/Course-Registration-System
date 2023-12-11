import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";
import RedirectComponent from "./pages/RedirectComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RedirectComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
