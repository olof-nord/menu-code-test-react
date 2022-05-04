import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import OrderStateProviderMock from '../../utils/orderStateProviderMock';
import { CourseSelector } from './CourseSelector';

describe('App Course Selector', () => {
    test('should render the two order checkboxes', async () => {

        const orderContextMock = {
            addOrder: jest.fn(),
            removeOrder: jest.fn(),
            isAlreadyOrdered: jest.fn().mockReturnValue(false)
        };

        render(
            <OrderStateProviderMock value={orderContextMock}>
                <MantineProvider>
                    <NotificationsProvider>
                        <CourseSelector />
                    </NotificationsProvider>
                </MantineProvider>
            </OrderStateProviderMock>
        );

        const checkboxes = await screen.findAllByRole('checkbox');

        expect(checkboxes.length).toBe(2);
    });
});