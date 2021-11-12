import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routerList from "./utils/route_list";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routerList.public.map((route, i) => {
            return (
              <Route
                key={i}
                exact
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
