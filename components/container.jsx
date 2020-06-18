import styled from 'styled-components'
import { percentage } from '../utils'

const Container = styled.section`
  padding: 40px ${percentage(16, 720)};
  max-width: 720px;
  margin: 0 auto;
  width: 100%;

  h2 {
    margin-bottom: 40px;
  }
`

export default Container
