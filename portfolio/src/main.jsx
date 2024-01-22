import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'


import App from './App';
import Home from './pages/homePage';
import ErrorPage from './pages/errorPage';
import Apps from './pages/applications/appPage';
import FizzBuzz from './pages/applications/fizzBuzz';
import Projects from './pages/projects/projectsPage';
import Calculator from './pages/applications/calculator';
import Contacts from './pages/contact/contactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/applications',
        element: <Apps />
      },
      {
        path: '/fizzBuzz',
        element: <FizzBuzz />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/calculator',
        element: <Calculator />
      },
      {
        path: '/contacts',
        element: <Contacts />
      }
    ]
  }
])









ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);