import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Menu } from './Menu';

describe('App Menu', () => {

    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: false } }
    });

    test('should render the menu sections', async () => {

        render(
            <QueryClientProvider client={queryClient}>
                <Menu />
            </QueryClientProvider>
        );

        const starters = await screen.findByText(/Starters/i);
        const mains = await screen.findByText(/Starters/i);
        const desserts = await screen.findByText(/Starters/i);

        expect(starters).toBeInTheDocument();
        expect(mains).toBeInTheDocument();
        expect(desserts).toBeInTheDocument();
    });
});