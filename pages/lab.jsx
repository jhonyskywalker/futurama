import React from 'react'
import styled from 'styled-components'
import randomColor from 'random-color'

import project from '../data/project'

import Template from '../components/template'

const headOptions = {
  title: 'Lab',
  description: 'See my experiences'
}

const Article = styled.article`
  margin: 40px 0;

  h2 {
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    line-height: 24px;
  }
`;

const Experience = () => (
  <Template headOptions={headOptions}>
    {project.map((project, index) => (
      <Article key={index}>
        <h2>
          <a
            href={project.link}
            title={project.title}
            target="_blank"
            style={{ color: randomColor(0.3, 0.99).hexString() }}
          >
            {project.title}
          </a>
        </h2>
        <p>
          <a
            href={project.link}
            title={project.title}
            target="_blank"
            style={{ color: randomColor(0.3, 0.99).hexString() }}
          >
            {project.description}
          </a>
        </p>
      </Article>
    ))}
  </Template>
)

export default Experience
