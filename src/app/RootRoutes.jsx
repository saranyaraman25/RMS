import React from 'react'
import { Redirect } from 'react-router-dom'
import dashboardRoutes from './views/dashboard/DashboardRoutes'


const redirectRoute = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/dashboard" />,
    },
]

const errorRoute = [
    {
        component: () => <Redirect to="/session/404" />,
    },
]

const routes = [
    ...dashboardRoutes,
    ...redirectRoute,
    ...errorRoute,
]

export default routes
