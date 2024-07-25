import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Accordion from "./components/Accordion/Accordion";
import AlertDialog from "./components/AlertDialog/AlertDialog";
import Buttons from "./components/Buttons/Buttons";
import ActionButton from "./components/Buttons/ActionButton/ActionButton";

const routerSettings = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Accordion />,
        handle: { crumb: () => "Accordion" },
      },
      {
        path: "alertdialog",
        element: <AlertDialog />,
        handle: { crumb: () => "Alertdialog" },
      },
      {
        path: "buttons",
        element: <Buttons />,
        handle: { crumb: () => "Buttons" },
        children: [
          {
            path: "actionbutton",
            element: <ActionButton />,
            handle: { crumb: () => "Actionbutton" },
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routerSettings} />;
}

export default App;
