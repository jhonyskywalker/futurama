import React from 'react'
import styled, { css } from 'styled-components'
import randomColor from 'random-color'

const links = [
  {
    name: 'Resume',
    href: '/'
  },
  {
    name: 'Experience',
    href: '/experience'
  },
  {
    name: 'Skills',
    href: '/skills'
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
`

const Link = styled.a`
  font-size: 24px;
  color: #fff;
  text-decoration: none;
  color: ${props => props.color1};

  &:hover {
    color: ${props => props.color2};
  }

  ${props => props.active}
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
