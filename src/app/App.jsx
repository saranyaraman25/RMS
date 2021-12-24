import '../fake-db'
import React from 'react'
import { Store } from './redux/Store'
import { Provider } from 'react-redux'
import { AuthProvider } from 'app/contexts/JWTAuthContext'
import { Routes, Route, Navigate, useRoutes } from 'react-router-dom'
import { SettingsProvider } from 'app/contexts/SettingsContext'
import { MatxTheme } from 'app/components'
import { AllPages } from './routes/routes'
import { ApolloProvider } from "@apollo/client";
import client from './apollo/apolloClient';

const App = () => {
    const all_pages = useRoutes(AllPages())

    return (
        <Provider store={Store}>
            <SettingsProvider>
                <MatxTheme>
                    <ApolloProvider client={client}>
                        <AuthProvider>
                            {all_pages}
                            <Routes>
                                <Route path='/' element={<Navigate to="/dashboard" />} />
                            </Routes>
                        </AuthProvider>
                    </ApolloProvider>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
}

export default App
