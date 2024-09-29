import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header className="nav-bar-main">
        <nav>
          <ul>
            <li>
              <Link className="nav-menu" to={routes.home()}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-menu" to={routes.about()}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
