import styled from 'styled-components'
import { highTitleSize, tabletWidth, veryHighTitle } from '../../utils/variable'

const H1 = styled.h1`
  font-size: ${highTitleSize}rem;
  @media screen and (min-width: ${tabletWidth}px) {
    font-size: ${veryHighTitle}rem;
  }
`
export default H1
