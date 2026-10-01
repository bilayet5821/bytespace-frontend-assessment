export function StudentStack({count='26+',large=false,dark=false}:{count?:string;large?:boolean;dark?:boolean}) {
 const portraits=large?7:4
 return <div className={`student-stack ${large?'student-stack-large':''} ${dark?'student-stack-dark':''}`} aria-label={`${count} students`}>
 {Array.from({length:portraits},(_,i)=><img key={i} src={`/assets/avatars/student-${i+2>7?1:i+2}.png`} alt="" width="40" height="40" loading="lazy"/>)}<span>{count}</span></div>
}
