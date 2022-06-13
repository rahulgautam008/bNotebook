import "./App.css";
import Navbar from "./components/Navbar";

import {
  BrowserRouter,
  Switch, // instead of "Switch"
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home showAlert={showAlert}/>
                <Footer/>
              </Route>
              <Route path="/about">
                <About />
                <Footer/>
              </Route>
              <Route path="/login">
                <Login showAlert={showAlert}/>
              </Route>
              <Route path="/signup">
                <Signup showAlert={showAlert}/>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
