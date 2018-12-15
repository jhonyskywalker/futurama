import React from 'react'
import styled from 'styled-components'

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

const Menu = props => (
  <nav className={props.className}>
    <ul>
      {links.map(({ name, href }) => (
        <li key={name}>
          <a href={href} title={name}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

const MenuStyled = styled(Menu)`
  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin: 0 20px;
  }

  a {
    font-size: 24px;
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #53c1af;
    }
  }
`

export default MenuStyled
