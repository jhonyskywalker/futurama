import React from 'react'
import styled, { css } from 'styled-components'
import randomColor from 'random-color'
import { breakpoint } from '../utils'

import Template from '../components/template'

const headOptions = {
  title: 'Jhonatan Silva - Skills',
  description: 'This is a list of tecnhologies that i am aware of \\0/'
}

const skills = [
  'HTML',
  'CSS',
  'Javascript',
  'ES6',
  'NPM',
  'Webpack',
  'React',
  'Styled Components',
  'Epa Nenem',
  'UI',
  'Redux',
  '=--/--=',
  'Static WebSites',
  'SPA WebSites',
  'Responsive WebSites',
  'ADMIN',
  'CMS',
  'PHP',
  'Ruby',
  'NodeJS',
  'ReactNative',
  'jQuery',
  'SQL',
  'GIT',
  'SASS',
  'AngularJS',
  'Ionic',
  'PostCSS',
  'CofeeScript',
  'Team Management',
  'Mentoring',
  'TDD',
  'E2E',
  'Jest',
  'Enzyme',
  'Mocha',
  'Chai',
  'Sinon',
  ':)'
]

const Container = styled.ul`
  ${breakpoint('for-phone-only', css`
    display: flex;
    flex-wrap: wrap;
  `)}
`

const Skill = styled.li`
  border: 2px solid;
  border-color: ${props => props.color};
  border-radius: 4px;
  padding: 16px 24px;
  margin-right: 40px;
  margin-bottom: 24px;
  font-size: 24px;
  display: inline-block;
  color: ${props => props.color};

  ${breakpoint('for-phone-only', css`
    font-size: 16px;
    margin-right: 16px;
    margin-bottom: 16px;
    padding: 8px 16px;
  `)}
`

const Skills = () => (
  <Template headOptions={headOptions}>
    <section>
      <Container>
        {skills.map(skill => (
          <Skill color={randomColor(0.3, 0.99).hexString()} key={skill}>
            {skill}
          </Skill>
        ))}
      </Container>
    </section>
  </Template>
)

export default Skills
