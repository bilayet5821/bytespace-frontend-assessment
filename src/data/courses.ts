export interface Course {
  id: string
  title: string
  image: string
  category: string
  creator: string
  rating: number
  price: number
}
export const courses: Course[] = [
  {
    id: 'figma',
    title: 'Learn Figma from Basic',
    image: 'learn-figma',
    category: 'UI/UX Design',
    creator: 'purepearl studio',
    rating: 4.5,
    price: 25,
  },
  {
    id: 'digital',
    title: 'Build Digital Asset',
    image: 'build-digital-asset',
    category: 'Digital Illustration',
    creator: 'purepearl studio',
    rating: 4.5,
    price: 25,
  },
  {
    id: 'data',
    title: 'the Power of Big Data',
    image: 'power-of-big-data',
    category: 'Data Science',
    creator: 'purepearl studio',
    rating: 4.5,
    price: 25,
  },
  {
    id: 'productivity',
    title: 'Balancing Productivity and Well-being',
    image: 'balancing-productivity',
    category: 'Productivity',
    creator: 'purepearl studio',
    rating: 4.5,
    price: 25,
  },
  {
    id: 'money',
    title: 'Mastering Money Management',
    image: 'mastering-money-management',
    category: 'Business',
    creator: 'purepearl studio',
    rating: 4.5,
    price: 25,
  },
  {
    id: 'startup',
    title: 'From Idea to Startup Success',
    image: 'idea-to-startup',
    category: 'Freelance & Entrepreneurship',
    creator: 'purepearl studio',
    rating: 4.5,
    price: 25,
  },
]
export const categories = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
]
