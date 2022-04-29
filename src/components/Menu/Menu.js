import React from 'react';
import { Container, Grid } from '@mantine/core';

import { useGetMenu } from '../../utils/fetchers';
import { MenuSection } from '../MenuSection/MenuSection';

export function Menu() {
    const { data: menu, isLoading } = useGetMenu();

    if (isLoading || !menu) {
        return <div>Loading…</div>;
    }

    return (
        <Container size='xl'>
            <Grid gutter='sm'>
                <MenuSection section={menu.starters} title='Starters'/>
                <MenuSection section={menu.mains} title='Mains'/>
                <MenuSection section={menu.desserts} title='Desserts'/>
            </Grid>
        </Container>
    );
}
