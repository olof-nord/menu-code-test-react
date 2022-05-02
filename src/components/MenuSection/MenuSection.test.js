import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';

import { MenuSection } from './MenuSection';
import menu from '../../server/static/menu-data.json';

describe('App Menu Section', () => {
    test('should show the menu section', async () => {

        render(
            <MantineProvider>
                <MenuSection section={menu.starters} title='Starters' />
            </MantineProvider>
        );

        const header = await screen.findByText(/Starters/i);
        expect(header).toBeInTheDocument();
    });
});