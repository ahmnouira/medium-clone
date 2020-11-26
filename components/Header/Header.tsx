import Link from 'next/link'
import React, { FunctionComponent } from 'react'

import { Center } from '../Center'
import { Container, Logo } from './style'

export const Header: FunctionComponent = () => {
  return (
    <Container>
      <Center>
        <Logo>
          <Link href='/'>
            <a>What's Next ?!</a>
          </Link>
        </Logo>
      </Center>
    </Container>
  )
}
