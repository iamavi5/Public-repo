import React, { Component} from "react";
import {BrowserRouter as Router, Route,Switch, Redirect} from "react-router-dom";

import register from "./component/register";
class App extends Component {
  render(){
    return(
      <Router>
        <div className = "App">
          <Switch>
            <Route exact path="/register" component={register}/>
            <Route path="/" render={()=> <Redirect to="/register"/>}/>
          </Switch>
        </div>
      </Router>

    );
  }
}
export default App;