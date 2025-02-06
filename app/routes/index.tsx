import { DashboardHome } from '@/app/pages/dashboard'
import { Charts } from '@/app/pages/dashboard/charts'
import { Contracts } from '@/app/pages/dashboard/contracts'
import { Layout } from '@/app/pages/dashboard/layout'
import { Metrics } from '@/app/pages/dashboard/metrics'
import * as ReactRouter from 'react-router'

export const Routes = () => {
  return (
    <ReactRouter.BrowserRouter>
      <ReactRouter.Routes>
        <ReactRouter.Route
          path='/dashboard'
          element={<Layout />}
        >
          <ReactRouter.Route
            index
            element={<DashboardHome />}
          />
          <ReactRouter.Route
            path='/dashboard/charts'
            element={<Charts />}
          />
          <ReactRouter.Route
            path='/dashboard/contracts'
            element={<Contracts />}
          />
          <ReactRouter.Route
            path='/dashboard/metrics'
            element={<Metrics />}
          />
        </ReactRouter.Route>
        <ReactRouter.Route
          path='*'
          element={<ReactRouter.Navigate to='/dashboard' />}
        />
      </ReactRouter.Routes>
    </ReactRouter.BrowserRouter>
  )
}
