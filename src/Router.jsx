import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Learn from './pages/Learn'
import Community from './pages/Community'
import Developers from './pages/Developers'
import BuyTokens from './pages/BuyTokens'
import BecomeMiner from './pages/BecomeMiner'

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
        path: "community",
        element: <Community />,
      },
      {
        path: "developers",
        element: <Developers />,
      },
      {
        path: "become-miner",
        element: <BecomeMiner />,
      },
      {
        path: "buy-tokens",
        element: <BuyTokens />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />
}