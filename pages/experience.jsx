import React from 'react'
import styled from 'styled-components'
import randomColor from 'random-color'

import Template from '../components/template'

import experience from '../data/experience'

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

const Title2 = styled.h1`
  color: ${randomColor(0.3, 0.99).hexString()};
`;

const Title3 = styled.h1`
  color: ${randomColor(0.3, 0.99).hexString()};
`;

const Title4 = styled.h1`
  color: ${randomColor(0.3, 0.99).hexString()};
`;

const Dt = styled.dt`
  color: ${randomColor(0.3, 0.99).hexString()};
`;

const Experience = () => (
  <Template headOptions={headOptions}>
    {experience.map((experience, index) => (
      <ExperienceArticle key={index}>
        <header>
          <Title2 as="h2">
            {experience.position}
          </Title2>
          <Title3 as="h3">
            {experience.company.name}
          </Title3>
          <Title4 as="h4">
            {experience.employmentDuration.enter} - {experience.employmentDuration.exit}
          </Title4>
        </header>

        <section>
          {experience.descriptions && experience.descriptions.map((description, index) => (
            <p key={index}>{description}</p>
          ))}

          {experience.lists && experience.lists.map((list, index) => (
            <dl key={index}>
              <Dt>{list.title}</Dt>
              {list.items && list.items.map((item, index) => (
                <dd key={index}>{item}</dd>
              ))}
            </dl>
          ))}
        </section>
      </ExperienceArticle>
    ))}
  </Template>
)

export default Experience
