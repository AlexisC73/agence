import styled from 'styled-components'
import image from '../../assets/maison.png'
import {
  colorPrimary,
  desktopWidth,
  headerHight,
  tabletWidth,
  veryHighTitle,
} from '../../utils/variable'

export const BannerStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: url('${image}') no-repeat;
  background-size: 100%;
  background-position: 0 100%;
  min-height: 570px;
  height: calc(100vh - ${headerHight}px);
  background-color: ${colorPrimary}16;

  h1,
  p {
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    padding-top: 3rem;
    max-width: 300px;
    color: ${colorPrimary};
    margin-bottom: 2rem;
  }

  p {
    max-width: 300px;
    margin-bottom: 5rem;
  }

  @media screen and (min-width: ${tabletWidth}px) {
    min-height: 0;
    height: 600px;
    position: relative;
    justify-content: center;
    background-position: 20rem 100%;
    padding: 0 50px;

    h1,
    p {
      margin: 0;
      text-align: left;
      position: absolute;
    }

    h1 {
      top: 80px;
    }
    p {
      top: 270px;
      font-size: 1.2rem;
    }

    button {
      position: absolute;
      display: block;
      max-width: 300px;
      bottom: 50px;
    }
  }

  @media screen and (min-width: ${desktopWidth}px) {
    border-radius: 25px;
    margin-top: 50px;
  }
`
