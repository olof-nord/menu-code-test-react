import React from 'react';
import { AppShell, Header, Title } from '@mantine/core';

import { Menu } from '../Menu/Menu';

export function OTAppShell() {

    return (
        <AppShell
            header={
                <Header height={70} p='md'>
                    <Title order={3}>Menu</Title>
                </Header>
            }
        >
            <Menu/>
        </AppShell>
    );
}