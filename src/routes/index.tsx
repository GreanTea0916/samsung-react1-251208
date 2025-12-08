import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import SignIn from './pages/SignIn'
import { requiresAuth } from './loaders/requiresAuth'

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Home />
    Component: Home
  },
  {
    path: '/movies/:movieId',
    Component: MovieDetails,
    loader: requiresAuth
  },
  {
    path: '/signin',
    Component: SignIn
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}