import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import SignIn from './pages/SignIn'

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Home />
    Component: Home
  },
  {
    path: '/movies/:movieId',
    Component: MovieDetails
  },
  {
    path: '/signin',
    Component: SignIn
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}