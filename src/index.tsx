import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./pages/App/App";
import "./index.css";
import Home from "./pages/Home/Home";
import ErrorPages from "./pages/ErrorPage/ErrorPages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPages />,
    },
    {
        path: "/home",
        element: <Home />,
        errorElement: <ErrorPages />,
    },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
    createRoot(rootElement).render(
        <React.StrictMode>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </React.StrictMode>
    );
} else {
    console.error('Element with id "root" not found.');
}
