export function Decorations({ variant = 'hero' }: { variant?: 'hero' | 'cta' }) {
  const items =
    variant === 'hero'
      ? [
          ['helix-lime-large.webp', 'shape-a'],
          ['helix-white-small.webp', 'shape-b'],
          ['ring-white.webp', 'shape-c'],
          ['cylinder-lime.webp', 'shape-d'],
          ['pyramid-white.webp', 'shape-e'],
          ['helix-white.webp', 'shape-f'],
        ]
      : [
          ['helix-lime-large.webp', 'shape-a'],
          ['helix-white-small.webp', 'shape-b'],
          ['ring-lime.webp', 'shape-c'],
          ['cylinder-white.webp', 'shape-d'],
          ['pyramid-lime.webp', 'shape-e'],
          ['helix-lime.webp', 'shape-f'],
          ['cone-white.png', 'shape-g'],
        ]
  return (
    <div className={`decorations ${variant}-decorations`} aria-hidden="true">
      {items.map(([asset, cls]) => (
        <img
          className={`decor ${cls}`}
          src={`/assets/decorations/${asset}`}
          key={cls}
          alt=""
          loading={variant === 'hero' ? 'eager' : 'lazy'}
        />
      ))}
    </div>
  )
}
