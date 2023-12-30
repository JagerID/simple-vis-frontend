import { Outlet, createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { Home } from '@pages/Home'
import { AuthHeader, Header } from '@widgets/header'
import { PATHS } from '@shared/lib/react-router'
import { AuthLayout } from './layouts/AuthLayout'
import { Login } from '@pages/Login'
import { Register } from '@pages/Register'
import { Suspense, lazy } from 'react'
import { PageLoader } from '@widgets/loaders'

const Map = lazy(() => import('../pages/Map'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RootLayout>
        <Header />
        <Outlet />
      </RootLayout>
    ),
    children: [{ path: PATHS.home, element: <Home /> }]
  },
  {
    path: '/',
    element: (
      <AuthLayout>
        <AuthHeader />
        <Outlet />
      </AuthLayout>
    ),
    children: [
      { path: PATHS.login, element: <Login /> },
      { path: PATHS.register, element: <Register /> }
    ]
  },
  {
    path: PATHS.map,
    element: (
      <Suspense fallback={<PageLoader />}>
        <Map />
      </Suspense>
    )
  }
])
