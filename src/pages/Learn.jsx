import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import Section from '../components/sections/Section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { 
  Shield, Zap, Coins, CheckCircle, ArrowRight, Globe, Lock, TrendingUp,
  Users, Target, DollarSign, Award, Building2, Code, Rocket, Package,
  Calendar, Ticket, Settings, RefreshCw, Wallet, CreditCard, Database,
  Network, Eye, Pickaxe, BarChart3
} from 'lucide-react'

// The Project - Why Tickfy exists
const projectReasons = [
  {
    icon: Shield,
    title: 'Market Security Need',
    description: 'Current ticketing systems suffer from fraud, counterfeiting and lack of transparency.',
    details: ['Billions lost to fake tickets annually', 'No verification system', 'Centralized control']
  },
  {
    icon: RefreshCw,
    title: 'Safe Reselling',
    description: 'Secondary market needs transparent rules and guaranteed authenticity.',
    details: ['Price manipulation prevention', 'Automated royalty distribution', 'Verified ownership transfer']
  },
  {
    icon: TrendingUp,
    title: 'Exchange Opportunities',
    description: 'Token economy allows profit from currency appreciation and staking rewards.',
    details: ['USDT backing stability', 'Staking rewards up to 15%', 'Liquidity mining opportunities']
  },
  {
    icon: Eye,
    title: 'Complete Transparency',
    description: 'All transactions, fees and token movements are auditable on blockchain.',
    details: ['Public transaction history', 'Smart contract verification', 'Real-time treasury monitoring']
  }
]

// How it Works - Step by step usage
const howItWorksSteps = [
  {
    step: '1',
    title: 'Set Up Your Wallet',
    description: 'Install a Cosmos-compatible wallet and get TKFYT tokens',
    icon: Wallet,
    details: ['Download Keplr or compatible wallet', 'Add Tickfy Network', 'Buy TKFYT with USDT (1 USDT = 1M TKFYT)', 'Secure your seed phrase']
  },
  {
    step: '2',
    title: 'Browse Events',
    description: 'Explore available events and ticket options',
    icon: Calendar,
    details: ['Filter by date, location, price', 'View event details and venue', 'Check ticket availability', 'Compare prices in marketplace']
  },
  {
    step: '3',
    title: 'Purchase Tickets',
    description: 'Buy NFT tickets securely with TKFYT',
    icon: CreditCard,
    details: ['Select ticket quantity', 'Pay with TKFYT tokens', 'Receive NFT in wallet', 'Get instant confirmation']
  },
  {
    step: '4',
    title: 'Use or Trade',
    description: 'Use tickets at events or trade in secondary market',
    icon: Ticket,
    details: ['Present QR code at venue', 'Sell on marketplace if needed', 'Transfer to friends instantly', 'Earn from price appreciation']
  }
]

// Tokenomics - Complete token system
const tokenomicsData = [
  {
    title: 'TKFYT - Transaction Token',
    icon: Coins,
    color: 'green',
    description: 'Main utility token for all platform transactions',
    features: [
      'Backed by USDT (1 USDT ≈ 1,000,000 TKFYT)',
      'Dynamic supply controlled by Treasury',
      'Automatic mint when USDT enters Treasury',
      'Burn when TKFYT is redeemed for USDT',
      'Used for ticket purchases and platform fees'
    ]
  },
  {
    title: 'TKFY - Stake Token',
    icon: Shield,
    color: 'purple',
    description: 'Fixed supply token for network security and governance',
    features: [
      'Fixed supply: 50,000,000 TKFY',
      'Minimum stake: 5,000 TKFY to become validator',
      'Delegatable to validators (80/20 reward split)',
      'Used for network consensus and governance',
      'Earn 0.50% of all block transaction volume'
    ]
  }
]

const feeStructure = [
  {
    type: 'Network Fee',
    percentage: '0.10%',
    destination: 'Treasury',
    description: 'Platform maintenance and development'
  },
  {
    type: 'Validation Fee',
    percentage: '0.50%',
    destination: 'Validators & Delegators',
    description: 'Block validation and network security'
  },
  {
    type: 'Event Creation',
    cost: '1,000 TKFYT per ticket',
    destination: 'Treasury',
    description: 'Minting fee for each NFT ticket created'
  }
]

const miningInfo = [
  {
    icon: Pickaxe,
    title: 'Who Can Mine',
    points: ['Minimum 5,000 TKFY stake required', 'Technical knowledge for node operation', 'Reliable internet and hardware', '66% consensus requirement']
  },
  {
    icon: DollarSign,
    title: 'Mining Rewards',
    points: ['0.50% of total block volume', 'Proportional to stake amount', '20% commission on delegated stake', 'Automatic distribution every block']
  }
]

