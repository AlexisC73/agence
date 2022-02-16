import { render, screen } from '@testing-library/react'
import Header from '../'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Test du header', () => {
  it('Should render header', () => {
    render(
      <Router>
        <Header siteName='Real Estate' />
      </Router>
    )
  })

  it('Should render the site name', () => {
    render(
      <Router>
        <Header siteName='Real Estate' />
      </Router>
    )
    expect(screen.getByText('Real Estate')).toBeInTheDocument()
  })
})
