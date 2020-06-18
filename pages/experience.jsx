import React from 'react'
import styled, { css } from 'styled-components'
import randomColor from 'random-color'
import { breakpoint } from '../utils'

import Template from '../components/template'

import experiences from '../settings/experience'

const headOptions = {
  title: 'Experience',
  description: 'This is my experience enjoy'
}

const ExperienceArticle = styled.article`
  margin: 40px 0;

  header {
    margin: 24px 0;
  }

  h2 {
    font-weight: bold;
    margin-bottom: 8px;
  }

  h3,
  h4 {
    font-weight: normal;
    margin-bottom: 6px;
  }

  p,
  dl {
    margin-bottom: 24px;
  }

  dt,
  dd {
    margin: 8px 0;
  }

  dt {
    font-weight: bold;
  }

  p {
    line-height: 24px;
  }
`;

const Experience = () => (
  <Template headOptions={headOptions}>
    {experiences.map(experience => (
      <ExperienceArticle>
        <header>
          <h2 style={{ color: randomColor(0.3, 0.99).hexString() }}>
            {experience.position}
          </h2>
          <h3 style={{ color: randomColor(0.3, 0.99).hexString() }}>
            {experience.company.name}
          </h3>
          <h4 style={{ color: randomColor(0.3, 0.99).hexString() }}>
            {experience.employmentDuration.enter} - {experience.employmentDuration.exit}
          </h4>
        </header>

        <section>
          {experience.descriptions && experience.descriptions.map((description) => (
            <p>{description}</p>
          ))}

          {experience.lists && experience.lists.map((list) => (
            <dl>
              <dt style={{ color: randomColor(0.3, 0.99).hexString() }}>{list.title}</dt>
              {list.items && list.items.map((item) => (
                <dd>{item}</dd>
              ))}
            </dl>
          ))}
        </section>
      </ExperienceArticle>
    ))}
  </Template>
)

export default Experience
