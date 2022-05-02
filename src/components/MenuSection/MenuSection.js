import React from 'react';
import { Grid, Title } from '@mantine/core';

import { Course } from '../Course/Course';

export function MenuSection({section, title}) {
    return (
        <Grid gutter='sm'>
            <Grid.Col span={12}>
                <Title order={2}>{ title }</Title>
            </Grid.Col>

            {section.map((course) => (
                <Grid.Col sm={6} lg={3} key={course.id}>
                    <Course course={course}></Course>
                </Grid.Col>
            ))}
        </Grid>
    );
}
