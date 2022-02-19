import { render, screen } from '@testing-library/react'
import Button from '../'

describe('Test button', () => {
  it('Should render components', () => {
    render(<Button>Titre</Button>)
    expect(screen.getByText('Titre')).toBeInTheDocument()
  })
  it('should render component with empty text', () => {
    render(<Button></Button>)
  })
})