// Why to Join - Benefits for each user type
const benefitsData = [
  {
    userType: 'Event Producers',
    icon: Building2,
    color: 'blue',
    benefits: [
      'Custom resale fees up to 50%',
      'Automatic royalties on secondary sales',
      'Complete control over ticket parameters',
      'Real-time sales analytics',
      'Global reach without intermediaries',
      'Reduced fraud and chargebacks'
    ]
  },
  {
    userType: 'Ticketing Agencies',
    icon: Network,
    color: 'green',
    benefits: [
      'API integration with existing systems',
      'White-label marketplace solutions',
      'Revenue sharing opportunities',
      'Reduced operational costs',
      'Enhanced security features',
      'Multi-event management dashboard'
    ]
  },
  {
    userType: 'Ticket Buyers',
    icon: Users,
    color: 'purple',
    benefits: [
      'Guaranteed authentic tickets',
      'Transparent pricing with no hidden fees',
      'Instant transfers and reselling',
      'Price appreciation opportunities',
      'Global event access',
      'Secure wallet-based ownership'
    ]
  }
]

// Main Benefits for Overview Section
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

// How It Works - Simple Steps
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

// Token System - Technical Details
const tokens = [
  {
    name: 'TKFYT',
    subtitle: 'USDT Backed',
    icon: Coins,
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
    icon: Shield,
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

// Network Technical Specs
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
  },
  {
    title: 'Architecture',
    value: 'Cosmos SDK',
    icon: Database,
    details: ['Consensus Layer (staking)', 'Execution Layer (events)', 'Application Layer (APIs)']
  }
]

// Protocol Benefits - Technical Implementation
const protocolBenefits = [
  {
    title: 'Event Organizers',
    icon: Building2,
    color: 'gray',
    description: 'Full control over issuance and resale rules',
    benefits: [
      'Ticket minting: 1,000 TKFY per NFT created',
      'minTradeForceBatchPrice rule: resale ≥ batch price',
      'Customizable fees up to 50% of transaction value',
      'Mutable fields until event date',
      'Ticket status changeable up to 7 days post-event'
    ],
    technicalDetails: [
      'Only authorized mintAddress can create tickets',
      'On-chain business rules control', 
      'Complete transaction auditability'
    ],
    cta: 'Create Event',
    ctaLink: '/use#events'
  },
  {
    title: 'Sales Platforms',
    icon: Network,
    color: 'gray', 
    description: 'Direct integration with blockchain protocol',
    benefits: [
      'Native REST APIs from protocol',
      'Fixed fees: 0.60% on block volume (0.10% treasury + 0.50% validators)',
      'Instant settlement in TKFYT',
      'Complete fraud elimination (NFT)',
      'Native decentralized marketplace'
    ],
    technicalDetails: [
      'Integration via Cosmos SDK',
      'Public indexers available',
      'Blockchain explorer for auditing'
    ],
    cta: 'API Documentation',
    ctaLink: '/developers'
  },
  {
    title: 'Validators & Stakers',
    icon: Shield,
    color: 'gray',
    description: 'Network security participation',
    benefits: [
      'Rewards: 0.50% of each block volume',
      'Minimum stake: 5,000 TKFY to validate',
      'Delegation with 80/20 split (delegator/validator)',
      'On-chain protocol governance',
      'Slashing for malicious behavior'
    ],
    technicalDetails: [
      'PoS consensus with 66% supermajority',
      'Proportional proposal to total stake',
      'Automatically distributed rewards'
    ],
    cta: 'Start Validating',
    ctaLink: '/stake'
  }
]

// Key Statistics
const keyStats = [
  { label: 'Transaction Fee', value: '0.6%', description: 'Much lower than traditional platforms' },
  { label: 'Fraud Rate', value: '0%', description: 'Impossible to counterfeit NFT tickets' },
  { label: 'Transfer Time', value: '< 5s', description: 'Instant ticket transfers' },
  { label: 'Uptime', value: '99.9%', description: 'Reliable blockchain infrastructure' }
]

