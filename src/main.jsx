import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import Gallery from './routes/Gallery';
import Error from './routes/Error';
import Profile from './routes/Profile';
import DetailPage from './routes/DetailPage';
import { loader as galleryLoader } from './routes/Gallery';
import { loader as detailLoader } from './routes/DetailPage';
import './css/reset.css';

const router = createBrowserRouter([
  {
    path: '/svg_generator/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        index: true,
        element: <App />,
      },
      {
        errorElement: <Error />,
        path: 'gallery',
        loader: galleryLoader,
        element: <Gallery />,
      },
      {
        errorElement: <Error />,
        path: 'profile',
        element: <Profile />,
      },
      {
        errorElement: <Error />,
        path: 'detail/:blobId',
        element: <DetailPage />,
        loader: detailLoader,
        //  action: catAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
/* 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
); */
