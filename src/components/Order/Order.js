import React, { useContext } from 'react';
import { Button, Container, Space } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { Check, X } from 'tabler-icons-react';

import { useGetMains } from '../../utils/fetchers';
import OrderContext from '../OrderState/OrderState';
import { MenuSection } from '../MenuSection/MenuSection';

export function Order() {
    const { data: menu, isLoading } = useGetMains();

    const { getOrders, getTotal, verifyOrders } = useContext(OrderContext);
    const menuTotal = getTotal();

    if (isLoading || !menu) {
        return <div>Loading…</div>;
    }

    const checkItems = () => {
        const issues = verifyOrders(menu.mains);

        issues.map((issue, index) => {
            showNotification({
                title: 'Menu invalid',
                message: issue,
                icon: <X size={18} />,
                color: 'red',
                autoClose: 5000 + index * 50,
            });

        });

        if (issues.length === 0) {
            showNotification({
                title: 'Menu valid',
                message: `This is a valid menu combination 👍`,
                icon: <Check size={18} />,
                color: 'teal'
            });

        }
    };

    return (
        <Container size='xl'>
            <MenuSection section={getOrders(1)} title='Menu 1' />
            <MenuSection section={getOrders(2)} title='Menu 2' />

            <Space h="lg" />

            <Button fullWidth onClick={() => checkItems()}>
                Checkout { menuTotal !== 0 && `(${menuTotal} €)` }
            </Button>
        </Container>
    );
}
