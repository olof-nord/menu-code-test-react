import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from 'react-query';

import OrderStateProviderMock from '../../utils/orderStateProviderMock';
import { Order } from './Order';

describe('App Order', () => {
    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: false } }
    });

    test('should show the loading message', async () => {

        const orderContextMock = {
            getOrders: jest.fn(),
            getTotal: jest.fn(),
            verifyOrders: jest.fn().mockReturnValue([])
        };

        render(
            <QueryClientProvider client={queryClient}>
                <OrderStateProviderMock value={orderContextMock}>
                    <MantineProvider>
                        <NotificationsProvider>
                            <Order />
                        </NotificationsProvider>
                    </MantineProvider>
                </OrderStateProviderMock>
            </QueryClientProvider>
        );

        const loading = await screen.findByText(/Loading…/i);
        expect(loading).toBeInTheDocument();
    });
});