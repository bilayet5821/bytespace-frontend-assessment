import type { ReactNode } from 'react'
export type IconName = 'search' | 'bag' | 'menu' | 'close' | 'star' | 'level' | 'check' | 'design' | 'development' | 'software' | 'business' | 'marketing' | 'photography'
const shapes: Record<IconName, ReactNode> = {
 search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
 bag: <><path d="M5 8h14v13H5zM9 9V6a3 3 0 0 1 6 0v3" /></>,
 menu: <path d="M3 6h18M3 12h18M3 18h18" />,
 close: <path d="m5 5 14 14M5 19 19 5" />,
 star: <path d="m12 2 3 6.5 7 .9-5.1 5 1.2 7.1-6.1-3.4-6.1 3.4 1.2-7.1L2 9.4l7-.9Z" fill="currentColor" stroke="none" />,
 level: <><path d="M4 16v5M10 10v11M16 4v17" strokeWidth="3" /></>,
 check: <path d="m5 12 4 4 10-10" />,
 design: <><path d="m3 7 4-4 14 14-4 4Z M6 10l3-3M13 17l3-3M4 20l-1-1 5-6M13 8l6-6 3 3-6 6" /></>,
 development: <><path d="M6 6V2h12v4M6 18v4h12v-4M9 8l-4 4 4 4M15 8l4 4-4 4" /></>,
 software: <><rect x="4" y="3" width="16" height="14" rx="1" /><path d="M2 21h20M9 17v4M15 17v4" /></>,
 business: <><path d="M3 21V3h10v18M13 9h8v12M2 21h20M7 7h2M7 11h2M7 15h2M17 13h1M17 17h1" /></>,
 marketing: <><circle cx="5" cy="5" r="2" /><circle cx="19" cy="19" r="2" /><path d="M2 13v-2a3 3 0 0 1 6 0M22 11v2a3 3 0 0 0-6 0M10 5a9 9 0 0 1 9 9M10 10a4 4 0 0 1 4 4" /></>,
 photography: <><path d="M3 6h5l2-3h4l2 3h5v15H3Z" /><circle cx="12" cy="12" r="2" /><path d="M8 18a4 4 0 0 1 8 0" /></>,
}
export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
 return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[name]}</svg>
}
