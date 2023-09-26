import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import Gallery from "./routes/Gallery";
import Home from "./routes/Home";

export const basePath = '/Proto'

const router = createBrowserRouter([
    {
        path: `${basePath}/`,
        element: <Home />,
    },
    {
        path: `${basePath}/gallery`,
        element: <Gallery />,
    },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
