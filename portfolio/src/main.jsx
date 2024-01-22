import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'


import App from './App';
import Home from './pages/homePage';
import ErrorPage from './pages/errorPage';
import Game from './pages/games/gamesPage';
import FizzBuzz from './pages/games/fizzBuzz';
import Projects from './pages/projects/projectsPage';
import Calculator from './pages/games/calculator';

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
      {
        path: '/calculator',
        element: <Calculator />
      }
    ]
  }
])









ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);