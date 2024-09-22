import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Introduction from './pages/Introduction';
import Layout from './pages/Layout';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import Skill from './pages/Skill';
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Introduction />,
      },
      {
        path: '/experience',
        element: <Experience />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/skill',
        element: <Skill />,
      },
      {
        path: '/contact',
        element: <Contact />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  </React.StrictMode>
);

reportWebVitals();
