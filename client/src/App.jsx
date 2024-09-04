import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Root from "./routes/Root.jsx";
import Error from "./routes/Error.jsx";
import Login from "./routes/Login.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Error/>,
    },
    {
        path: '/login',
        element: <Login/>,
        errorElement: <Error/>
    }
    ]);

function App() {
    return (
        <>
        <RouterProvider router={router}/>
        </>
    )
}

export default App
