function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  )
}

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61595061473295'
const INSTAGRAM_URL = 'https://www.instagram.com/krodesign.is/'

type Props = {
  className?: string
}

export default function SocialLinks({ className }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className ?? ''}`}>
      <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-kroOrange transition-colors">
        <FacebookIcon />
      </a>
      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-kroOrange transition-colors">
        <InstagramIcon />
      </a>
    </div>
  )
}
