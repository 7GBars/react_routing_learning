import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {Root, UX} from "./routes";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: '/ux',
    element: <UX/>
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);