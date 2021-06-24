// ** React Imports
import React from 'react'

// ** Loading
import Loader from '../components/Spinner/Loader'

// ** Router Components
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom'

// ** Layouts
import BlankLayout from '../layouts/BlankLayout'
import AdminLayout from '../layouts/AdminLayout'

import routes from '../router/routes/Apps'

const Router = () => {
  return (
    <AppRouter>
      <Switch>
        {routes.map(({ component: Component, path, layout, ...rest }) => {
          return (
            <Route
              render={(props) => (
                <>
                  {layout === 'BlankLayout' ? (
                    <React.Suspense fallback={<Loader />}>
                      <BlankLayout>
                        <Component {...props} />
                      </BlankLayout>
                    </React.Suspense>
                  ) : (
                    <React.Suspense fallback={<Loader />}>
                      <AdminLayout>
                        <Component {...props} />
                      </AdminLayout>
                    </React.Suspense>
                  )}
                </>
              )}
              key={path}
              path={path}
              {...rest}
            />
          )
        })}
      </Switch>
    </AppRouter>
  )
}

export default Router
