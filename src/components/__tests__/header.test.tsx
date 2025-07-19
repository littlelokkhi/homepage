import { render, screen } from '@testing-library/react'
import { Header } from '../header'

describe('Header', () => {
  it('renders the Little Lokkhi title', () => {
    render(<Header />)
    expect(screen.getByText('Little Lokkhi')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })
})