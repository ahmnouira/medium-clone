import React, { FunctionComponent } from 'react'

import { Center } from '../Center'
import { Container } from './style'

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <Center>
        <a href='https://github/ahmnouira'>Ahmed Nouira</a> {currentYear}
      </Center>
    </Container>
  )
}
