import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const Candidates = Loadable(lazy(() => import('./Candidates')))

const candidatesRoutes = [
  {
    path: '/candidates',
    element: <Candidates />,
  },
]

export default candidatesRoutes
