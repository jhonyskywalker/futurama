import React from 'react'
import styled, { css } from 'styled-components'
import randomColor from 'random-color'
import { breakpoint } from '../utils'

const links = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Experience',
    href: '/experience'
  },
  {
    name: 'Lab',
    href: '/lab'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
]

const List = styled.ul`
  display: flex;
  list-style: none;
`

const ListItem = styled.li`
  margin: 0 20px;

  ${breakpoint('for-phone-only', css`
    margin: 0 16px 0 0;
  `)}
`

const Link = styled.a`
  font-size: 24px;
  color: #fff;
  text-decoration: none;
  color: ${props => props.color1};

  &:hover {
    color: ${props => props.color2};
    text-decoration: underline;
    opacity: 0.5;
  }

  ${props => props.active}

  ${breakpoint('for-phone-only', css`
    font-size: 16px;
  `)}
`

const checkPathnameToActivatedLink = href => {
  // if (document.location.pathname === href)
  //   return css`
  //     text-decoration: line-through;
  //     opacity: 0.7;
  //   `
}

const Menu = props => (
  <nav className={props.className}>
    <List>
      {links.map(({ name, href }) => (
        <ListItem key={name}>
          <Link
            href={href}
            title={name}
            color1={randomColor(0.3, 0.99).hexString()}
            color2={randomColor(0.3, 0.99).hexString()}
            active={checkPathnameToActivatedLink(href)}
          >
            {name}
          </Link>
        </ListItem>
      ))}
    </List>
  </nav>
)

export default Menu
