export function StudentStack({
  count = '26+',
  large = false,
  dark = false,
}: {
  count?: string
  large?: boolean
  dark?: boolean
}) {
  const images = large
    ? Array.from({ length: 7 }, (_, i) => `/assets/avatars/student-${i + 1}.png`)
    : [
        '/assets/avatars/course-student-1.png',
        '/assets/avatars/course-student-2.png',
        '/assets/testimonials/sarah.png',
        '/assets/testimonials/alex.png',
      ]
  return (
    <div
      className={`student-stack ${large ? 'student-stack-large' : ''} ${dark ? 'student-stack-dark' : ''}`}
      aria-label={`${count} students`}
    >
      {images.map((src, i) => (
        <img key={i} src={src} alt="" width="40" height="40" loading="lazy" />
      ))}
      <span>{count}</span>
    </div>
  )
}
