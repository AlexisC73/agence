import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Burger, MapMarker } from '../../../assets/icons'
import { NavDesktopStyled } from './nav.styled'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <NavDesktopStyled className={menuOpen ? 'active' : ''}>
        <ul>
          <Burger onClick={toggleMenu} />
          <li>
            <Link to='/about'>
              <MapMarker />
              <span>Nos propriétés</span>
              <ArrowRight />
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <MapMarker />
              <span>A props de nous</span>
              <ArrowRight />
            </Link>
          </li>
        </ul>
      </NavDesktopStyled>
    </>
  )
}
