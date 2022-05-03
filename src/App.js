import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AppShell } from './components/AppShell/AppShell';
import { OrderStateProvider } from './components/OrderState/OrderStateProvider';
import { Menu } from './components/Menu/Menu';
import { Order } from './components/Order/Order';

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <MantineProvider>
                    <NotificationsProvider>
                        <OrderStateProvider>
                            <AppShell>
                                <Routes>
                                    <Route
                                        path='/'
                                        element={
                                            <Menu />
                                        }
                                    />
                                    <Route
                                        path='/orders'
                                        element={
                                            <Order />
                                        }
                                    />
                                    <Route
                                        path='*'
                                        element={<Navigate replace to='/' />}
                                    />
                                </Routes>
                            </AppShell>
                        </OrderStateProvider>
                    </NotificationsProvider>
                </MantineProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

render(<App />, document.getElementById('root'));
