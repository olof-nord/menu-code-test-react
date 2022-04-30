import React from 'react';
import { AppShell, Group, Header } from '@mantine/core';
import { LetterO, LetterT } from 'tabler-icons-react';

import { Menu } from '../Menu/Menu';

export function OTAppShell() {

    return (
        <AppShell
            header={
                <Header height={70} p='md'>
                    <Group spacing={0}>
                        <LetterO strokeWidth={3}/>
                        <LetterT strokeWidth={3}/>
                    </Group>
                </Header>
            }
        >
            <Menu/>
        </AppShell>
    );
}