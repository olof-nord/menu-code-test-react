import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Menu } from './Menu';

describe('App Menu', () => {

    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: false } }
    });

    test('should show the loading message', async () => {

        render(
            <QueryClientProvider client={queryClient}>
                <Menu />
            </QueryClientProvider>
        );

        const loading = await screen.findByText(/Loading…/i);
        expect(loading).toBeInTheDocument();
    });
});