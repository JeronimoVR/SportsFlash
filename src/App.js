import "./App.css";
import React from "react";
import NavbarCompoment from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Home from "./pages/Home/Home";
import News from "./pages/News";
import About from "./pages/About";
import Soccer from "./pages/Sports/Soccer";
import Basketball from "./pages/Sports/Basketball";
import Tennis from "./pages/Sports/Tennis";
import F1 from "./pages/Sports/F1";
import MotoGp from "./pages/Sports/MotoGp";

function App() {
    let component;
    switch (window.location.pathname) {
        case "/":
            component = <Home />;
            break;
        case "/News":
            component = <News />;
            break;
        case "/Soccer":
            component = <Soccer />;
            break;
        case "/Basketball":
            component = <Basketball />;
            break;
            case "/Tennis":
            component = <Tennis />;
            break;
            case "/F1":
            component = <F1 />;
            break;
            case "/MotoGp":
            component = <MotoGp />;
            break;
        case "/About":
            component = <About />;
            break;
        default:
            component = Error;
            break;
    }
    return (
        <>
            <NavbarCompoment />
            {component}
            <FooterComponent />
        </>
    );
}

export default App;
