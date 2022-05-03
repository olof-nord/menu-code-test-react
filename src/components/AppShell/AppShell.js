import React, { useContext } from 'react';
import { AppShell as MantineAppShell, Grid, Group, Header, Indicator, UnstyledButton } from '@mantine/core';
import { Basket, LetterO, LetterT } from 'tabler-icons-react';
import { Link } from 'react-router-dom';

import OrderContext from '../OrderState/OrderState';

export function AppShell({ children }) {

    const { countOrders } = useContext(OrderContext);

    return (
        <MantineAppShell
            fixed
            header={
                <Header height={70} p='xs'>
                    <Grid gutter={0} align="center">
                        <Grid.Col span={6}>
                            <Group spacing={0}>
                                <UnstyledButton component={Link} to='/'>
                                    <LetterO strokeWidth={3} />
                                    <LetterT strokeWidth={3} />
                                </UnstyledButton>
                            </Group>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Group position='right' spacing='md'>
                                <UnstyledButton component={Link} to='/orders'>
                                    <Indicator inline label={countOrders(2)} size={16} color='lime'>
                                        <Indicator label={countOrders(1)} size={16} position='top-start'
                                                   color='indigo' />
                                        <Basket size={48} strokeWidth={2} />
                                    </Indicator>
                                </UnstyledButton>
                            </Group>
                        </Grid.Col>
                    </Grid>
                </Header>
            }
        >
            {children}
        </MantineAppShell>
    );
}