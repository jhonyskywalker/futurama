import React from 'react'
import styled from 'styled-components'

const Name = styled.h1`
  font-size: 60px;
  font-weight: 400px;
  margin-bottom: 4px;
`

const FirstName = styled.span`
  color: #4f9450;
`

const LastName = styled.span`
  color: #53c1af;
`

const Description = styled.h2`
  font-size: 32px;
  max-width: 520px;
`

const HeaderPage = props => (
  <section>
    <Name>
      <FirstName>Jhonatan</FirstName>
      <LastName> Silva</LastName>
    </Name>
    <Description>{props.description}</Description>
  </section>
)

export default HeaderPage
