import {SectionHeading} from '../components/ui/SectionHeading'
import {LearningPathCard} from '../components/courses/LearningPathCard'
import type {IconName} from '../components/ui/Icon'
const paths:{name:string;icon:IconName}[]=[{name:'Design',icon:'design'},{name:'Development',icon:'development'},{name:'IT & Software',icon:'software'},{name:'Business',icon:'business'},{name:'Marketing',icon:'marketing'},{name:'Photography',icon:'photography'}]
export function LearningPaths(){return <section className="learning-paths container" aria-label="Learning paths"><SectionHeading title="Explore Diverse Learning Paths at Bytespace">At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there’s something for everyone. Unleash your potential and explore our carefully curated categories.</SectionHeading><div className="learning-path-grid">{paths.map(path=><LearningPathCard key={path.name} {...path}/>)}</div></section>}
