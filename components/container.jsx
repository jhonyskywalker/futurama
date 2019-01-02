import styled from 'styled-components'
import { percentage } from '../utils'

const Container = styled.section`
  padding: 40px ${percentage(80, 1200)};
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  h2 {
    margin-bottom: 40px;
  }
`

export default Container
