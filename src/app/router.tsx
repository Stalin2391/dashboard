import React from "react";
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";


// eslint-disable-next-line
export const createAppRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <>
            <Link to="/">Home Page</Link> | 
            <Link to="/second">Second Page</Link> | 
            <Link to="/third">Third Page</Link>
          </>
          <hr />
          <Outlet />
        </>
      ),
      children: [
        { index: true, element: <h1>Home Page</h1> },
        { path: "/second", element: <h1>Second Page</h1> },
        { path: "/third", element: <h1>Third Page</h1> },
      ],
    },
  ], {basename:"/dashboard"});
};

export const AppRouter = () => {
  const router = React.useMemo(() => createAppRouter(), []);
  return <RouterProvider router={router} />;
};
