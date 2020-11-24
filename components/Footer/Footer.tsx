import React, { FunctionComponent } from 'react';
import { Container } from './style';
import { Center } from '../Center';

export const Footer: FunctionComponent = () => {

    const currentYear = new Date().getFullYear();

    return (
        <Container>
            <Center>
                <a href="https://github/ahmnouira">Ahmed Nouira</a> {currentYear}
            </Center>
        </Container>
    )

}