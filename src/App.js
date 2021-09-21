import Top from "./components/barratop/Top";
import Side from "./components/barraside/Side";
import UserList from "./components/pages/usuarios/UserList";
import Admin from "./components/pages/admin/Admin";
import "./App.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    //Aqui Voce pode elaborar suas rotas facilmente com o router
    <Router>
      <Top/>
      <div className="container">
        <Side/>
        <Switch>
          <Route excat path="/">
            <Admin />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
