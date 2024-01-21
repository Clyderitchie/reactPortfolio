import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'


import App from './App';
import Home from './pages/homePage';
import ErrorPage from './pages/errorPage';
import Game from './pages/gamesPage';
import FizzBuzz from './pages/fizzBuzz';
import Projects from './pages/projects/projectsPage';

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
        path: '/games',
        element: <Game />
      },
      {
        path: '/fizzBuzz',
        element: <FizzBuzz />
      },
      {
        path: '/projects',
        element: <Projects />
      },
    ]
  }
])









ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);