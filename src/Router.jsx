import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Community from './pages/Community'
import Forum from './pages/Forum'
import Developers from './pages/Developers'
import BuyTokens from './pages/BuyTokens'
import BecomeMiner from './pages/BecomeMiner'
import DelegateTokens from './pages/DelegateTokens'

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
        path: "community",
        element: <Community />,
      },
      {
        path: "forum",
        element: <Forum />,
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
        path: "delegate-tokens",
        element: <DelegateTokens />,
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