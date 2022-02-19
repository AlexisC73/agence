import styled from 'styled-components'
import { colorPrimary, headerHight } from '../../utils/variable'

const HeaderStyled = styled.header`
  background-color: ${colorPrimary};
  position: fixed;
  width: 100%;
  height: ${headerHight}px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
  }
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    padding: 0 50px;
  }
`

export default HeaderStyled
