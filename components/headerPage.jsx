import React from 'react'
import styled from 'styled-components'
import randomColor from 'random-color'

const Container = styled.section`
  margin-bottom: 120px;
`

const Name = styled.h1`
  font-size: 80px;
  font-weight: 400px;
  margin-bottom: 4px;
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
`

const HeaderPage = props => (
  <Container>
    <Name>
      <FirstName color={randomColor(0.3, 0.99).hexString()}>Jhonatan</FirstName>
      <LastName color={randomColor(0.3, 0.99).hexString()}> Silva</LastName>
    </Name>
    <Description>{props.description}</Description>
  </Container>
)

export default HeaderPage
