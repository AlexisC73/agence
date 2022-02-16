import { render } from '@testing-library/react'
import App from './App'

describe("Test de l'app", () => {
  test("L'application se lance sans erreurs", () => {
    render(<App />)
  })
})
