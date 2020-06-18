import React from 'react'
import styled, { css } from 'styled-components'
import randomColor from 'random-color'
import { breakpoint } from '../utils'

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

const projects = [
  {
    title: 'Music to Galatic Cats',
    description: [
      `Music to my indie game call Galatic Cats`,
    ],
    link: `https://beepbox.co/#8n31s0k7l00e03t2mm0a7g0fj07i0r1o3210T0v5L4u13q1d1f7y1z1C0w5c0h1T1v5L4u35q1d5f6y2ziC1c0A6F0B0V1Q05c0Pa660E0061T0v0L4u11q0d0f8y0z1C2w1c0h0T4v1L4u04q1z6666ji8k8k3jSBKSJJAArriiiiii07JCABrzrrrrrrr00YrkqHrsrrrrjr005zrAqzrjzrrqr1jRjrqGGrrzsrsA099ijrABJJJIAzrrtirqrqjqixzsrAjrqjiqaqqysttAJqjikikrizrHtBJJAzArzrIsRCITKSS099ijrAJS____Qg99habbCAYrDzh00b4h400000000h4g000000014h000000004h400000000p21yKrnMgrC44aLdxggw5PnZkaVIL2KDdHYFppDrkQhwaqf3wOeK4GF8WqGWpeGGI1pEN2ydd6hmVEOJIzjhAlIQpt4uhlJnp7A4o0`,
  },
  {
    title: 'Website for my Wife.',
    description: [
      `I develop a portfolio website for my Wife s2.`,
    ],
    link: `https://moniquebatista.com/`,
  },
  {
    title: 'WatchWhat ',
    description: [
      `React Application to list Movies and TV Shows with THE MovieDB API`,
    ],
    link: `https://watchwhat-6cb54.web.app/`,
  }
];

const Experience = () => (
  <Template headOptions={headOptions}>
    {projects.map(project => (
      <Article>
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
