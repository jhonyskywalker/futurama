import React from 'react'
import styled from 'styled-components'
import randomColor from 'random-color'

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
      <Logo
        href="/"
        title="Jhonatan Silva / Resume"
        color1={randomColor(0.3, 0.99).hexString()}
        color2={randomColor(0.3, 0.99).hexString()}
      />
      <Menu />
    </HeaderStyled>
    <HeaderPage description={props.description} />
  </>
)

export default Header
