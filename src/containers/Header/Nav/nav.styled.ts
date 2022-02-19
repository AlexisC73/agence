import styled from 'styled-components'
import { colorPrimary, headerHight, tabletWidth } from '../../../utils/variable'

const burgerHight = 40

export const NavDesktopStyled = styled.nav`
  position: fixed;
  inset: 0;
  scroll: no-scroll;
  height: ${headerHight}px;

  ul {
    margin: 0;
    gap: 10px;
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 80%;
    position: relative;
    height: 100%;
    transform: translateX(-100%);
    & > svg {
      position: absolute;
      height: ${burgerHight}px;
      right: -60px;
      top: ${(headerHight - burgerHight) / 2}px;
      color: white;
      @media screen and (min-width: ${tabletWidth}px) {
        display: none;
      }
    }
    li {
      display: flex;
      align-items: center;
    }
    a {
      text-decoration: none;
      width: 100%;
      color: currentColor;
      display: flex;
      align-items: center;
      span {
        flex: 1;
      }
      & > svg {
        height: 20px;
        color: ${colorPrimary};
        padding: 0 10px;
      }

      @media screen and (min-width: ${tabletWidth}px) {
        color: white;
        &:hover {
          border-bottom: 1px solid white;
          padding-bottom: 5px;
        }
      }
    }
    @media screen and (min-width: ${tabletWidth}px) {
      flex-direction: row;
      gap: 40px;
      transform: translateX(0);
      margin-left: 70px;
      background-color: transparent;
    }
  }
  &.active {
    height: auto;
    ul {
      transform: translateX(0);
      transition: transform 400ms ease;
      padding: 120px 0;
    }
  }

  @media screen and (min-width: ${tabletWidth}px) {
    position: static;
    svg {
      display: none;
    }
    ul {
      padding: 0;
    }
  }
`
