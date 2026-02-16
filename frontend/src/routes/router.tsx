import { createBrowserRouter } from "react-router-dom";
import LayoutBase from "../pages/LayoutBase";
import Home from "../pages/Home/Home";
import Favoritos from "../pages/Favoritos/Favoritos";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        ErrorBoundary: () => <h1>Ops, algo deu errado!</h1>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "favoritos",
                element: <Favoritos />,
            }
        ]
    }
])