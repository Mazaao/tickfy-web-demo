import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import Hero from '../components/sections/Hero'
import Section from '../components/sections/Section'
import StatsGrid from '../components/sections/StatsGrid'
import Logo from '../components/ui/logo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import {
  Shield, Zap, Coins, CheckCircle, ArrowRight, Globe, Target, DollarSign,
  Building2, Code, Pickaxe, Package, Network, TrendingUp, Users
} from 'lucide-react'

// Componente de logo normal para usar como ícone
const TickfyIcon = ({ className }) => (
  <img 
    src="/logo.svg" 
    alt="Tickfy" 
    className={className}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = '/logo.png';
    }}
  />
)

// Componente de logo rotacionada 90 graus
const TickfyIconRotated = ({ className }) => (
  <img 
    src="/logo.svg" 
    alt="Tickfy" 
    className={className}
    style={{ transform: 'rotate(90deg)' }}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = '/logo.png';
    }}
  />
)

// Componente de texto animado com efeito scramble
function ScrambleText({ text, className = '' }) {
  const [displayText, setDisplayText] = useState(text)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*'
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (elementRef.current) {
      observer.observe(elementRef.current)
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [hasAnimated])
  
  useEffect(() => {
    if (!isVisible) return
    
    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration) {
              return text[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )
      
      if (iteration >= text.length) {
        clearInterval(interval)
      }
      
      iteration += 1 / 2
    }, 20)
    
    return () => clearInterval(interval)
  }, [text, isVisible])
  
  return <span ref={elementRef} className={className}>{displayText}</span>
}

// Componente de contagem animada para números fixos (ex.: 420K+, 540+)
function CountingNumber({ value, duration = 1200 }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)

  // Extrai número e sufixo (ex.: 420K+ => 420, 'K+')
  const match = typeof value === 'string' ? value.match(/^[\s]*([\d.]+)\s*(.*)$/) : null
  const targetNum = match ? parseFloat(match[1]) : (typeof value === 'number' ? value : 0)
  const suffix = match ? match[2] : (typeof value === 'number' ? '' : '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      { threshold: 0.2 }
    )
    if (elementRef.current) observer.observe(elementRef.current)
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current)
    }
  }, [hasAnimated])

  useEffect(() => {
    if (!isVisible) return
    const start = performance.now()
    let raf
    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(1, elapsed / duration)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(targetNum * eased)
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setCount(targetNum)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isVisible, targetNum, duration])

  const format = (n) => {
    // Para sufixos como K+ e M+, mostramos apenas o número com 0 casas
    if (suffix.includes('K') || suffix.includes('M')) {
      return Math.round(n).toString()
    }
    // Para números inteiros pequenos (ex.: 540+)
    if (targetNum >= 100) return Math.floor(n).toString()
    return n.toFixed(1)
  }

  return (
    <span ref={elementRef} className="tabular-nums">
      {format(count)}{suffix}
    </span>
  )
}

// Componente de contador em tempo real baseado no timestamp
function LiveCounter({ baseValue, incrementPerSecond, decimals = 0, formatAsK = false }) {
  const [count, setCount] = useState(baseValue)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)
  
  // Calcula o valor base usando o timestamp atual
  // Base: 1 de janeiro de 2024 às 00:00:00
  const baseTimestamp = new Date('2024-01-01T00:00:00Z').getTime()
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (elementRef.current) {
      observer.observe(elementRef.current)
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])
  
  useEffect(() => {
    if (!isVisible) return
    
    const updateCount = () => {
      const now = Date.now()
      const secondsSinceBase = (now - baseTimestamp) / 1000
      const newCount = baseValue + (secondsSinceBase * incrementPerSecond)
      setCount(newCount)
    }
    
    updateCount()
    const interval = setInterval(updateCount, 100) // Atualiza a cada 100ms para suavidade
    
    return () => clearInterval(interval)
  }, [isVisible, baseValue, incrementPerSecond, baseTimestamp])
  
  const formatNumber = (num) => {
    if (!formatAsK) {
      // Formato normal com separadores de milhar
      const parts = num.toFixed(decimals).split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return parts.join('.')
    }
    
    // Formato K ou M
    if (num >= 1000000) {
      const millions = num / 1000000
      return `${millions.toFixed(decimals)}M`
    } else if (num >= 1000) {
      const thousands = num / 1000
      return `${thousands.toFixed(decimals)}K`
    } else {
      return num.toFixed(decimals)
    }
  }
  
  return (
    <span ref={elementRef} className="tabular-nums">
      {formatNumber(count)}
    </span>
  )
}

