import { router } from 'app/router'
import { RouterProvider as ReactRouterProvider } from 'react-router-dom'

export const RouterProvider = () => {
  return <ReactRouterProvider router={router} />
}
