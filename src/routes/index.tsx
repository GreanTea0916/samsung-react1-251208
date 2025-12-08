import { createBrowserRouter, RouterProvider } from 'react-router'
import { requiresAuth } from './loaders/requiresAuth'
import { dynamic } from '@/lib/dynamic'
// import { lazy, Suspense } from 'react'
// import Home from './pages/Home'
// import MovieDetails from './pages/MovieDetails'
// import SignIn from './pages/SignIn'
// import { ErrorBoundary } from 'react-error-boundary'

// const Home = lazy(() => import('./pages/Home'))
// const MovieDetails = lazy(() => import('./pages/MovieDetails'))
// const SignIn = lazy(() => import('./pages/SignIn'))

const router = createBrowserRouter([
  {
    path: '/',
    // Component: Home
    // element: <ErrorBoundary fallback={<div>에러 발생..</div>}>
    //   <Suspense fallback={<div>로딩 중..</div>}>
    //     <Home />
    //   </Suspense>
    // </ErrorBoundary>
    Component: dynamic(() => import('./pages/Home'))
  },
  {
    path: '/movies/:movieId',
    loader: requiresAuth,
    // Component: MovieDetails,
    // element: <Suspense fallback={<div>로딩 중..</div>}>
    //   <MovieDetails />
    // </Suspense>
    Component: dynamic(() => import('./pages/MovieDetails'))
  },
  {
    path: '/signin',
    // Component: SignIn
    // element: <Suspense fallback={<div>로딩 중..</div>}>
    //   <SignIn />
    // </Suspense>
    Component: dynamic(() => import('./pages/SignIn'))
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}