const stats = [
  { value: '420K+', label: 'Tickets Minted', description: 'NFT tickets created' },
  { value: '540+', label: 'Events Hosted', description: 'Successful events' },
  { value: '167', label: 'Active Validators', description: 'Securing the network' }
]

const mainBenefits = [
  {
    icon: Shield,
    title: 'Security',
    description: 'NFT-based tickets impossible to counterfeit',
    benefits: ['Blockchain verified', 'Immutable records', 'Fraud prevention']
  },
  {
    icon: TrendingUp,
    title: 'Transparency',
    description: 'All transactions visible on blockchain',
    benefits: ['Open ledger', 'Fair pricing', 'No hidden fees']
  },
  {
    icon: Zap,
    title: 'Speed',
    description: 'Instant transfers and settlement',
    benefits: ['Real-time trades', 'Quick check-in', 'Fast payments']
  },
  {
    icon: Users,
    title: 'Control',
    description: 'Full ownership in your wallet',
    benefits: ['Your keys', 'Direct access', 'No middlemen']
  }
]

const howItWorks = [
  {
    step: '1',
    title: 'Event Creation',
    description: 'Producer creates an event and defines ticket parameters',
    icon: Target,
    details: ['Set prices and quantities', 'Configure resale rules', 'Customize fees distribution']
  },
  {
    step: '2',
    title: 'Ticket Minting',
    description: 'NFT tickets are created on the blockchain',
    icon: Package,
    details: ['Each ticket is unique', 'Immutable ownership record', 'Instant availability']
  },
  {
    step: '3',
    title: 'Marketplace Trading',
    description: 'Buyers and sellers trade tickets securely',
    icon: Globe,
    details: ['Transparent pricing', 'Automatic fee distribution', 'Secure smart contracts']
  },
  {
    step: '4',
    title: 'Event Check-in',
    description: 'Verify ticket ownership at the venue',
    icon: CheckCircle,
    details: ['QR code scanning', 'Real-time validation', 'Fraud prevention']
  }
]

const tokens = [
  {
    name: 'TKFYT',
    subtitle: 'USDT Backed',
    icon: TickfyIconRotated,
    color: 'green',
    description: 'Main token for ticket transactions',
    features: [
      'Dynamic supply controlled by Treasury',
      'Parity: 1 USDT ≈ 1,000,000 TKFYT',
      'Automatic mint when USDT enters Treasury',
      'Burn when TKFYT is redeemed for USDT',
      'Used for ticket payments and settlement'
    ],
    technical: {
      supply: 'Dynamic',
      backing: 'USDT 1:1M',
      control: 'On-chain Treasury'
    }
  },
  {
    name: 'TKFY',
    subtitle: 'Stake & Governance',
    icon: TickfyIcon,
    color: 'purple', 
    description: 'Network security and PoS validation token',
    features: [
      'Fixed supply: 50,000,000 TKFY',
      'Minimum stake: 5,000 TKFY to validate',
      'Delegatable with 80/20 split (delegator/validator)',
      'Rewards: 0.50% of each block volume',
      'Network governance and security'
    ],
    technical: {
      supply: '50,000,000 (fixed)',
      minStake: '5,000 TKFY',
      rewards: '0.50% vol/block'
    }
  }
]

