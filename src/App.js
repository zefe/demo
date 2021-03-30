import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routes/AppRouter';
import { store } from './stateManagement/store/store';

export const App = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}
