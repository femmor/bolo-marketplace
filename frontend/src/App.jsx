import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import {
  Add,
  Gig,
  Gigs,
  Home,
  Login,
  Message,
  Messages,
  MyGigs,
  Orders,
  Register,
} from './pages';
import { Footer, Navbar } from './components';

import './App.scss';

const App = () => {
  const Layout = () => (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/add', element: <Add /> },
        { path: '/gig/:id', element: <Gig /> },
        { path: '/gigs', element: <Gigs /> },
        { path: '/my-gigs', element: <MyGigs /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/message/:id', element: <Message /> },
        { path: '/messages', element: <Messages /> },
        { path: '/orders', element: <Orders /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
