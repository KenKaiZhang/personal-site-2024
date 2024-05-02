import App from "./App";
import About from "./modules/About";
import Experiences from "./modules/Experiences";
import Home from "./modules/Home";

export const router = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/experiences",
                element: <Experiences />
            }
        ]
    },

]