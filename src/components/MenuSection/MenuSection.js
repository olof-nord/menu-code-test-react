import React from 'react';
import { Grid, Text, Title } from '@mantine/core';

import { Course } from '../Course/Course';

export function MenuSection({section, title}) {
    return (
        <Grid gutter='sm'>
            <Grid.Col span={12}>
                <Title order={2}>{ title }</Title>
            </Grid.Col>

            {section.length === 0 && (
                <Text>No courses. Return to the start page and select a course for it to be added to the menu.</Text>
            )}

            {section.map((course) => (
                <Grid.Col sm={6} lg={3} key={course.id}>
                    <Course course={course}></Course>
                </Grid.Col>
            ))}
        </Grid>
    );
}
