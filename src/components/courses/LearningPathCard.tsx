import {Icon,type IconName} from '../ui/Icon'
export function LearningPathCard({name,icon}:{name:string;icon:IconName}) {return <a className="learning-path-card" href="#courses"><span><Icon name={icon}/></span><p>{name}</p></a>}
