import { createRoot } from "react-dom/client";
import MainView from './components/main-view/main-view';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.scss";

const App = () => {
    return (
        <>
        <Navbar />
        <MainView />
        <Footer />
        </>
    );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<App />);