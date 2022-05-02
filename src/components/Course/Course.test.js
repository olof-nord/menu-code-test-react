import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';

import { Course } from './Course';

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
});