import { useState } from 'react'
import { courses, categories } from '../data/courses'
import { CourseCard } from '../components/courses/CourseCard'
import { CategoryChip } from '../components/ui/CategoryChip'
import { SectionHeading } from '../components/ui/SectionHeading'
export function Discover({ query, onClear }: { query: string; onClear: () => void }) {
  const [category, setCategory] = useState('Featured'),
    [more, setMore] = useState(false)
  const visible = courses.filter(
    (c) =>
      (category === 'Featured' || c.category === category) &&
      `${c.title} ${c.category} ${c.creator}`.toLowerCase().includes(query.trim().toLowerCase()),
  )
  return (
    <section className="discover container" id="courses" aria-label="Discover courses">
      <SectionHeading
        title={
          <>
            Discover Your Passion,
            <br />
            Build Your Skills
          </>
        }
      >
        At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of
        courses across different fields, from technology to the arts, and make a difference in your
        career and life.
      </SectionHeading>
      <div className="category-chips" aria-label="Filter courses by category">
        {[...categories, ...(more ? ['Business', 'IT & Software'] : [])].map((label) => (
          <CategoryChip
            key={label}
            label={label}
            active={category === label}
            onClick={() => setCategory(label)}
          />
        ))}
        <button className="more-categories" aria-expanded={more} onClick={() => setMore(!more)}>
          {more ? '− Less' : '+ More'}
        </button>
      </div>
      {query && (
        <p className="search-summary" role="status">
          Results for “{query}” <button onClick={onClear}>Clear search</button>
        </p>
      )}
      <div className="course-grid">
        {visible.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      {!visible.length && (
        <div className="empty-courses" role="status">
          <p>No courses match this selection.</p>
          <button
            className="button"
            onClick={() => {
              setCategory('Featured')
              onClear()
            }}
          >
            Show featured courses
          </button>
        </div>
      )}
    </section>
  )
}
