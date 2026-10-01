import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../ui/Icon'
import { NoticeDialog } from '../ui/NoticeDialog'
export function Header() {
  const [open, setOpen] = useState(false),
    [cart, setCart] = useState(false)
  return (
    <header className="site-header container">
      <Link to="/" aria-label="ByteSpace home">
        <img src="/assets/logo/bytespace-logo.svg" width="171" height="37" alt="ByteSpace" />
      </Link>
      <button
        className="menu-toggle"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        <Icon name={open ? 'close' : 'menu'} />
      </button>
      <nav
        id="site-nav"
        className={open ? 'navigation is-open' : 'navigation'}
        aria-label="Main navigation"
      >
        <div className="nav-primary">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <a href="/#courses" onClick={() => setOpen(false)}>
            Courses
          </a>
          <a href="/#creators" onClick={() => setOpen(false)}>
            Creators
          </a>
        </div>
        <div className="nav-account">
          <Link to="/login" onClick={() => setOpen(false)}>
            Sign In
          </Link>
          <Link to="/register" onClick={() => setOpen(false)}>
            Join Us
          </Link>
          <button className="bag-button" aria-label="View course bag" onClick={() => setCart(true)}>
            <Icon name="bag" />
          </button>
        </div>
      </nav>
      {cart && (
        <NoticeDialog
          title="Your course bag"
          message="Your bag is empty. Explore the featured courses below."
          onClose={() => setCart(false)}
        />
      )}
    </header>
  )
}
