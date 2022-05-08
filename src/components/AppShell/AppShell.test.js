import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import OrderStateProviderMock from '../../utils/orderStateProviderMock';
import { AppShell } from './AppShell';

describe('App Shell', () => {
    test('should render the navigation links', async () => {

        const orderContextMock = {
            countOrders: jest.fn()
        };

        render(
            <BrowserRouter>
                <OrderStateProviderMock value={orderContextMock}>
                    <MantineProvider>
                        <AppShell />
                    </MantineProvider>
                </OrderStateProviderMock>
            </BrowserRouter>
        );

        const links = await screen.findAllByRole('link');

        expect(links[0].getAttribute('href')).toBe('/');
        expect(links[1].getAttribute('href')).toBe('/orders');
    });

    test('should show Menu if on the home page', async () => {

        const history = createMemoryHistory();

        const orderContextMock = {
            countOrders: jest.fn()
        };

        render(
            <Router location={history.location} navigator={history}>
                <OrderStateProviderMock value={orderContextMock}>
                    <MantineProvider>
                        <AppShell />
                    </MantineProvider>
                </OrderStateProviderMock>
            </Router>
        );

        const title = await screen.findByText('Menu');
        expect(title).toBeInTheDocument();
    });

    test('should render Order title if on the order page', async () => {

        const history = createMemoryHistory();
        history.push('/orders');

        const orderContextMock = {
            countOrders: jest.fn()
        };

        render(
            <Router location={history.location} navigator={history}>
                <OrderStateProviderMock value={orderContextMock}>
                    <MantineProvider>
                        <AppShell />
                    </MantineProvider>
                </OrderStateProviderMock>
            </Router>
        );

        const title = await screen.findByText('Order');
        expect(title).toBeInTheDocument();
    });
});