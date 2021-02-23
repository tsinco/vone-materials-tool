import { Container } from "react-bootstrap";
import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import AuthProvider from "./Components/Authentication/AuthContext";
import PrivateRoute from "./Components/Authentication/PrivateRoute";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <React.Fragment>
            <PrivateRoute exact path="/" component={Home}></PrivateRoute>
            <Container
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "100vh" }}
            >
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/signup" component={Signup}></Route>
            </Container>
          </React.Fragment>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
