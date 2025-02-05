import { Dashboard } from '@page/dashboard'
import * as ReactRouter from 'react-router'

export const Routes = () => {
  return (
    <ReactRouter.BrowserRouter>
      <ReactRouter.Routes>
        <ReactRouter.Route
          path='/dashboard'
          element={<Dashboard />}
        />
        <ReactRouter.Route
          path='*'
          element={<ReactRouter.Navigate to='/dashboard' />}
        />
      </ReactRouter.Routes>
    </ReactRouter.BrowserRouter>
  )
}
