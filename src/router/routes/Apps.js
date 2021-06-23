import { lazy } from 'react'
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/',
    exact: true,
    public: true,
    component: lazy(() => import('../../pages/home')),
  },
  {
    path: '/about',
    exact: true,
    public: true,
    component: lazy(() => import('../../pages/about')),
  },
  {
    path: '/settings',
    exact: true,
    public: true,
    component: lazy(() => import('../../pages/settings')),
  },
  {
    path: '/login',
    exact: true,
    public: true,
    component: lazy(() => import('../../pages/login')),
    layout: 'BlankLayout'
  },
  {
    path: '*',
    exact: true,
    public: true,
    component: lazy(() => import('../../pages/404')),
    layout: 'BlankLayout'
  },
  
]
