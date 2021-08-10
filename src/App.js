import './App.css';
import Navbar from "./components/Navbar";
import HomeDashboard from "./components/HomeDashboard";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <HomeDashboard />
        </Route>
        <Route path="/about" />
      </Switch>
    </div> 
  );
}

export default App;
