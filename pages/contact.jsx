import React from 'react'
import styled from 'styled-components'
import randomColor from 'random-color'

import Template from '../components/template'

const headOptions = {
  title: 'Contact',
  description: 'Did you liked about me, tell me more about you?'
}

const contacts = [
  {
    name: 'Calendly :',
    mask: '--> /jhonatansilva',
    path: 'https://calendly.com/jhonatansilva/30min'
  },
  {
    name: 'Email :',
    mask: 'talkto@jhonatansilva.com',
    path: 'mailto:talkto@jhonatansilva.com'
  },
  {
    name: 'Cellphone :',
    mask: '+55 (11) 99213-9282',
    path: 'tellto:+55 (11) 99213-9282'
  },
  {
    name: 'Skype :',
    mask: 'skype@jhonatansilva.com',
    path: 'skypeto:skype@jhonatansilva.com'
  },
  {
    name: 'Github :',
    mask: '<JhonySkywalker public="true" />',
    path: 'http://www.github.com/jhonyskywalker'
  },
  {
    name: 'Facebook :',
    mask: '/-/\\ jhonyskywalker',
    path: 'http://www.facebook.com/jhonyskywalker'
  },
  {
    name: 'Instagram :',
    mask: '@jhonyskywalker',
    path: 'http://www.instagram.com/jhonyskywalker'
  },
  {
    name: 'Twitter :',
    mask: '#jhonyskywalker_',
    path: 'http://www.twitter.com/jhonyskywalker_'
  },
  {
    name: 'Linkedin :',
    mask: '/jhonatansilva',
    path: 'http://www.linkedin.com/in/jhonatansilva'
  }
]

const List = styled.ul`
  list-style: none;
`

const ListItem = styled.li`
  margin-bottom: 40px;
  margin-right: 80px;
  display: inline-block;
`

const Title = styled.h5`
  font-size: 24px;
  color: ${props => props.color};
  font-weight: 300;
`

const Link = styled.a`
  font-size: 24px;
  color: #fff;

  &:hover {
    color: ${props => props.color};
  }
`

const Contact = () => (
  <Template headOptions={headOptions}>
    <section>
      <List>
        {contacts.map(contact => (
          <ListItem key={contact.name}>
            <Title color={randomColor(0.3, 0.99).hexString()}>
              {contact.name}
            </Title>
            <Link
              color={randomColor(0.3, 0.99).hexString()}
              title={contact.name}
              href={contact.path}
              target="_blank"
            >
              {contact.mask}
            </Link>
          </ListItem>
        ))}
      </List>
    </section>
  </Template>
)

export default Contact
