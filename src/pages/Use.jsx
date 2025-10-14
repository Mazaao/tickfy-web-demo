import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import Section from '../components/sections/Section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { 
  Ticket, ShoppingCart, Globe, Smartphone, CheckCircle, ArrowRight, 
  Zap, Shield, Clock, Users, QrCode, CreditCard, Wallet, 
  TrendingUp, BarChart3, Calendar, Bell, Settings, Search, Filter,
  RefreshCw, User, DollarSign, MapPin, Key, AlertTriangle, Download
} from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Maximum Security',
    description: 'Blockchain-based tickets impossible to counterfeit',
    features: ['Unique NFTs', 'Transparent audit', 'Cryptographic proof']
  },
  {
    icon: Clock,
    title: 'Instant Access',
    description: 'Buy and transfer tickets immediately',
    features: ['No intermediaries', 'Transfer in seconds', 'Available 24/7']
  },
  {
    icon: Zap,
    title: 'Low Fees',
    description: 'Only 0.6% transaction fee',
    features: ['No hidden fees', 'Real savings', 'Fair value']
  },
  {
    icon: Users,
    title: 'Active Marketplace',
    description: 'Secure resale between users',
    features: ['Fair prices', 'Complete protection', 'Guaranteed liquidity']
  }
]

const buyerFlow = [
  {
    step: '1',
    title: 'Set Up Your Wallet',
    description: 'Install Keplr or compatible wallet and add TKFYT tokens',
    icon: Wallet,
    time: '5 min'
  },
  {
    step: '2', 
    title: 'Browse Events',
    description: 'Explore available events, view details, prices and availability',
    icon: Calendar,
    time: '2 min'
  },
  {
    step: '3',
    title: 'Buy Your Ticket',
    description: 'Select quantity, confirm payment and receive the NFT in your wallet',
    icon: CreditCard,
    time: '1 min'
  },
  {
    step: '4',
    title: 'Use at Event',
    description: 'Present QR Code or prove NFT ownership to enter',
    icon: QrCode,
    time: 'Instant'
  }
]

const organizerFlow = [
  {
    step: '1',
    title: 'Set Up Profile',
    description: 'Create organizer account and configure basic information',
    icon: Settings,
    features: ['KYC verification', 'Banking details', 'Public profile']
  },
  {
    step: '2',
    title: 'Create Your Event',
    description: 'Add details, location, dates and settings',
    icon: Calendar,
    features: ['Complete description', 'Multiple dates', 'Categorization']
  },
  {
    step: '3',
    title: 'Configure Tickets',
    description: 'Define types, prices, quantities and sale rules',
    icon: Ticket,
    features: ['Multiple types', 'Dynamic pricing', 'Special rules']
  },
  {
    step: '4',
    title: 'Manage Sales',
    description: 'Track sales, check-in and receive payments',
    icon: BarChart3,
    features: ['Live dashboard', 'Mobile check-in', 'Automatic payments']
  }
]

const marketplaceFeatures = [
  {
    title: 'Secure Purchase',
    description: 'Smart contracts guarantee secure transactions',
    features: ['Automatic escrow', 'Authenticity verification', 'Guaranteed refund'],
    icon: Shield
  },
  {
    title: 'Dynamic Pricing',
    description: 'Intelligent algorithm for fair pricing',
    features: ['Real-time demand', 'Price history', 'Automatic suggestions'],
    icon: TrendingUp
  },
  {
    title: 'Guaranteed Liquidity',
    description: 'Always active buyers and sellers',
    features: ['Market makers', 'Liquidity pool', 'Instant execution'],
    icon: Zap
  }
]

const userTypes = [
  {
    title: 'For Buyers',
    description: 'Buy tickets safely and save money',
    cta: 'Start Buying',
    ctaLink: '/learn/getting-started',
    features: [
      'Unique and verifiable NFT tickets',
      'Transparent prices with no hidden fees',
      'Instant and secure transfers',
      'Marketplace for resale',
      'Complete mobile support'
    ]
  },
  {
    title: 'For Producers & Ticketing Agencies',
    description: 'Ideal platform for industry professionals',
    cta: 'Create First Event',
    ctaLink: '/learn/getting-started',
    features: [
      'Customizable resale fees',
      'Full control over resale',
      'Automatic royalties on secondary sales',
      'Complete professional dashboard',
      'API for integration with existing systems',
      'Blockchain optimized for events'
    ]
  }
]

