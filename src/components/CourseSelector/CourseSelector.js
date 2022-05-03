import React, { useContext } from 'react';
import { Avatar, Button, Group, Text } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { Check } from 'tabler-icons-react';

import OrderContext from '../OrderState/OrderState';

export function CourseSelector({ course }) {
    const { addOrder } = useContext(OrderContext);

    const addNewItem = (id, person) => {
        addOrder((prevItems) => [
            ...prevItems,
            {
                course,
                person
            }
        ]);

        showNotification({
            title: 'Course added',
            message: `${course.name} was added to the menu 🚀`,
            icon: <Check size={18} />,
            color: "teal"
        })
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