const networkSpecs = [
  {
    title: 'Consensus',
    value: 'Proof of Stake (PoS)',
    icon: Shield,
    details: ['66% supermajority required', 'Proportional stake proposal', 'Slashing for malicious validators']
  },
  {
    title: 'Blocktime',
    value: '5 seconds',
    icon: Zap,
    details: ['Fast finality', 'Instant confirmations', 'Optimized for live events']
  },
  {
    title: 'Network Fees',
    value: '0.60% total',
    icon: DollarSign,
    details: ['0.10% to Treasury', '0.50% to Validators', 'Calculated on block volume']
  }
]

const whyJoinReasons = [
  {
    icon: Shield,
    title: 'Stronger Security',
    description: 'Immutable blockchain records, impossible to counterfeit'
  },
  {
    icon: DollarSign,
    title: 'Low Fees',
    description: 'Only 0.60% network fee, transparent and fair'
  },
  {
    icon: Code,
    title: 'Easy to Integrate',
    description: 'Native REST APIs from protocol, simple implementation'
  },
  {
    icon: Coins,
    title: 'Fixed Mint Price',
    description: 'Stable 1,000 TKFY per ticket, pegged to FMI index'
  },
  {
    icon: TrendingUp,
    title: 'Resale Market',
    description: 'Fair secondary market with transparent pricing'
  },
  {
    icon: Network,
    title: 'Resell Fees Protocol',
    description: 'Customizable fees distributed to producers and platforms'
  }
]

const keyStats = [
  { label: 'Transaction Fee', value: '0.6%', description: 'Much lower than traditional platforms' },
  { label: 'Fraud Rate', value: '0%', description: 'Impossible to counterfeit NFT tickets' },
  { label: 'Transfer Time', value: '< 5s', description: 'Instant ticket transfers' },
  { label: 'Uptime', value: '99.9%', description: 'Reliable blockchain infrastructure' }
]

