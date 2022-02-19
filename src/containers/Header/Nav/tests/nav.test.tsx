import { render } from '@testing-library/react'
import Nav from '..'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Test nav', () => {
  it('Should render nav', () => {
    render(
      <Router>
        <Nav />
      </Router>
    )
  })
})
