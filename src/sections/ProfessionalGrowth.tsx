import { CourseCard } from '../components/courses/CourseCard'
import { ProgressCard } from '../components/decorative/FloatingStatCard'
import { courses } from '../data/courses'
export function ProfessionalGrowth() {
  return (
    <section className="professional-growth feature-row container" aria-labelledby="growth-title">
      <div className="feature-copy">
        <h2 id="growth-title">
          Your Path to Professional
          <br className="desktop-break" /> Growth Starts Here!
        </h2>
        <p>
          Explore our curated selection of courses tailored to enhance your capabilities and
          accelerate your career journey. Whether you are looking to sharpen specific skills, gain
          industry expertise, or embark on a new career path entirely, we have the resources you
          need.
        </p>
        <dl className="growth-stats">
          <div>
            <dt>12K</dt>
            <dd>Students</dd>
          </div>
          <div>
            <dt>70+</dt>
            <dd>Courses</dd>
          </div>
          <div>
            <dt>16</dt>
            <dd>Creators</dd>
          </div>
        </dl>
      </div>
      <div className="growth-visual feature-visual">
        <div className="growth-course">
          <CourseCard course={courses[0]} />
        </div>
        <img
          className="growth-student"
          src="/assets/people/hero-student.png"
          width="722"
          height="515"
          alt="Learner wearing headphones with a laptop"
          loading="lazy"
        />
        <ProgressCard />
        <img
          className="decor growth-helix"
          src="/assets/decorations/helix-lime.webp"
          alt=""
          loading="lazy"
        />
      </div>
    </section>
  )
}
