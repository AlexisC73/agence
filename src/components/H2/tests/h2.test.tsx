import { render, screen } from '@testing-library/react'
import H2 from '..'

describe('Test du header', () => {
  it('Should render components', () => {
    render(<H2>Titre</H2>)
    expect(screen.getByText('Titre')).toBeInTheDocument()
  })
  it('should render component with empty text', () => {
    render(<H2></H2>)
  })
})
