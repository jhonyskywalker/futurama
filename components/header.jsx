import React from 'react'
import styled, { css } from 'styled-components'
import randomColor from 'random-color'
import { breakpoint } from '../utils'

import Menu from './menu'
import HeaderPage from './headerPage'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
  max-width: 720px;

  ${breakpoint('for-phone-only', css`
    margin-bottom: 40px;
    flex-direction: column;
    align-items: flex-start;
  `)}
`

const Header = props => (
  <>
    <HeaderStyled>
      <Menu />
    </HeaderStyled>
    <HeaderPage
      title={props.title}
      description={props.description}
    />
  </>
)

export default Header
