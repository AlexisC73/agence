import H1 from '../../components/H1'
import HeaderStyled from './header.styled'
import { useEffect } from 'react'
import Nav from './Nav'

interface HeaderProps {
  siteName: string
}

export default function Header({ siteName }: HeaderProps) {
  useEffect(() => {
    function handleResize(e: UIEvent) {
      const el = e.target as Window
      console.log('Width:', el.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })
  return (
    <HeaderStyled>
      <H1>{siteName}</H1>
      <Nav />
    </HeaderStyled>
  )
}
