import H1 from '../../components/H1'
import HeaderStyled from './header.styled'
import Nav from './Nav'

interface HeaderProps {
  siteName: string
}

export default function Header({ siteName }: HeaderProps) {
  return (
    <>
      <HeaderStyled>
        <H1>{siteName}</H1>
        <Nav />
      </HeaderStyled>
    </>
  )
}
