import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import Gallery from "./routes/Gallery";
import Home from "./routes/Home";

const router = createBrowserRouter([
    {
        path: "/Proto",
        element: <Home />,
    },
    {
        path: "/Proto/gallery",
        element: <Gallery />,
    },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
