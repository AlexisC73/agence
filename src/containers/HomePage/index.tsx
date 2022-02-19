import Button from '../../components/Button'
import H1 from '../../components/H1'
import { Main } from '../../components/Main'
import Wrapper from '../../components/Wrapper'
import Header from '../Header'
import { BannerStyled } from './homepage.styled'

export default function HomePage() {
  return (
    <>
      <Header siteName='Real Estate' />
      <Main>
        <Wrapper>
          <BannerStyled>
            <H1>Votre propriété, notre expertise</H1>
            <p>
              Real Estate c’est une équipe de professionnels pour un meilleur
              service dans la vente et l'achat.
            </p>
            <Button>Prenez contact avec nous</Button>
          </BannerStyled>
        </Wrapper>
      </Main>
    </>
  )
}
