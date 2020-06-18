import React from 'react'
import styled, { css } from 'styled-components'
import randomColor from 'random-color'
import { breakpoint } from '../utils'

const Container = styled.section`
  margin-bottom: 80px;

  ${breakpoint('for-phone-only', css`
    margin-bottom: 40px;
  `)}
`

const Name = styled.h1`
  font-size: 80px;
  font-weight: 400;
  margin-bottom: 8px;

  ${breakpoint('for-phone-only', css`
    font-size: 40px;
  `)}
`

const FirstName = styled.span`
  color: ${props => props.color};
`

const LastName = styled.span`
  color: ${props => props.color};
`

const Description = styled.h2`
  font-size: 40px;
  max-width: 620px;
  font-weight: 300;

  ${breakpoint('for-phone-only', css`
    font-size: 24px;
    max-width: 100%;
  `)}
`

const HeaderPage = props => (
  <Container>
    <Name>
      <FirstName
        color={randomColor(0.3, 0.99).hexString()}
      >
        {props.title}
      </FirstName>
    </Name>
    <Description>{props.description}</Description>
  </Container>
)

export default HeaderPage