export default function Learn() {
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
      <div className="pt-16" id="the-project">
        <Hero
          subtitle="Learn"
          title="The Future of Event Ticketing"
          description="Discover how Tickfy Network uses blockchain technology to create secure, transparent, and fraud-proof ticketing for events worldwide."
        />

        {/* Section 1: The Project */}
        <Section
          title="The Project"
          subtitle="How Tickfy Network was born and its purpose"
          description="A specialized blockchain designed exclusively for event ticketing using NFT technology"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {mainBenefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow text-center group">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {benefit.benefits.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground justify-center">
                        <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Statistics */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Why Choose Tickfy?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {keyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Section 2: How It Works */}
        <Section
          id="how-it-works"
          title="How it Works"
          subtitle="Step by step guide to use the platform"
          description="From event creation to check-in, everything powered by blockchain"
          background="muted"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-2 hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl mx-auto mb-4">
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
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 justify-center">
                  <Globe className="h-8 w-8 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold text-lg">Built on Cosmos SDK</div>
                    <div className="text-sm text-muted-foreground">Battle-tested blockchain technology</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Section 3: Tokenomics */}
        <Section
          id="tokenomics"
          title="Tokenomics"
          subtitle="Tokens, conversion rates, fees and mining"
          description="TKFYT backed by USDT + TKFY for network security"
        >
          {/* Token Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {tokens.map((token, index) => (
              <Card key={index} className={`border-2 border-${token.color}-200 hover:shadow-xl transition-shadow relative overflow-hidden`}>
                <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                  {token.name}
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-xl bg-${token.color}-100 dark:bg-${token.color}-950/20`}>
                      <token.icon className={`h-10 w-10 text-${token.color}-600`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{token.subtitle}</CardTitle>
                      <CardDescription className="text-base font-medium">{token.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className={`bg-${token.color}-50 dark:bg-${token.color}-950/10 p-4 rounded-lg`}>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-sm font-semibold text-muted-foreground">Supply</div>
                        <div className={`text-lg font-bold text-${token.color}-600`}>{token.technical.supply}</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-muted-foreground">
                          {token.name === 'TKFYT' ? 'Backing' : 'Min Stake'}
                        </div>
                        <div className={`text-lg font-bold text-${token.color}-600`}>
                          {token.name === 'TKFYT' ? token.technical.backing : token.technical.minStake}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-muted-foreground">
                          {token.name === 'TKFYT' ? 'Control' : 'Rewards'}
                        </div>
                        <div className={`text-lg font-bold text-${token.color}-600`}>
                          {token.name === 'TKFYT' ? token.technical.control : token.technical.rewards}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Technical Features:</h4>
                    <div className="space-y-2">
                      {token.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Network Specifications */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Network Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {networkSpecs.map((spec, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <spec.icon className="h-6 w-6 text-primary" />
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

          <div className="mt-12 text-center">
            <Link to="/buy-tokens">
              <Button size="lg" variant="gradient" className="text-lg px-8 hover:bg-gray-100 dark:hover:bg-gray-800">
                <Coins className="mr-2 h-5 w-5" />
                Comprar Tokens
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Section>

        {/* Section 4: Why to Join */}
        <Section
          id="why-to-join"
          title="Why to Join"
          subtitle="Benefits for producers, agencies and customers"
          description="How Tickfy Network solves real problems with blockchain technology"
          background="muted"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {protocolBenefits.map((protocol, index) => (
              <Card key={index} className={`border-2 border-${protocol.color}-200 hover:shadow-xl transition-shadow`}>
                <CardHeader className="text-center">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-${protocol.color}-100 dark:bg-${protocol.color}-950/20 flex items-center justify-center mb-4`}>
                    <protocol.icon className={`h-8 w-8 text-${protocol.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{protocol.title}</CardTitle>
                  <CardDescription className="text-base">{protocol.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {protocol.benefits.slice(0, 4).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className={`bg-${protocol.color}-50 dark:bg-${protocol.color}-950/10 p-3 rounded-lg mb-4`}>
                    <div className="text-xs font-semibold text-muted-foreground mb-2">Technical Implementation:</div>
                    {protocol.technicalDetails.slice(0, 2).map((detail, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground mb-1">
                        • {detail}
                      </div>
                    ))}
                  </div>

                  <Link to={protocol.ctaLink}>
                    <Button variant="outline" className="w-full hover:bg-gray-100 dark:hover:bg-gray-800">
                      {protocol.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Protocol Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 border-2 border-green-200 hover:shadow-xl transition-shadow">
            <div className="text-center max-w-4xl mx-auto">
              <Database className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Complete On-Chain Protocol</h3>
              <p className="text-xl text-muted-foreground mb-8">
                All business rules, fees and validations are executed directly on the blockchain protocol, 
                ensuring transparency and eliminating intermediaries.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">0.60%</div>
                  <div className="text-foreground">Total network fee</div>
                  <div className="text-sm text-muted-foreground mt-1">Over all transactions in each block<br/>0.10% treasury + 0.50% miners</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5s</div>
                  <div className="text-foreground">Network blocktime</div>
                  <div className="text-sm text-muted-foreground mt-1">Fast confirmation</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">66%</div>
                  <div className="text-foreground">PoS Consensus</div>
                  <div className="text-sm text-muted-foreground mt-1">Supermajority required</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Final CTA */}
        <Section
          title="Ready to Get Started?"
          subtitle="Join the Revolution"
          description="Start using, developing or validating on Tickfy Network today"
        >
          <div className="text-center space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="gradient" className="text-lg px-8" onClick={handleBecomeMinerClick}>
                <Pickaxe className="mr-2 h-5 w-5" />
                Become a Miner
              </Button>
              <Link to="/developers">
                <Button size="lg" variant="outline" className="text-lg px-8 hover:bg-gray-100 dark:hover:bg-gray-800">
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
