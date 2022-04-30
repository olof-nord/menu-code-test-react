import React, { useState } from 'react';
import { Avatar, Group, Paper, Text } from '@mantine/core';

export function CourseDrawer() {
    const [menuOne, selectMenuOne] = useState(false);
    const [menuTwo, selectMenuTwo] = useState(false);

    return (
        <>
            <Paper radius="md" style={{ background: menuOne ? 'gray' : 'white' }}>
                <Group onClick={() => selectMenuOne(!menuOne)} >
                    <Avatar radius='xl' />
                    <Text>Person 1</Text>
                </Group>
            </Paper>

            <Paper radius="md" style={{ background: menuTwo ? 'gray' : 'white' }}>
                <Group onClick={() => selectMenuTwo(!menuTwo)}>
                    <Avatar radius='xl' />
                    <Text>Person 2</Text>
                </Group>
            </Paper>
        </>
    );
}