// Componente para cards de tokens expansíveis
function TokenCards({ tokens }) {
  const [expandedToken, setExpandedToken] = useState(0) // TKFYT expandido por padrão
  const [showContent, setShowContent] = useState(true) // Controla a visibilidade do conteúdo

  const recommendationTags = {
    'TKFYT': (
      <>
        Recommended for <strong>ticketing</strong> and <strong>transactions</strong>
      </>
    ),
    'TKFY': (
      <>
        Recommended for <strong>mining</strong> and <strong>staking</strong>
      </>
    )
  }

  const handleCardClick = (index) => {
    if (expandedToken !== index) {
      setShowContent(false) // Esconde o conteúdo imediatamente
      setExpandedToken(index)
      // Mostra o conteúdo após a animação de width (500ms)
      setTimeout(() => {
        setShowContent(true)
      }, 500)
    }
  }

  return (
    <div className="flex gap-4 mb-12 max-w-4xl mx-auto">
      {tokens.map((token, index) => {
        const isExpanded = expandedToken === index
        
        return (
          <Card 
            key={index} 
            onClick={() => handleCardClick(index)}
            className={`border-2 transition-all duration-500 relative cursor-pointer ${
              isExpanded 
                ? 'flex-1 border-purple-600 shadow-xl shadow-purple-600/20' 
                : 'w-44 border-gray-300 dark:border-gray-700 hover:border-purple-400 opacity-80'
            }`}
          >
            <div className={`absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg transition-all duration-500 ${
              isExpanded && showContent ? '' : 'opacity-0'
            }`}>
              {token.name}
            </div>
            
            {/* Versão minimizada - apenas ícone e nome */}
            {!isExpanded && (
              <div className="p-6 flex flex-col items-center justify-center min-h-[250px]">
                <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 mb-4">
                  <token.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg mb-1">{token.name}</div>
                  <div className="text-xs text-muted-foreground">{token.subtitle}</div>
                </div>
              </div>
            )}
            
            {/* Versão expandida - conteúdo completo com delay de render para evitar jump de altura */}
            {isExpanded && (
              <div className="min-h-[250px]">
                {showContent ? (
                  <>
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800">
                          <token.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-1">{token.subtitle}</CardTitle>
                          <CardDescription className="text-sm">{token.description}</CardDescription>
                        </div>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-300 dark:border-purple-800 rounded-lg px-3 py-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                        <p className="text-xs text-purple-700 dark:text-purple-300 font-medium">
                          {recommendationTags[token.name]}
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg">
                        <div className="grid grid-cols-3 gap-3 text-center">
                          <div>
                            <div className="text-xs font-semibold text-muted-foreground mb-1">Supply</div>
                            <div className="text-sm font-bold text-primary">{token.technical.supply}</div>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-muted-foreground mb-1">
                              {token.name === 'TKFYT' ? 'Backing' : 'Min Stake'}
                            </div>
                            <div className="text-sm font-bold text-primary">
                              {token.name === 'TKFYT' ? token.technical.backing : token.technical.minStake}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-muted-foreground mb-1">
                              {token.name === 'TKFYT' ? 'Control' : 'Rewards'}
                            </div>
                            <div className="text-sm font-bold text-primary">
                              {token.name === 'TKFYT' ? token.technical.control : token.technical.rewards}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Technical Features:</h4>
                        <div className="space-y-1.5">
                          {token.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-3.5 w-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </>
                ) : (
                  // Placeholder mínimo enquanto o width anima
                  <div className="p-6" />
                )}
              </div>
            )}
          </Card>
        )
      })}
    </div>
  )
}

// (Removed RotatingCards; restoring static layout in Why to Join)

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  const handleBecomeMinerClick = () => {
    navigate('/become-miner')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
  <div className="pt-16">
        <Hero
          subtitle={<ScrambleText text="The Future of Ticketing" />}
          title={
            <>
              Welcome to{' '}
              <span className="gradient-text">Tickfy</span>
            </>
          }
          description="Experience the next generation of event ticketing with NFT technology. Secure, transparent, and fraud-proof tickets for events worldwide."
          primaryAction={{
            text: 'Get Started',
            onClick: () => console.log('Get Started clicked')
          }}
          secondaryAction={{
            text: 'Learn More',
            onClick: () => console.log('Learn More clicked')
          }}
        >
          <div className="mt-16">
            <StatsGrid 
              stats={stats} 
              // Usa uma duração maior para a animação de contagem no herói (3s)
              CountingComponent={(props) => (
                <CountingNumber {...props} duration={3000} />
              )}
            />
          </div>
        </Hero>

        <Section
          id="the-project"
          className="scroll-mt-24"
          title="The Project"
          subtitle={<ScrambleText text="How Tickfy Network was born and its purpose" />}
          description="A specialized blockchain designed exclusively for event ticketing using NFT technology"
        >
          <div className="space-y-16 mb-16">
            {/* Row 1: Text left, Image right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 order-2 lg:order-1">
                <h3 className="text-3xl font-bold">Understanding NFT tickets and it's powerful</h3>
                <p className="text-lg text-muted-foreground">
                  Tickfy is a 100% decentralized network with real mining incentives. Validators earn a percentage of ticket transactions in each block, not symbolic fees. Designed for all players (from large event organizers to independent producers).
                </p>
                <p className="text-lg text-muted-foreground">
                  Stable mint costs guarantee cost predictability. Configure resale fees directly in the blockchain core, creating economic opportunities for producers, ticketing platforms, and consumers (NFTs tickets are safer, faster and more profitable than normal tickets).
                </p>

              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/20">
                  <img 
                    src="/images/g16.png" 
                    alt="Blockchain Built for Ticketing" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Image left, Text right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/20">
                  <img 
                    src="/images/g9.png" 
                    alt="Open-Source & Community-Driven" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 order-2">
                <h3 className="text-3xl font-bold">Born from Crypto Community, Built for Everyone</h3>
                <p className="text-lg text-muted-foreground">
                  The project is deeply rooted in the crypto community, which identified the absence of blockchain technology truly suitable for the ticketing sector. Over time, experienced blockchain infrastructure developers joined the initiative, making the project public and strengthening an active, engaged, and specialized community.
                </p>
                <p className="text-lg text-muted-foreground">
                  Tickfy consolidates as an open-source solution, guided by principles such as community development, market freedom, and collective growth. A non-profit protocol, created by the community and for the community, with the clear purpose of revolutionizing ticketing through blockchain technology.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="how-it-works"
          title="How it Works"
          subtitle={<ScrambleText text="Step by step guide to use the platform" />}
          description="From event creation to check-in, everything powered by blockchain"
          background="muted"
        >
          <div className="relative">
            {/* Energy particles flowing between cards - Desktop Only */}
            {/* Line 1 - Top */}
            <div className="hidden lg:block absolute top-[60px] left-[25%] right-[25%] h-0.5 pointer-events-none overflow-visible">
              <div className="absolute top-0 h-1 w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"
                   style={{
                     animation: 'flowParticle 3s ease-in-out infinite',
                     animationDelay: '0s',
                     left: '-48px',
                     filter: 'blur(1px)'
                   }} />
              <div className="absolute top-0 h-1 w-8 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"
                   style={{
                     animation: 'flowParticle 3s ease-in-out infinite',
                     animationDelay: '0.6s',
                     left: '-32px',
                     filter: 'blur(1px)'
                   }} />
              <div className="absolute top-0 h-1 w-10 bg-gradient-to-r from-transparent via-violet-400 to-transparent rounded-full"
                   style={{
                     animation: 'flowParticle 3s ease-in-out infinite',
                     animationDelay: '1.2s',
                     left: '-40px',
                     filter: 'blur(1px)'
                   }} />
            </div>

            {/* Line 2 - Upper Middle */}
            <div className="hidden lg:block absolute top-[140px] left-[25%] right-[25%] h-0.5 pointer-events-none overflow-visible">
              <div className="absolute top-0 h-1 w-10 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full"
                   style={{
                     animation: 'flowParticle 3s ease-in-out infinite',
                     animationDelay: '0.4s',
                     left: '-40px',
                     filter: 'blur(1px)'
                   }} />
              <div className="absolute top-0 h-1 w-6 bg-gradient-to-r from-transparent via-purple-300 to-transparent rounded-full"
                   style={{
                     animation: 'flowParticle 3s ease-in-out infinite',
                     animationDelay: '1s',
                     left: '-24px',
                     filter: 'blur(1px)'
                   }} />
              <div className="absolute top-0 h-1 w-8 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full"
                   style={{
                     animation: 'flowParticle 3s ease-in-out infinite',
                     animationDelay: '1.6s',
                     left: '-32px',
                     filter: 'blur(1px)'
                   }} />
            </div>

            {/* Line 3 - Lower Middle */}
            <div className="hidden lg:block absolute top-[220px] left-[25%] right-[25%] h-0.5 pointer-events-none overflow-visible">
              <div className="absolute top-0 h-1 w-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"
                   style={{
                     animation: 'flowParticle 3s ease-in-out infinite',
                     animationDelay: '0.2s',
                     left: '-32px',
                     filter: 'blur(1px)'
                   }} />
              <div className="absolute top-0 h-1 w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"
                   style={{
                     animation: 'flowParticle 3s ease-in-out infinite',
                     animationDelay: '0.8s',
                     left: '-48px',
                     filter: 'blur(1px)'
                   }} />
              <div className="absolute top-0 h-1 w-7 bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded-full"
                   style={{
                     animation: 'flowParticle 3s ease-in-out infinite',
                     animationDelay: '1.4s',
                     left: '-28px',
                     filter: 'blur(1px)'
                   }} />
            </div>

            {/* Line 4 - Bottom */}
            <div className="hidden lg:block absolute top-[300px] left-[25%] right-[25%] h-0.5 pointer-events-none overflow-visible">
              <div className="absolute top-0 h-1 w-10 bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full"
                   style={{
                     animation: 'flowParticle 3s ease-in-out infinite',
                     animationDelay: '0.5s',
                     left: '-40px',
                     filter: 'blur(1px)'
                   }} />
              <div className="absolute top-0 h-1 w-9 bg-gradient-to-r from-transparent via-indigo-300 to-transparent rounded-full"
                   style={{
                     animation: 'flowParticle 3s ease-in-out infinite',
                     animationDelay: '1.1s',
                     left: '-36px',
                     filter: 'blur(1px)'
                   }} />
              <div className="absolute top-0 h-1 w-8 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"
                   style={{
                     animation: 'flowParticle 3s ease-in-out infinite',
                     animationDelay: '1.7s',
                     left: '-32px',
                     filter: 'blur(1px)'
                   }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {howItWorks.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="border-2 hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <div className="mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl mx-auto mb-4 relative z-20 shadow-lg">
                          {step.step}
                        </div>
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="text-center text-lg">{step.title}</CardTitle>
                      <CardDescription className="text-center">{step.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <style jsx>{`
            @keyframes flowParticle {
              0% {
                transform: translateX(0) scaleX(1);
                opacity: 0;
              }
              10% {
                opacity: 1;
              }
              90% {
                opacity: 1;
              }
              100% {
                transform: translateX(calc(100vw * 0.5)) scaleX(0.8);
                opacity: 0;
              }
            }

            @keyframes gentlePulse {
              0%, 100% {
                transform: scale(1);
                opacity: 0.8;
              }
              50% {
                transform: scale(1.3);
                opacity: 0.4;
              }
            }
          `}</style>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Network Specifications</h3>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${networkSpecs.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6`}>
              {networkSpecs.map((spec, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 relative overflow-visible">
                      <div className="absolute inset-0 rounded-full bg-primary/10" 
                           style={{
                             animation: 'gentlePulse 3s ease-in-out infinite'
                           }} />
                      <spec.icon className="h-6 w-6 text-primary relative z-10" />
                    </div>
                    <CardTitle className="text-lg">{spec.title}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{spec.value}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {spec.details.map((detail, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground">
                          • {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="tokenomics"
          title="Tokenomics"
          subtitle={<ScrambleText text="Tokens, conversion rates, fees and mining" />}
          description="TKFYT backed by USDT + TKFY for network security"
        >
          <TokenCards tokens={tokens} />

          <div className="mt-12 text-center">
            <Link to="/buy-tokens">
              <Button size="lg" variant="gradient" className="text-lg px-8">
                <Coins className="mr-2 h-5 w-5" />
                Buy Tokens
              </Button>
            </Link>
          </div>
        </Section>

        <Section
          id="why-to-join"
          title="Why to Join"
          subtitle={<ScrambleText text="Benefits for producers, agencies and customers" />}
          description="How Tickfy Network solves real problems with blockchain technology"
          background="muted"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
            {/* Left Side - 3 Cards */}
            <div className="space-y-4">
              {whyJoinReasons.slice(0, 3).map((reason, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <reason.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{reason.title}</CardTitle>
                        <CardDescription className="text-sm mt-1">{reason.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Center - Image (2 columns) */}
            <div className="lg:order-none order-first lg:col-span-2">
              <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg">
                <img 
                  src="/images/g6.png" 
                  alt="Tickfy Network" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - 3 Cards */}
            <div className="space-y-4">
              {whyJoinReasons.slice(3, 6).map((reason, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <reason.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{reason.title}</CardTitle>
                        <CardDescription className="text-sm mt-1">{reason.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section
          title="Ready to Get Started?"
          subtitle={<ScrambleText text="Join the Revolution" />}
          description="Start using, developing or validating on Tickfy Network today"
        >
          <div className="text-center space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="gradient" className="text-lg px-8" onClick={handleBecomeMinerClick}>
                <Pickaxe className="mr-2 h-5 w-5" />
                Become a Miner
              </Button>
              <Link to="/developers">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Code className="mr-2 h-5 w-5" />
                  Developer Docs
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="text-sm px-4 py-2">No Hidden Fees</Badge>
              <Badge variant="outline" className="text-sm px-4 py-2">Zero Fraud</Badge>
              <Badge variant="outline" className="text-sm px-4 py-2">Instant Transfers</Badge>
              <Badge variant="outline" className="text-sm px-4 py-2">Full Control</Badge>
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}
