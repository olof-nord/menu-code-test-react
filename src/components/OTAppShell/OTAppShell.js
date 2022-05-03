import React, { useContext } from 'react';
import { AppShell, Grid, Group, Header, Indicator } from '@mantine/core';
import { Basket, LetterO, LetterT } from 'tabler-icons-react';

import { Menu } from '../Menu/Menu';
import OrderContext from '../OrderState/OrderState';

export function OTAppShell() {

    const { countOrders } = useContext(OrderContext);

    return (
        <AppShell
            header={
                <Header fixed height={70} p='xs'>
                    <Grid gutter={0} align="center">
                        <Grid.Col span={6}>
                            <Group spacing={0}>
                                <LetterO strokeWidth={3}/>
                                <LetterT strokeWidth={3}/>
                            </Group>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Group position="right" spacing="md">
                                <Indicator inline label={countOrders(2)} size={16} color="lime">
                                    <Indicator label={countOrders(1)} size={16} position="top-start" color="indigo"/>
                                    <Basket size={48} strokeWidth={2} />
                                </Indicator>
                            </Group>
                        </Grid.Col>
                    </Grid>
                </Header>
            }
        >
            <Menu/>
        </AppShell>
    );
}