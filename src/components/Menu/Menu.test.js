import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Menu } from './Menu';

describe('App Menu', () => {
    test('should show the loading message', async () => {

        const queryClient = new QueryClient({
            defaultOptions: { queries: { retry: false } }
        });

        render(
            <QueryClientProvider client={queryClient}>
                <Menu />
            </QueryClientProvider>
        );

        const loading = await screen.getByText(/Loading…/i);
        expect(loading).toBeInTheDocument();
    });
});