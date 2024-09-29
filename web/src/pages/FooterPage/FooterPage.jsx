// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const FooterPage = () => {
  const name = 'Marco A. Melgar'
  return (
    <>
      <Metadata title="Footer" description="Footer page" />
      <footer className="footer-wrapper">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} {name} Portfolio
          </p>
          <p>
            Connect with me:
            <a
              href="https://linkedin.com/in/marcomelgar54"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{' '}
            |
            <a
              href="https://github.com/marco5454"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{' '}
            |<a href="mailto:marco.me.personal@gmail.com">Email</a> |
            <a
              href="https://www.facebook.com/profile.php?id=61550812463141"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </p>
        </div>
        <div className="footer-credits">
          <p>Designed and developed by {name}</p>
        </div>
      </footer>
    </>
  )
}

export default FooterPage
