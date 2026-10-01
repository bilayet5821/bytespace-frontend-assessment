import { Link } from 'react-router-dom'
import { Decorations } from '../components/decorative/Decorations'
export function CreatorCTA() {
  return (
    <section className="creator-cta blue-grid" aria-labelledby="cta-title">
      <Decorations variant="cta" />
      <div className="container cta-copy">
        <h2 id="cta-title">
          Unlock Your Potential as a<br />
          Creator with ByteSpace
        </h2>
        <p>
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link className="button" to="/register">
          Join as Creator
        </Link>
      </div>
    </section>
  )
}
