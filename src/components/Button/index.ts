import styled from 'styled-components'
import { colorPrimary } from '../../utils/variable'

interface MyButtonProps {
  display?: 'primary' | 'secondary' | 'tertiary'
  fullWidth?: boolean
}

const Button = styled.button<MyButtonProps>`
  border-color: transparent;
  font-weight: bold;
  cursor: pointer;
  padding: 1em 1.4em;
  font-size: 1rem;

  ${(props) =>
    (props.display === 'primary' || !props.display) &&
    `
    background-color: ${colorPrimary};
    color: white;
  `}
  ${(props) =>
    props.display === 'secondary' &&
    `
    background-color: #f5f5f5;
    color: ${colorPrimary};
    border: 1px solid ${colorPrimary};
  `}
    

  ${(props) =>
    props.display === 'tertiary' &&
    `
    background-color: #f5f5f5;
    color: ${colorPrimary};
    border: 1px solid ${colorPrimary};
    border-color: transparent;
    padding: 8px 4px;
    border-bottom: 1px solid ${colorPrimary}
  `}
    ${(props) => props.fullWidth && 'width: 100%;'};
`

export default Button
