import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from 'react-query';

import OrderStateProviderMock from '../../utils/orderStateProviderMock';
import { Order } from './Order';

describe('App Order', () => {
    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: false } }
    });

    test('should display menu valid notification if order is OK', async () => {

        const orderContextMock = {
            getOrders: jest.fn().mockReturnValue([]),
            getTotal: jest.fn(),
            verifyOrders: jest.fn().mockReturnValue([])
        };

        render(
            <QueryClientProvider client={queryClient}>
                <OrderStateProviderMock value={orderContextMock}>
                    <MantineProvider>
                        <NotificationsProvider autoClose={false}>
                            <Order />
                        </NotificationsProvider>
                    </MantineProvider>
                </OrderStateProviderMock>
            </QueryClientProvider>
        );

        const checkout = await screen.findByRole('button');

        fireEvent.click(checkout);

        const notificationTitle = await screen.findByText(/Menu valid/i);
        expect(notificationTitle).toBeInTheDocument();
    });

    test('should display menu invalid notification if order is not ok', async () => {

        const orderContextMock = {
            getOrders: jest.fn().mockReturnValue([]),
            getTotal: jest.fn(),
            verifyOrders: jest.fn().mockReturnValue([
                "Menu 1 needs at least two courses!"
            ])
        };

        render(
            <QueryClientProvider client={queryClient}>
                <OrderStateProviderMock value={orderContextMock}>
                    <MantineProvider>
                        <NotificationsProvider autoClose={false}>
                            <Order />
                        </NotificationsProvider>
                    </MantineProvider>
                </OrderStateProviderMock>
            </QueryClientProvider>
        );

        const checkout = await screen.findByRole('button');

        fireEvent.click(checkout);

        const notificationTitle = await screen.findByText(/Menu invalid/i);
        expect(notificationTitle).toBeInTheDocument();
    });
});