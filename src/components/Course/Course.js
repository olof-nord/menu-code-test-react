import React from 'react';
import { Card, Group, Image, Text } from '@mantine/core';

export function Course({course}) {

    const imageName = course.name.replace(' ', '-').replace('Pâté', 'pate').toLowerCase();

    return (
        <Card shadow='sm' p='lg'>
            <Card.Section>
                <Image src={require(`../../images/${imageName}.jpg`)} height={160} alt={`${course.name} photo`} />
            </Card.Section>

            <Group position='apart'>
                <Text>{ course.name }</Text>
                <Text>{ course.price } €</Text>
            </Group>
        </Card>
    );
}
