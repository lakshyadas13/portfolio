import type { FC } from 'react'

export interface Project {
  id?: string
  name: string
  year?: string
  role?: string
  tags?: string[]
  url?: string
  description?: string
  [key: string]: unknown
}

export interface Folder {
  id: string
  label: string
  title?: string
  style?: 'blush' | 'noir' | 'ribbon' | 'bows' | string
  x: number
  y: number
  projects: Project[]
}

export interface AboutSection {
  title?: string
  paragraphs: string[]
}

export interface IconCoordinate {
  x: number
  y: number
  label?: string
}

export interface SocialLink {
  label: string
  url: string
}

export interface FAQItem {
  q: string
  a: string
}

export interface SongInfo {
  title: string
  artist: string
}

export interface CoquetteDesktopPortfolioProps {
  name?: string
  eyebrow?: string
  headline?: string
  about?: AboutSection
  folders?: Folder[]
  aboutIcon?: IconCoordinate
  contactIcon?: IconCoordinate
  email?: string
  links?: SocialLink[]
  availability?: string
  now?: string[]
  skills?: string[]
  faq?: FAQItem[]
  song?: SongInfo
  accent?: string
  deep?: string
  wallpaper?: 'plain' | 'dots' | 'lace' | 'gingham' | 'rose' | string
  openOnLoad?: string | null
  intro?: boolean
  height?: string
  className?: string
}

declare const CoquetteDesktopPortfolio: FC<CoquetteDesktopPortfolioProps>
export default CoquetteDesktopPortfolio
export { CoquetteDesktopPortfolio }
