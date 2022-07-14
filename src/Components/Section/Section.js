import React from 'react';
import { Container, Paper, Text } from '@mantine/core';
import { CirclePlus } from 'tabler-icons-react';
import './style.css';

export default function Section(props) {
    let { title } = props;
    return (
        <Container>
            <Paper p="md" radius="xs" size="xl" px="xl" withBorder>
                <Text align='left' size='xl' weight={700}>{title}</Text>
                <CirclePlus
                    size={100} // set custom `width` and `height`
                    strokeWidth={0.5}
                />
            </Paper>
        </Container>
    )
}

Section.defaultProps = {
    title: 'Title Here'
}