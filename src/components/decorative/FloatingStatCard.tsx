import { StudentStack } from './StudentStack'
import { Icon } from '../ui/Icon'
export function ProgressCard() {
  return (
    <div className="floating-card progress-card">
      <p>Learning Progress</p>
      <strong>55%</strong>
      <div
        className="progress-track"
        role="progressbar"
        aria-label="Learning progress"
        aria-valuenow={55}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span />
      </div>
    </div>
  )
}
export function HappyStudents({ lime = false }: { lime?: boolean }) {
  return (
    <div className={`floating-card happy-card ${lime ? 'happy-card-lime' : ''}`}>
      <p>Happy Students</p>
      <div className="student-rating">
        4.5 <span>(240)</span>
        <Icon name="star" />
      </div>
      <StudentStack count="2K+" large dark={lime} />
    </div>
  )
}
export function RevenueCard({ year = false }: { year?: boolean }) {
  return (
    <div className={`floating-card revenue-card ${year ? 'revenue-year' : ''}`}>
      <p>{year ? 'Year to Date' : 'Total Revenue'}</p>
      <small>{year ? '2023' : 'July 1-28'}</small>
      <strong>{year ? '$1,200.38' : '$120.29'}</strong>
      {year ? (
        <span className="revenue-change">+12$</span>
      ) : (
        <div className="progress-track">
          <span />
        </div>
      )}
    </div>
  )
}
