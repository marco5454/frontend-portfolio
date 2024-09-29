import { render } from '@redwoodjs/testing/web'

import FooterPage from './FooterPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FooterPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FooterPage />)
    }).not.toThrow()
  })
})
