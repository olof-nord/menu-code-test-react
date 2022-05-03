import React, { useContext } from 'react';
import { Checkbox, Group } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { Check, X } from 'tabler-icons-react';

import OrderContext from '../OrderState/OrderState';

export function CourseSelector({ course }) {
    const { addOrder, removeOrder, isAlreadyOrdered } = useContext(OrderContext);

    const addItem = (personId) => {
        const result = addOrder({ course, personId });

        if (result) {
            showNotification({
                title: 'Course added',
                message: `${course.name} was added to Menu ${personId} 🚀`,
                icon: <Check size={18} />,
                color: 'teal'
            });

        } else {
            showNotification({
                title: 'Not added',
                message: `${course.name} was not added to Menu ${personId} ❗`,
                icon: <X size={18} />,
                color: 'red'
            });
        }
    };

    const removeItem = (personId) => {
        removeOrder({course, personId});

        showNotification({
            title: 'Course removed',
            message: `${course.name} was removed from Menu ${personId} 💥`,
            color: 'red'
        });
    };

    return (
        <Group>
            <Checkbox
                onChange={(event) => {
                    if (event.currentTarget.checked) {
                        addItem(1);
                    } else {
                        removeItem(1)
                    }
                }}
                color='indigo'
                size='md'
                label='Person 1'
                checked={isAlreadyOrdered(course, 1)}
            />

            <Checkbox
                onChange={(event) => {
                    if (event.currentTarget.checked) {
                        addItem(2);
                    } else {
                        removeItem(2);
                    }
                }}
                color='lime'
                size='md'
                label='Person 2'
                checked={isAlreadyOrdered(course, 2)}
            />
        </Group>
    );
}
