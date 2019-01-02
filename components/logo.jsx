import styled, { css } from 'styled-components'
import { breakpoint } from '../utils'

const Logo = styled.a`
  position: relative;
  width: 38px;
  height: 38px;

  ${breakpoint('for-phone-only', css`
    width: 28px;
    height: 28px;
    margin-bottom: 40px;
  `)}

  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 4px solid;
    border-radius: 50%;
    position: absolute;
  }

  &::before {
    border-color: ${props => props.color1};
    top: -50%;
    right: -50%;
  }

  &::after {
    border-color: ${props => props.color2};
    bottom: -50%;
  }
`

export default Logo
