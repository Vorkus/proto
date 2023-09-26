import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createHashRouter, RouterProvider} from "react-router-dom";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/gallery",
        element: <Gallery />,
    },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
