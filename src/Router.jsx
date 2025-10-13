import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Learn from './pages/Learn'
import Use from './pages/Use'
import Build from './pages/Build'
import Community from './pages/Community'
import Developers from './pages/Developers'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "learn",
        element: <Learn />,
      },
      {
        path: "use",
        element: <Use />,
      },
      {
        path: "build",
        element: <Build />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "developers",
        element: <Developers />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />
}