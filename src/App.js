import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AddBookContainer from "./conteiners/AddBookContainer";
import ListBookContainer from "./conteiners/ListBookContainer";
import ReaderBookContainer from "./conteiners/ReaderBookContainer";
import Layout from "./components/Layout";
import IndexContainer from "./conteiners/IndexContainer";

const App = () => {

    const router = createBrowserRouter([
        {
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <IndexContainer/>
                },
                {
                    path: "add",
                    element: <AddBookContainer/>,
                },
                {
                    path: "list",
                    element: <ListBookContainer/>,
                },
                {
                    path: "book",
                    element: <ReaderBookContainer/>,
                },
            ],
        },
    ]);

    return (
        <>
            <React.StrictMode>
                <RouterProvider router={router}/>
            </React.StrictMode>
        </>
    )
}

export default App;
