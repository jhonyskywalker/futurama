import React from 'react'

const links = [
  {
    name: 'Resume',
    href: '',
  },
  {
    name: 'Experience',
    href: '',
  },
  {
    name: 'Skills',
    href: '',
  },
  {
    name: 'Contact',
    href: '',
  }
];

const Menu = () => (
  <nav>
    <ul>
      {
        links.map(({ name, href }) => <li key={name}><a href={href} title={name}>{name}</a></li>)
      }
    </ul>
  </nav>
);

export default Menu
