import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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

    test('should display success notification when a course is added', async () => {

        const orderContextMock = {
            addOrder: jest.fn().mockReturnValue(true),
            removeOrder: jest.fn(),
            isAlreadyOrdered: jest.fn().mockReturnValue(false)
        };

        const course = {
            id: 8,
            name: 'Vegetarian lasagna',
            price: 12
        };

        render(
            <OrderStateProviderMock value={orderContextMock}>
                <MantineProvider>
                    <NotificationsProvider autoClose={false}>
                        <CourseSelector course={course}/>
                    </NotificationsProvider>
                </MantineProvider>
            </OrderStateProviderMock>
        );

        const checkboxes = await screen.findAllByRole('checkbox');

        fireEvent.click(checkboxes[0]);

        const personOneNotificationMessage = await screen.findByText(/Vegetarian lasagna was added to Menu 1/i);
        expect(personOneNotificationMessage).toBeInTheDocument();

        fireEvent.click(checkboxes[1]);

        const personTwoNotificationMessage = await screen.findByText(/Vegetarian lasagna was added to Menu 2/i);
        expect(personTwoNotificationMessage).toBeInTheDocument();
    });

    test('should display failure notification when a course is not added', async () => {

        const orderContextMock = {
            addOrder: jest.fn().mockReturnValue(false),
            removeOrder: jest.fn(),
            isAlreadyOrdered: jest.fn().mockReturnValue(false)
        };

        const course = {
            id: 8,
            name: 'Vegetarian lasagna',
            price: 12
        };

        render(
            <OrderStateProviderMock value={orderContextMock}>
                <MantineProvider>
                    <NotificationsProvider autoClose={false}>
                        <CourseSelector course={course}/>
                    </NotificationsProvider>
                </MantineProvider>
            </OrderStateProviderMock>
        );

        const checkboxes = await screen.findAllByRole('checkbox');

        fireEvent.click(checkboxes[0]);

        const personOneNotificationMessage = await screen.findByText(/Vegetarian lasagna was not added to Menu 1/i);
        expect(personOneNotificationMessage).toBeInTheDocument();

        fireEvent.click(checkboxes[1]);

        const personTwoNotificationMessage = await screen.findByText(/Vegetarian lasagna was not added to Menu 2/i);
        expect(personTwoNotificationMessage).toBeInTheDocument();
    });

    test('should display notification when a course is removed', async () => {

        const orderContextMock = {
            addOrder: jest.fn(),
            removeOrder: jest.fn(),
            isAlreadyOrdered: jest.fn().mockReturnValue(true)
        };

        const course = {
            id: 8,
            name: 'Vegetarian lasagna',
            price: 12
        };

        render(
            <OrderStateProviderMock value={orderContextMock}>
                <MantineProvider>
                    <NotificationsProvider autoClose={false}>
                        <CourseSelector course={course}/>
                    </NotificationsProvider>
                </MantineProvider>
            </OrderStateProviderMock>
        );

        const checkboxes = await screen.findAllByRole('checkbox');

        fireEvent.click(checkboxes[0]);

        const personOneNotificationMessage = await screen.findByText(/Vegetarian lasagna was removed from Menu 1/i);
        expect(personOneNotificationMessage).toBeInTheDocument();

        fireEvent.click(checkboxes[1]);

        const personTwoNotificationMessage = await screen.findByText(/Vegetarian lasagna was removed from Menu 2/i);
        expect(personTwoNotificationMessage).toBeInTheDocument();
    });

});