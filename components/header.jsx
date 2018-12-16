import React from 'react'
import styled from 'styled-components'

import Logo from './logo'
import Menu from './menu'
import HeaderPage from './headerPage'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 120px;
`

const Header = props => (
  <>
    <HeaderStyled>
      <Logo />
      <Menu />
    </HeaderStyled>
    <HeaderPage description={props.description} />
  </>
)

export default Header
