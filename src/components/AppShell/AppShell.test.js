import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';

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
});