// Wallets Section
const walletTypes = [
  {
    type: 'Keplr Wallet',
    icon: Shield,
    security: 'Maximum',
    description: 'Most popular wallet in the Cosmos ecosystem',
    features: ['Easy to use', 'Full support', 'Very secure', 'Browser extension'],
    recommended: true
  },
  {
    type: 'Leap Wallet',
    icon: Smartphone,
    security: 'High',
    description: 'Modern wallet with intuitive interface',
    features: ['Modern design', 'Mobile first', 'Advanced features', 'Multi-chain'],
    recommended: false
  },
  {
    type: 'Cosmostation',
    icon: Globe,
    security: 'High',
    description: 'Mobile wallet with many features',
    features: ['Complete', 'Stable', 'Many chains', 'Integrated staking'],
    recommended: false
  }
]

const walletFeatures = [
  'TKFY and TKFYT storage',
  'NFT ticket management',
  'Marketplace connection',
  'Transaction history',
  'dApps integration',
  'Staking support'
]

// NFT Tickets Section
const ticketFeatures = [
  {
    icon: Ticket,
    title: 'Unique NFT',
    description: 'Each ticket is a unique NFT on the blockchain with exclusive ID and immutable data.'
  },
  {
    icon: Shield,
    title: 'Counterfeit-Proof',
    description: 'Impossible to counterfeit or duplicate thanks to blockchain cryptographic security.'
  },
  {
    icon: RefreshCw,
    title: 'Transferable',
    description: 'Can be traded on the secondary marketplace with automatic price rules.'
  },
  {
    icon: User,
    title: 'Verifiable Ownership',
    description: 'Transparent and verifiable ownership through wallet address.'
  }
]

// Events Section
const eventSteps = [
  {
    step: '1',
    title: 'Event Creation',
    description: 'Configure the basic details of your event',
    icon: Calendar,
    details: ['Name and description', 'Date and time', 'Location', 'Event image']
  },
  {
    step: '2', 
    title: 'Ticket Configuration',
    description: 'Define ticket types and prices',
    icon: Settings,
    details: ['Maximum quantity', 'Price in TKFYT', 'Ticket types', 'Resale rules']
  },
  {
    step: '3',
    title: 'Ticket Minting',
    description: 'Create the ticket NFTs on the blockchain',
    icon: CheckCircle,
    details: ['Pay mint fee (1,000 TKFYT/ticket)', 'Network validation', 'NFTs created', 'Available for sale']
  }
]

// Marketplace Section
const tradingRules = [
  {
    title: 'Minimum Price',
    description: 'Based on event configuration',
    rule: 'If minTradeForceBatchPrice = true, price ≥ batchPrice',
    icon: DollarSign,
    color: 'green'
  },
  {
    title: 'Transaction Fees',
    description: 'Applied automatically',
    rule: '0.60% of total block volume (0.10% network + 0.50% validation)',
    icon: TrendingUp,
    color: 'blue'
  },
  {
    title: 'Custom Fees',
    description: 'Defined in the ticket',
    rule: 'Maximum 50% of transaction value, distributed as configured',
    icon: Shield,
    color: 'purple'
  }
]

const buyingSteps = [
  {
    step: '1',
    title: 'Connect Wallet',
    description: 'Connect your Cosmos SDK compatible wallet',
    icon: Shield,
    time: '1 min'
  },
  {
    step: '2',
    title: 'Search Tickets',
    description: 'Use filters to find the desired ticket',
    icon: Search,
    time: '2 min'
  },
  {
    step: '3',
    title: 'Verify Details',
    description: 'Check price, fees, and event details',
    icon: Filter,
    time: '1 min'
  },
  {
    step: '4',
    title: 'Confirm Purchase',
    description: 'Sign the transaction in your wallet',
    icon: ShoppingCart,
    time: 'Instant'
  }
]

