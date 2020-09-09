import React from 'react'
import styled, { css } from 'styled-components'
import randomColor from 'random-color'
import { breakpoint } from '../utils'

import Template from '../components/template'

const headOptions = {
  title: 'Jhonatan Silva',
  description: `Hello, I'm a Code Maker and Earthling.`
}

const Link = styled.a`
  color: ${props => props.color};
  text-decoration: underline;
`

const Main = styled.div`
  p {
    line-height: 24px;
    margin: 0 0 16px 0;
  }
`

const Home = () => (
  <Template headOptions={headOptions}>
    <Main>
      <p>I currently use Javascript to make my main code, using NodeJS on server stuff, and React to create ugly websites.</p>

      <p>Currently, I do MBA in Big-Data to understand how I will make money from my own data, exploring my privacy without any information security, because I am the owner of my data, kidding, the data world is complex, how to use Big-Data to change the world?</p>

      <p>I constantly try to understand Python and GoLang and how does my cat <Link color={randomColor(0.3, 0.99).hexString()} as="strong">"Banguela"</Link> eat so much food and my plants, or why my little cat <Link color={randomColor(0.3, 0.99).hexString()} as="strong">"Nunu"</Link> never desists to jump in my lap when I work, or why my old cat <Link color={randomColor(0.3, 0.99).hexString()} as="strong">"Princesa"</Link> everyday scratch all doors in our home.</p>
    </Main>
  </Template>
)

export default Home
