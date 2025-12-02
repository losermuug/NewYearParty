import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  it('renders the main content', () => {
    render(<App />)
    const mainElement = screen.getByRole('main')
    expect(mainElement).toBeInTheDocument()
  })

  it('displays party title', () => {
    render(<App />)
    const title = screen.getByText(/New Year Party/i)
    expect(title).toBeInTheDocument()
  })
})
