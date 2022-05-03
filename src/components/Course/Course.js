import React, { useState } from 'react';
import { Card, Drawer, Group, Image, Text } from '@mantine/core';

import { CourseSelector } from '../CourseSelector/CourseSelector';

export function Course({course}) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const imageName = course.name.replace(' ', '-').replace('Pâté', 'pate').toLowerCase();

    return (
        <>
            <Card shadow='sm' p='lg' onClick={() => setDrawerOpen(true)}>
                <Card.Section>
                    <Image src={require(`../../images/${imageName}.jpg`)} height={160} alt={`${course.name} photo`} />
                </Card.Section>

                <Group position='apart'>
                    <Text>{course.name}</Text>
                    <Text>{course.price} €</Text>
                </Group>
            </Card>

            <Drawer
                opened={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                title={`Add ${course.name} to menu?`}
                padding='xl'
                size='25%'
                position='bottom'
            >
                <CourseSelector course={course} />
            </Drawer>
        </>
    );
}
