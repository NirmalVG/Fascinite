import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