export default function Use() {
  const location = useLocation()

  useEffect(() => {
    // Scroll to section based on hash, or top if no hash
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return (
    <>
      <div className="pt-16" id="overview">
        <Hero
          subtitle="Use the Platform"
          title="NFT Tickets in Practice"
          description="Complete guide to buy, sell and organize events using blockchain technology in a simple and secure way."
        />

        <Section
          title="Why Use Tickfy"
          subtitle="Real Advantages"
          description="Compare with traditional platforms and see the difference in practice"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow text-center group">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-3">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Wallets Section */}
        <Section
          id="wallets"
          title="Set Up Your Wallet"
          subtitle="Recommended Wallets"
          description="Choose the ideal wallet to store your TKFY tokens and NFT tickets"
          background="muted"
        >
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {walletTypes.map((wallet, index) => (
                <Card key={index} className={`border-2 ${wallet.recommended ? 'border-green-200 bg-green-50/50 dark:bg-green-950/10' : ''} hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <wallet.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg flex items-center gap-2">
                            {wallet.type}
                            {wallet.recommended && (
                              <Badge variant="default" className="bg-green-600">
                                Recommended
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {wallet.description}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {wallet.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="h-6 w-6" />
                  Required Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {walletFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* NFT Tickets Section */}
        <Section
          id="tickets"
          title="How NFT Tickets Work"
          subtitle="Blockchain Technology"
          description="Understand the unique features of NFT-based tickets"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ticketFeatures.map((feature, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">How to Buy Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {buyerFlow.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="border-2 hover:shadow-lg transition-shadow text-center h-full group">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-2xl mb-4 group-hover:scale-110 transition-transform">
                        {step.step}
                      </div>
                      <div className="mx-auto w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                        <step.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="outline" className="text-xs">
                        {step.time}
                      </Badge>
                    </CardContent>
                  </Card>
                  {index < buyerFlow.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Events Section */}
        <Section
          id="events"
          title="Create and Manage Events"
          subtitle="For Producers and Organizers"
          description="Complete process from creation to issuing NFT tickets"
          background="muted"
        >
          <div className="space-y-8">
            {eventSteps.map((step, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <step.icon className="h-6 w-6" />
                        {step.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-1">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="ml-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/learn#getting-started">
              <Button size="lg" variant="outline">
                Complete Guide for Organizers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Section>

        {/* Marketplace Section */}
        <Section
          id="marketplace"
          title="Ticket Marketplace"
          subtitle="Secure Buy and Sell"
          description="How the decentralized marketplace for ticket resale works"
          background="gradient"
        >
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {buyingSteps.map((step, index) => (
                <Card key={index} className="bg-background/50 backdrop-blur border-2 hover:shadow-lg transition-shadow text-center group">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-2xl mb-4 group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                    <div className="mx-auto w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="text-xs">
                      {step.time}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Trading Rules</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tradingRules.map((rule, index) => (
                  <Card key={index} className={`border-2 border-${rule.color}-200 hover:shadow-lg transition-shadow`}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg bg-${rule.color}-100 dark:bg-${rule.color}-950/20`}>
                          <rule.icon className={`h-6 w-6 text-${rule.color}-600`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{rule.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {rule.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        {rule.rule}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          title="Choose Your Profile"
          subtitle="Different Paths"
          description="Specific features for each type of user"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {userTypes.map((type, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{type.title}</CardTitle>
                  <CardDescription className="text-base text-center">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={type.ctaLink}>
                    <Button className="w-full mt-4">
                      {type.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="Ready to Get Started?"
          subtitle="Quick Setup"
          description="Set everything up in a few minutes and start using"
          background="muted"
        >
          <div className="text-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/learn#getting-started">
                <Button size="lg" className="text-lg px-8">
                  Complete Tutorial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Available Events
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline">Setup in 5 minutes</Badge>
              <Badge variant="outline">No hidden fees</Badge>
              <Badge variant="outline">Full support</Badge>
              <Badge variant="outline">Mobile friendly</Badge>
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}