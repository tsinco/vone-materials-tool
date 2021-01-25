import { Container } from "react-bootstrap";
import Home from "./Vone/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AuthProvider from "./Components/AuthContext";
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
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <Signup />
      </div>
    </Container>
  );
}

export default App;
