import React from 'react'
import styled, { css } from 'styled-components'
import randomColor from 'random-color'
import { breakpoint } from '../utils'

const Container = styled.div`
  margin-bottom: 120px;

  ${breakpoint('for-phone-only', css`
    margin-bottom: 40px;
  `)}
`

const Title = styled.h1`
  font-weight: 400;
  margin-bottom: 8px;
  color: ${props => props.color};
`

const SubTitle = styled.h2`
  max-width: 620px;
  font-weight: 300;

  ${breakpoint('for-phone-only', css`
    max-width: 100%;
  `)}
`

const HeaderPage = props => (
  <Container>
    <Title
      color={randomColor(0.3, 0.99).hexString()}
    >
      {props.title}
    </Title>
    <SubTitle>{props.description}</SubTitle>
  </Container>
)

export default HeaderPage
