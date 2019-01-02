import React from 'react'
import styled, { css } from 'styled-components'
import randomColor from 'random-color'
import { breakpoint } from '../utils'

import Logo from './logo'
import Menu from './menu'
import HeaderPage from './headerPage'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 120px;

  ${breakpoint('for-phone-only', css`
    margin-bottom: 40px;
    flex-direction: column;
    align-items: flex-start;
  `)}
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
