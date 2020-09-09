import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import randomColor from 'random-color'
import { breakpoint } from '../utils'
import { useRouter } from "next/router"
import links from '../data/link'

const List = styled.ul`
  display: flex;
  list-style: none;
`

const ListItem = styled.li`
  margin: 0 20px 0 0;

  ${breakpoint('for-phone-only', css`
    margin: 0 16px 0 0;
  `)}
`

const LinkItem = styled.a`
  color: #fff;
  text-decoration: none;
  color: ${props => props.color1};
  cursor: pointer;

  &:hover {
    color: ${props => props.color2};
    text-decoration: underline;
    opacity: 0.5;
  }

  ${props => props.active}
`

const checkPathnameToActivatedLink = href => {
  if (useRouter().pathname === href)
    return css`
      text-decoration: line-through;
      opacity: 0.7;
    `
}

const Menu = props => (
  <nav className={props.className}>
    <List>
      {links.map(({ name, href }) => (
        <ListItem key={name}>
          <Link
            href={href}
          >
            <LinkItem
              title={name}
              color1={randomColor(0.3, 0.99).hexString()}
              color2={randomColor(0.3, 0.99).hexString()}
              active={checkPathnameToActivatedLink(href)}
            >
              {name}
            </LinkItem>
          </Link>
        </ListItem>
      ))}
    </List>
  </nav>
)

export default Menu
