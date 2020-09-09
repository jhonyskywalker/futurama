import React from 'react'
import styled, { css } from 'styled-components'
import randomColor from 'random-color'
import { breakpoint } from '../utils'

import contact from '../data/contact'

import Template from '../components/template'

const headOptions = {
  title: 'Contact',
  description: 'Say hello'
}

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`

const ListItem = styled.li`
  margin-bottom: 40px;
  margin-right: 80px;
  display: inline-block;

  ${breakpoint('for-phone-only', css`
    margin-bottom: 24px;
    margin-right: 0px;
  `)}
`

const Title = styled.h2`
  color: ${props => props.color};
  font-weight: 300;
`

const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: ${props => props.color};
  }
`

const Contact = () => (
  <Template headOptions={headOptions}>
    <List>
      {contact.map(contact => (
        <ListItem key={contact.name}>
          <Title color={randomColor(0.3, 0.99).hexString()}>
            {contact.name}
          </Title>
          <Link
            color={randomColor(0.3, 0.99).hexString()}
            title={contact.name}
            href={contact.path}
            target="_blank"
            rel="noopener"
          >
            {contact.mask}
          </Link>
        </ListItem>
      ))}
    </List>
  </Template>
)

export default Contact
