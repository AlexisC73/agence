import { render, screen } from '@testing-library/react'
import H1 from '../'

describe('Test du header', () => {
  it('Should render components', () => {
    render(<H1>Titre</H1>)
    expect(screen.getByText('Titre')).toBeInTheDocument()
  })
  it('should render component with empty text', () => {
    render(<H1></H1>)
  })
})
