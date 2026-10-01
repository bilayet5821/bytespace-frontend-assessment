import type { Course } from '../../data/courses'
import { Icon } from '../ui/Icon'
import { StudentStack } from '../decorative/StudentStack'
export function CourseCard({course,dark=false}:{course:Course;dark?:boolean}){
 return <article className="course-card"><div className="course-image"><img src={`/assets/course-thumbnails/${course.image}.png`} alt={`${course.title} course thumbnail`} width="341" height="196" loading="lazy"/><div className="course-meta"><span>17 Lessons</span><span>2 hours 16 mins</span><span>59 Comments</span></div></div><div className="course-title-row"><h3 title={course.title}>{course.title}</h3><span className="course-rating" aria-label={`${course.rating} out of 5`}>{course.rating}<Icon name="star"/></span></div><p className="course-author">by <span>{course.creator}</span></p><div className="course-enrollment"><span className="level-badge"><Icon name="level"/>Beginner</span><StudentStack dark={dark}/></div><p className="course-price"><strong>${course.price}</strong><span>/lifetime</span></p></article>
}
