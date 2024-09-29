// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import me from 'src/pages/HomeSectionPage/img/me.png'

const HomeSectionPage = () => {
  return (
    <>
      <Metadata title="HomeSection" description="HomeSection page" />
      <div className="home-wrapper">
        <div className="phto-wrapper">
          <img className="phto-holder" src={me} alt="Profile" />
        </div>
        <div className="role-wrapper">
          <h1>Marco A. Melgar</h1>
          <h2>Web Front-end Developer</h2>
          <button>Get in touch</button>
        </div>
      </div>
    </>
  )
}

export default HomeSectionPage
