//import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './App';
import './styles.css';
import ExplorePage from './Pages/ExplorePage';
import CommunityPage from './Pages/CommunityPage';
import ArtPage from './Pages/ArtPage';
import AboutPage from './Pages/AboutPage';
import StoriesPage from './Pages/StoriesPage';

const router= createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
 {
    path: "/Explore",
    element: <ExplorePage/>,
  },
   {
    path: "/Community",
    element: <CommunityPage/>,
  },
  {
    path: "/Art",
    element: <ArtPage/>,
  },
  {
    path: "/About",
    element: <AboutPage/>,
  },
  {
    path: "/Stories",
    element: <StoriesPage/>,
  },



]);

// Create a root using createRoot

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);