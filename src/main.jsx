import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Dokterpage from "./pages/Dokterpage.jsx";
import Perawatanpage from "./pages/Perawatanpage.jsx";
import Fisiopage from "./pages/Fisiopage.jsx";
import Labpage from "./pages/Labpage.jsx";
import Lainnyapage from "./pages/Lainnyapage.jsx";
import Vaksinpage from "./pages/Vaksinpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/layanan-dokter",
    element: <Dokterpage />,
  },
  {
    path: "/layanan-perawatan",
    element: <Perawatanpage />,
  },
  {
    path: "/layanan-fisioterapi",
    element: <Fisiopage />,
  },
  {
    path: "/layanan-lab",
    element: <Labpage />,
  },
  {
    path: "/layanan-vaksin",
    element: <Vaksinpage />,
  },
  {
    path: "/layanan-lainnya",
    element: <Lainnyapage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
