import { Link } from 'react-router-dom'
import { Github, Twitter, MessageCircle, Send } from 'lucide-react'
import Logo from '../ui/logo'

const footerNavigation = {
  learn: [
    { name: 'The Project', href: '/#the-project' },
    { name: 'How it Works', href: '/#how-it-works' },
    { name: 'Tokenomics', href: '/#tokenomics' },
    { name: 'Why to Join', href: '/#why-to-join' },
  ],
  developers: [
    { name: 'Overview', href: '/developers#overview' },
    { name: 'APIs & Integration', href: '/developers#apis' },
    { name: 'Blockchain', href: '/developers#blockchain' },
    { name: 'Documentation', href: '/developers' },
  ],
  network: [
    { name: 'Become a Miner', href: '/become-miner' },
    { name: 'Buy Tokens', href: '/buy-tokens' },
    { name: 'Network Stats', href: '/' },
    { name: 'Community', href: '/community' },
  ],
  community: [
    { name: 'Discord Community', href: '#' },
    { name: 'Administrators', href: '/community' },
    { name: 'Event Showcase', href: '#' },
    { name: 'Partner Program', href: '#' },
  ],
}

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'Discord', href: '#', icon: MessageCircle },
  { name: 'Telegram', href: '#', icon: Send },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-4 block">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              Revolutionizing event ticketing with secure, transparent NFT technology on blockchain.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:col-span-4">
            <div>
              <h3 className="text-sm font-semibold mb-4">Learn</h3>
              <ul className="space-y-2">
                {footerNavigation.learn.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4">Developers</h3>
              <ul className="space-y-2">
                {footerNavigation.developers.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4">Network</h3>
              <ul className="space-y-2">
                {footerNavigation.network.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                {footerNavigation.community.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Tickfy Network. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}