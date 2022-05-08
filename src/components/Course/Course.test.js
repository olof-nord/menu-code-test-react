import React from 'react';
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';

import { Course } from './Course';

import { CourseSelector } from '../CourseSelector/CourseSelector';
jest.mock('../CourseSelector/CourseSelector');

describe('App Course', () => {
    test('should show the course', async () => {

        const course = {
            id: 1,
            name: 'Soup',
            price: 3
        };

        render(
            <MantineProvider>
                <Course course={course} />
            </MantineProvider>
        );

        const soup = await screen.findByText(/Soup/i);
        const price = await screen.findByText(/3 €/i);

        expect(soup).toBeInTheDocument();
        expect(price).toBeInTheDocument();
    });

    test('should allow opening the course selection drawer', async () => {

        CourseSelector.mockImplementation(() => <div>CourseSelectorMock</div>);

        const course = {
            id: 1,
            name: 'Soup',
            price: 3
        };

        render(
            <MantineProvider>
                <Course course={course} />
            </MantineProvider>
        );

        const courseCard = await screen.findByRole('button');

        fireEvent.click(courseCard);

        const drawerTitle = await screen.findByText(/Add Soup to menu?/i);
        expect(drawerTitle).toBeInTheDocument();
    });

    test('should allow closing the course selection drawer', async () => {

        CourseSelector.mockImplementation(() => <div>CourseSelectorMock</div>);

        const course = {
            id: 1,
            name: 'Soup',
            price: 3
        };

        render(
            <MantineProvider>
                <Course course={course} />
            </MantineProvider>
        );

        // open drawer
        const courseCard = await screen.findByRole('button');
        fireEvent.click(courseCard);

        // close drawer
        const drawerCloseButton = await screen.findByRole('button');
        fireEvent.click(drawerCloseButton);

        await waitForElementToBeRemoved(drawerCloseButton);

        const drawerTitle = await screen.queryByText(/Add Soup to menu?/i);
        expect(drawerTitle).not.toBeInTheDocument();
    });
});