import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
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
import { Menu, X, ChevronDown, Wallet, Rocket, Pickaxe, HandCoins } from 'lucide-react'
import { cn } from '../../lib/utils'

const navigation = [
  { 
    name: 'Learn and Use', 
    href: '/',
    items: [
      { name: 'The Project', href: '/#the-project', description: 'How Tickfy Network was born and its purpose' },
      { name: 'How it Works', href: '/#how-it-works', description: 'Step by step guide to use the platform' },
      { name: 'Tokenomics', href: '/#tokenomics', description: 'Tokens, conversion rates, fees and mining' },
      { name: 'Why to Join', href: '/#why-to-join', description: 'Benefits for producers, agencies and customers' }
    ]
  },
  { 
    name: 'Developers', 
    href: '/developers',
    items: [
      { name: 'Overview', href: '/developers#overview', description: 'Why develop on Tickfy' },
      { name: 'APIs & Integration', href: '/developers#apis', description: 'SDKs and tools' },
      { name: 'Code Examples', href: '/developers#code-examples', description: 'Implementation examples' }
    ]
  },
  { name: 'Community', href: '/community' },
  { name: 'Forum', href: '/forum' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Determine which top-level group is active based on current route
  const pathname = location.pathname
  const isDevelopers = pathname.startsWith('/developers')
  const isCommunity = pathname.startsWith('/community')
  const isForum = pathname.startsWith('/forum')
  const isBecomeMiner = pathname.startsWith('/become-miner')
  const isDelegateTokens = pathname.startsWith('/delegate-tokens')
  const isBuyTokens = pathname.startsWith('/buy-tokens')
  const isLearnAndUse = !isDevelopers && !isCommunity && !isForum && !isBecomeMiner && !isDelegateTokens && !isBuyTokens // default group for home and general pages
  const isLearnRelated = (
    pathname === '/' ||
    pathname.startsWith('/learn') ||
    pathname.startsWith('/build')
  )

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

  const handleBecomeMinerClick = () => {
    navigate('/become-miner')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const handleDelegateTokensClick = () => {
    navigate('/delegate-tokens')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      (isScrolled || isMenuOpen)
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
                <NavigationMenuItem 
                  key={item.name}
                  className={cn(
                    (item.name === 'Learn and Use' && (isLearnAndUse || isLearnRelated)) && 'text-primary',
                    (item.name === 'Developers' && isDevelopers) && 'text-primary',
                    (item.name === 'Community' && isCommunity) && 'text-primary',
                    (item.name === 'Forum' && isForum) && 'text-primary'
                  )}
                >
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger 
                        data-active={(item.name === 'Learn and Use' && (isLearnAndUse || isLearnRelated)) || (item.name === 'Developers' && isDevelopers) ? '' : undefined}
                        className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-transparent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-transparent data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-800",
                        (item.name === 'Learn and Use' && (isLearnAndUse || isLearnRelated)) && 'text-primary data-[state=open]:text-primary data-[active]:text-primary',
                        (item.name === 'Developers' && isDevelopers) && 'text-primary data-[state=open]:text-primary data-[active]:text-primary'
                        )}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                          {item.items.map((subItem) => (
                            <NavigationMenuLink key={subItem.name} asChild>
                              <Link
                                to={subItem.href}
                                onClick={(e) => handleNavigationClick(e, subItem.href)}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800"
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
                          "inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-transparent focus:outline-none",
                          item.name === 'Community' && isCommunity && 'text-primary',
                          item.name === 'Forum' && isForum && 'text-primary'
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
            <Button 
              variant={isBecomeMiner ? "default" : "outline"} 
              size="sm" 
              className={cn(
                "gap-2",
                !isBecomeMiner && "hover:bg-gray-100 dark:hover:bg-gray-800"
              )} 
              onClick={handleBecomeMinerClick}
            >
              <Pickaxe className="h-4 w-4" />
              Become a Miner
            </Button>
            <Button 
              variant={isDelegateTokens ? "default" : "outline"} 
              size="sm" 
              className={cn(
                "gap-2",
                !isDelegateTokens && "hover:bg-gray-100 dark:hover:bg-gray-800"
              )} 
              onClick={handleDelegateTokensClick}
            >
              <HandCoins className="h-4 w-4" />
              Delegate Tokens
            </Button>
            <Link to="/buy-tokens#overview">
              <Button 
                variant={isBuyTokens ? "default" : "outline"} 
                size="sm" 
                className={cn(
                  "gap-2",
                  !isBuyTokens && "hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                <Wallet className="h-4 w-4" />
                Buy Tokens
              </Button>
            </Link>
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

        {/* Mobile Navigation - expande dentro do header */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block px-4 py-3 rounded-lg text-base font-medium transition-colors text-foreground hover:bg-gray-100 dark:hover:bg-gray-800",
                  item.name === 'Learn and Use' && (isLearnAndUse || isLearnRelated) && 'text-primary',
                  item.name === 'Developers' && isDevelopers && 'text-primary',
                  item.name === 'Community' && isCommunity && 'text-primary',
                  item.name === 'Forum' && isForum && 'text-primary'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-8 space-y-4 px-4">
              <Button 
                variant={isBecomeMiner ? "default" : "outline"} 
                className={cn(
                  "w-full justify-center gap-3 h-12",
                  !isBecomeMiner && "hover:bg-gray-100 dark:hover:bg-gray-800"
                )} 
                onClick={handleBecomeMinerClick}
              >
                <Pickaxe className="h-5 w-5" />
                Become a Miner
              </Button>
              <Button 
                variant={isDelegateTokens ? "default" : "outline"} 
                className={cn(
                  "w-full justify-center gap-3 h-12",
                  !isDelegateTokens && "hover:bg-gray-100 dark:hover:bg-gray-800"
                )} 
                onClick={handleDelegateTokensClick}
              >
                <HandCoins className="h-5 w-5" />
                Delegate Tokens
              </Button>
              <Link to="/buy-tokens" className="block">
                <Button 
                  variant={isBuyTokens ? "default" : "outline"} 
                  className={cn(
                    "w-full justify-center gap-3 h-12",
                    !isBuyTokens && "hover:bg-gray-100 dark:hover:bg-gray-800"
                  )} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Wallet className="h-5 w-5" />
                  Buy Tokens
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}