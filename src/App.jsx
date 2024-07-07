import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Accordion from "./components/Accordion/Accordion";
import AlertDialog from "./components/AlertDialog/AlertDialog";

const routerSettings = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Accordion /> },
      { path: "alertdialog", element: <AlertDialog /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routerSettings} />;
}

export default App;
