import React, { useState } from 'react';
import { Card, Drawer, Group, Image, Text, UnstyledButton } from '@mantine/core';

import { CourseSelector } from '../CourseSelector/CourseSelector';

export function Course({course}) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const imageName = course.name.replace(' ', '-').replace('Pâté', 'pate').toLowerCase();

    return (
        <>
            <UnstyledButton style={{ width: "100%", height: "100%" }} onClick={() => setDrawerOpen(true)}>
                <Card shadow='sm' p='lg'>
                    <Card.Section>
                        <Image src={require(`../../images/${imageName}.jpg`)} height={160} alt={`${course.name} photo`} />
                    </Card.Section>

                    <Group position='apart'>
                        <Text>{course.name}</Text>
                        <Text>{course.price} €</Text>
                    </Group>
                </Card>
            </UnstyledButton>

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
