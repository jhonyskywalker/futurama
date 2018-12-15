import React from 'react'
import styled from 'styled-components'

import Container from './container'
import Logo from './logo'
import Menu from './menu'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
`

const Header = () => (
  <Container>
    <HeaderStyled>
      <Logo />
      <Menu />
    </HeaderStyled>
  </Container>
)

export default Header
