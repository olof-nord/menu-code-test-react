import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import { OTAppShell } from './components/OTAppShell/OTAppShell';
import { OrderStateProvider } from './components/OrderState/OrderStateProvider';

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider>
                <NotificationsProvider>
                    <OrderStateProvider>
                        <OTAppShell />
                    </OrderStateProvider>
                </NotificationsProvider>
            </MantineProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

render(<App />, document.getElementById('root'));
