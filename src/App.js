import "regenerator-runtime/runtime";
import React from 'react';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Menu } from "./components/Menu/Menu";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Menu/>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

render(<App />, document.getElementById('root'));
