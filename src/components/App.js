import React from 'react';
import SideBar from './SideBar';
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import ContentWrapperUser from './ContentWrapperUser';
import ContentWrapper from './ContentWrapper';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContentWrapperUser />,
  },
  {
    path:'/user',
    element: <ContentWrapperUser />
  },
  {
    path: "/product",
    element: <ContentWrapper />,
  }
]);

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <RouterProvider router={router} />
        </div>
    </React.Fragment>
  );
}

export default App;
