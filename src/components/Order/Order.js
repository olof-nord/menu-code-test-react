import React, { useContext } from 'react';
import { Button, Container, Space } from '@mantine/core';

import OrderContext from '../OrderState/OrderState';
import { MenuSection } from '../MenuSection/MenuSection';

export function Order() {
    const { getOrders, getTotal } = useContext(OrderContext);

    return (
        <Container size='xl'>
            <MenuSection section={getOrders(1)} title='Menu 1' />
            <MenuSection section={getOrders(2)} title='Menu 2' />

            <Space h="lg" />

            <Button fullWidth>
                Total bill is {getTotal()} €
            </Button>
        </Container>
    );
}
