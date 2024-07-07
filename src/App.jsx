import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Accordion from "./components/accordion/Accordion";

const routerSettings = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Accordion /> }],
  },
]);

function App() {
  return <RouterProvider router={routerSettings} />;
}

export default App;
