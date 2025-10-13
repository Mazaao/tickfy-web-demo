import { Link } from 'react-router-dom'
import { Github, Twitter, MessageCircle, Send } from 'lucide-react'
import Logo from '../ui/logo'

const footerNavigation = {
  learn: [
    { name: 'What is Tickfy?', href: '/learn/what-is-tickfy' },
    { name: 'NFT Tickets Guide', href: '/learn/nft-tickets' },
    { name: 'Event Creation', href: '/learn/create-events' },
    { name: 'Roadmap', href: '/learn/roadmap' },
  ],
  use: [
    { name: 'Buy Tickets', href: '/use/buy-tickets' },
    { name: 'Create Events', href: '/use/create-events' },
    { name: 'Manage Tickets', href: '/use/manage-tickets' },
    { name: 'Ticket Scanner', href: '/use/scanner' },
  ],
  build: [
    { name: 'Ticketing API', href: '/build/api' },
    { name: 'Documentation', href: '/build/docs' },
    { name: 'NFT Contracts', href: '/build/contracts' },
    { name: 'Integration Guide', href: '/build/integration' },
  ],
  community: [
    { name: 'Discord', href: 'https://discord.gg/tickfy' },
    { name: 'Event Showcase', href: '/community/events' },
    { name: 'Partner Program', href: '/community/partners' },
    { name: 'Blog', href: '/community/blog' },
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
              <h3 className="text-sm font-semibold mb-4">Use</h3>
              <ul className="space-y-2">
                {footerNavigation.use.map((item) => (
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
              <h3 className="text-sm font-semibold mb-4">Build</h3>
              <ul className="space-y-2">
                {footerNavigation.build.map((item) => (
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
            © 2024 Tickfy. All rights reserved.
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