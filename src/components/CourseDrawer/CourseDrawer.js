import React, { useContext } from 'react';
import { Avatar, Button, Group, Text } from '@mantine/core';

import OrderContext from '../OrderState/OrderState';

export function CourseDrawer({ course }) {
    const { addOrder } = useContext(OrderContext);

    const addNewItem = (id, person) => {
        addOrder(prevItems => [
            ...prevItems,
            {
                course,
                person
            }
        ]);
    };

    return (
        <Group>
            <Button onClick={() => addNewItem(course, 1)} leftIcon={<Avatar size={25} />}>
                <Text>Person 1</Text>
            </Button>

            <Button onClick={() => addNewItem(course, 2)} leftIcon={<Avatar size={25} />}>
                <Text>Person 2</Text>
            </Button>
        </Group>
    );
}
