import React from 'react'
import styled from 'styled-components'

import Template from '../components/template'

const headOptions = {
  title: 'Skills',
  description: 'This is a list of tecnhologies tha i am aware of \\0/'
}

const Skills = () => (
  <Template headOptions={headOptions}>
    <section>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ul>
    </section>
  </Template>
)

export default Skills
