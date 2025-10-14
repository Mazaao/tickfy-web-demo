import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'
import Logo from '../ui/logo'
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu'
import { Menu, X, ChevronDown, Wallet, Rocket } from 'lucide-react'
import { cn } from '../../lib/utils'

const navigation = [
  { 
    name: 'Learn', 
    href: '/learn',
    items: [
      { name: 'Overview', href: '/learn#overview', description: 'Understanding the platform and its benefits' },
      { name: 'How It Works', href: '/learn#how-it-works', description: 'NFT tickets and blockchain technology' },
      { name: 'Token System', href: '/learn#tokens', description: 'TKFY and TKFYT tokens explained' },
      { name: 'For Your Business', href: '/learn#for-business', description: 'Benefits for producers and developers' }
    ]
  },
  { 
    name: 'Use', 
    href: '/use',
    items: [
      { name: 'Overview', href: '/use#overview', description: 'Why use Tickfy Network' },
      { name: 'Wallets', href: '/use#wallets', description: 'Set up your wallet to use the network' },
      { name: 'Tickets', href: '/use#tickets', description: 'How to buy and manage NFT tickets' },
      { name: 'Events', href: '/use#events', description: 'Create and organize events' },
      { name: 'Marketplace', href: '/use#marketplace', description: 'Secure buy and sell' }
    ]
  },
  { 
    name: 'Developers', 
    href: '/developers',
    items: [
      { name: 'Overview', href: '/developers#overview', description: 'Why develop on Tickfy' },
      { name: 'APIs & Integration', href: '/developers#apis', description: 'SDKs and tools' },
      { name: 'Blockchain', href: '/developers#blockchain', description: 'Contracts and infrastructure' }
    ]
  },
  { name: 'Community', href: '/community' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  const handleNavigationClick = (e, href) => {
    // Se o link contém um hash (#), fazer scroll suave
    if (href.includes('#')) {
      const [path, hash] = href.split('#')
      
      // Se já estamos na página, apenas fazer scroll
      if (location.pathname === path || path === '') {
        e.preventDefault()
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          setIsMenuOpen(false)
        }
      }
    }
  }

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md border-b shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Logo showText={false} />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger className={cn(
                        navigationMenuTriggerStyle(),
                        location.pathname.startsWith(item.href) && "bg-accent text-accent-foreground"
                      )}>
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                          {item.items.map((subItem) => (
                            <NavigationMenuLink key={subItem.name} asChild>
                              <Link
                                to={subItem.href}
                                onClick={(e) => handleNavigationClick(e, subItem.href)}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{subItem.name}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {subItem.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          location.pathname === item.href && "bg-accent text-accent-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/buy-tokens#overview">
              <Button variant="ghost" size="sm" className="gap-2">
                <Wallet className="h-4 w-4" />
                Buy Tokens
              </Button>
            </Link>
            <Button variant="gradient" size="sm" className="gap-2">
              <Rocket className="h-4 w-4" />
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden fixed inset-x-0 top-16 z-40 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="bg-background/95 backdrop-blur-md border-b shadow-lg min-h-screen">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.items && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={(e) => handleNavigationClick(e, subItem.href)}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent/50 transition-colors"
                        >
                          • {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 space-y-3 px-4">
                <Link to="/buy-tokens">
                  <Button variant="ghost" className="w-full justify-start gap-3 h-12" onClick={() => setIsMenuOpen(false)}>
                    <Wallet className="h-5 w-5" />
                    Buy Tokens
                  </Button>
                </Link>
                <Button variant="gradient" className="w-full gap-3 h-12">
                  <Rocket className="h-5 w-5" />
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  )
}