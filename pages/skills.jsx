import React from 'react'
import styled from 'styled-components'

import Template from '../components/template'

const headOptions = {
  title: 'Skills'
}

const Skills = () => (
  <Template headOptions={headOptions}>
    <section>
      <h1>
        <span>Jhonatan</span>
        <span>Silva</span>
      </h1>
      <h2>This is a list of tecnhologies tha i am aware of \0/ </h2>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ul>
    </section>
  </Template>
)

export default Skills
