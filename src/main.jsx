import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import ErrorPage from './component/ErrorPage/ErrorPage';
import JobDetails from './component/JobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element:<Root></Root> ,
    
    children: [
      {path:'/',
      element: <Home></Home>
    },
    {
      path: '/applied',
      element: <AppliedJobs></AppliedJobs>,
      loader: () => fetch('/jobs.json') // warning: only load the data you need. do not load all the data
    },
    {
      path: '/job/:id',
      element: <JobDetails></JobDetails>,
      loader: () => fetch('/jobs.json')  // do not load all data. load only what you need
    }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
