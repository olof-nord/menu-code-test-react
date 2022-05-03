import React, { useContext } from 'react';
import { AppShell, Group, Header, Text } from '@mantine/core';
import { LetterO, LetterT } from 'tabler-icons-react';

import { Menu } from '../Menu/Menu';
import OrderContext from '../OrderState/OrderState';

export function OTAppShell() {

    const { orders } = useContext(OrderContext);

    return (
        <AppShell
            header={
                <Header height={70} p='md'>
                    <Group spacing={0}>
                        <LetterO strokeWidth={3}/>
                        <LetterT strokeWidth={3}/>
                    </Group>
                    <Group position="right">
                        <Text>Current total # of orders: {orders.length}</Text>
                    </Group>
                </Header>
            }
        >
            <Menu/>
        </AppShell>
    );
}