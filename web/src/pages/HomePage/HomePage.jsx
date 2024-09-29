// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import FooterPage from '../FooterPage/FooterPage'
import HomeSectionPage from '../HomeSectionPage/HomeSectionPage'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <HomeSectionPage />
      <FooterPage />
    </>
  )
}

export default HomePage
