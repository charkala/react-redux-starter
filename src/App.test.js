import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders app', () => {
  const { getAppUI } = render(<App />)
  const linkElement = getAppUI(/Starter Kit/i)
  expect(linkElement).toBeInTheDocument()
})
