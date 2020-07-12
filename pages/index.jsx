import React from 'react'
import styled, { css } from 'styled-components'
import randomColor from 'random-color'
import { breakpoint } from '../utils'

import Template from '../components/template'

const headOptions = {
  title: 'Jhonatan Silva',
  description:
    'I am a Software Engineer'
}

const Paragraph = styled.p`
  font-size: 24px;
  margin-bottom: 24px;

  ${breakpoint('for-phone-only', css`
    font-size: 16px;
  `)}
`

const Link = styled.a`
  color: ${props => props.color};
  font-weight: 400;
  text-decoration: underline;
`

const Home = () => (
  <Template headOptions={headOptions}>
    <section>
      <Paragraph>
        I currently use to React, NodeJS, and Study Golang.
      </Paragraph>
      <Paragraph>
        Follow me on social media <b>@jhonyskywalker</b>
      </Paragraph>
    </section>
  </Template>
)

export default Home
