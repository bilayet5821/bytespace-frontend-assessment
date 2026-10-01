export function Decorations({variant='hero'}:{variant?:'hero'|'cta'}){
 const items=variant==='hero'?[['helix-lime-large.svg','shape-a'],['helix-white-small.svg','shape-b'],['ring-white.svg','shape-c'],['cylinder-lime.svg','shape-d'],['pyramid-white.svg','shape-e'],['helix-white.svg','shape-f']]:[['helix-lime-large.svg','shape-a'],['helix-white-small.svg','shape-b'],['ring-lime.svg','shape-c'],['cylinder-white.svg','shape-d'],['pyramid-lime.svg','shape-e'],['helix-lime.svg','shape-f'],['cone-white.png','shape-g']]
 return <div className={`decorations ${variant}-decorations`} aria-hidden="true">{items.map(([asset,cls])=><img className={`decor ${cls}`} src={`/assets/decorations/${asset}`} key={cls} alt="" loading={variant==='hero'?'eager':'lazy'}/>)}</div>
}
