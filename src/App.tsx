import { Container } from "react-bootstrap";
import React from "react";
import Home from "./Vone/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AuthProvider from "./Components/AuthContext";
import PrivateRoute from "./Components/PrivateRoute";
function App() {
  return (
    // <AuthProvider>
    //   <Router>
    //     <div>
    //       {/* <Route exact path="/" component={Home}></Route> */}
    //       <Route exact path="login" component={Login}></Route>
    //       <Route exact path="signup" component={Signup}></Route>
    //     </div>
    //   </Router>
    //   {/* <div className={"body"}>
    //     <h2>Ink Form Generator</h2>
    //   </div> */}
    // </AuthProvider>
    <Router>
      <AuthProvider>
        <Switch>
          <React.Fragment>
            <Container
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "100vh" }}
            >
              <PrivateRoute exact path="/" component={Home}></PrivateRoute>
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
