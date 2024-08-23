import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './Styles/index.css';
import Accueil from './Pages/Accueil.jsx';
import Apropos from './Pages/A-propos.jsx';
import Erreur from './Pages/404.jsx';
import Logement from './Pages/Logement.jsx';

import reportWebVitals from './reportWebVitals.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/a-propos",
    element: <Apropos />,
  },
  {
    path: "/logement/:id",
    element: <Logement />,
  },
  {
    path: "*",
    element: <Erreur />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
