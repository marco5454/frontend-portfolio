import { render } from '@redwoodjs/testing/web'

import HomeSectionPage from './HomeSectionPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HomeSectionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeSectionPage />)
    }).not.toThrow()
  })
})
