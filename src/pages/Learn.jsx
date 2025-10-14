import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import Section from '../components/sections/Section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { 
  Shield, Zap, Coins, CheckCircle, ArrowRight, Globe, Lock, TrendingUp,
  Users, Target, DollarSign, Award, Building2, Code, Rocket, Package
} from 'lucide-react'

// What is Tickfy - Main Benefits
const mainBenefits = [
  {
    icon: Shield,
    title: 'Fraud Prevention',
    description: 'NFT tickets on blockchain are impossible to counterfeit',
    benefits: ['Unique cryptographic ID', 'Verifiable ownership', 'Zero fraud rate']
  },
  {
    icon: Zap,
    title: 'Instant Transfers',
    description: 'Buy, sell and transfer tickets in seconds',
    benefits: ['No intermediaries', 'Fast transactions', 'Available 24/7']
  },
  {
    icon: DollarSign,
    title: 'Low Fees',
    description: 'Only 0.6% network fee on transactions',
    benefits: ['Transparent pricing', 'No hidden costs', 'Fair value for everyone']
  },
  {
    icon: Lock,
    title: 'Full Control',
    description: 'Producers control resale rules and royalties',
    benefits: ['Minimum price settings', 'Automatic royalties', 'Revenue protection']
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

// Token System - Simplified
const tokens = [
  {
    name: 'TKFYT',
    subtitle: 'Transaction Token',
    icon: Coins,
    color: 'green',
    description: 'Used for buying and selling tickets',
    features: [
      'Backed by USDT (1 USDT ≈ 1M TKFYT)',
      'Stable and predictable value',
      'Easy to buy and sell',
      'Accepted on all platform transactions'
    ]
  },
  {
    name: 'TKFY',
    subtitle: 'Governance Token',
    icon: Award,
    color: 'purple',
    description: 'For network security and governance',
    features: [
      'Fixed supply: 50 million tokens',
      'Stake to become a validator',
      'Earn validation rewards',
      'Vote on platform decisions'
    ]
  }
]

// For Your Business - Target Audiences
const businessBenefits = [
  {
    audience: 'For Event Producers',
    icon: Building2,
    color: 'blue',
    benefits: [
      'Control resale with minimum price rules',
      'Earn automatic royalties on secondary sales (5-10%)',
      'Reduce fraud to zero with NFT technology',
      'Real-time sales tracking and analytics',
      'Custom fee distribution to partners',
      'Lower operational costs (0.6% vs 10-15% traditional)'
    ],
    cta: 'Create Your First Event',
    ctaLink: '/use#events'
  },
  {
    audience: 'For Ticketing Agencies',
    icon: Users,
    color: 'green',
    benefits: [
      'White-label solution ready to use',
      'API integration with existing systems',
      'Expand revenue with resale royalties',
      'Eliminate counterfeit ticket problems',
      'Professional dashboard and tools',
      'Multi-event management platform'
    ],
    cta: 'Explore Platform Features',
    ctaLink: '/use'
  },
  {
    audience: 'For Developers',
    icon: Code,
    color: 'purple',
    benefits: [
      'Complete REST and GraphQL APIs',
      'SDKs for JavaScript, Python, Go',
      'Comprehensive documentation',
      'Blockchain optimized for events',
      'Smart contract templates',
      'Active developer community'
    ],
    cta: 'View Documentation',
    ctaLink: '/developers'
  }
]

// Key Statistics
const keyStats = [
  { label: 'Transaction Fee', value: '0.6%', description: 'Much lower than traditional platforms' },
  { label: 'Fraud Rate', value: '0%', description: 'Impossible to counterfeit NFT tickets' },
  { label: 'Transfer Time', value: '< 10s', description: 'Instant ticket transfers' },
  { label: 'Uptime', value: '99.9%', description: 'Reliable blockchain infrastructure' }
]

export default function Learn() {
  const location = useLocation()

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

  return (
    <>
      <div className="pt-16" id="overview">
        <Hero
          subtitle="Learn"
          title="The Future of Event Ticketing"
          description="Discover how Tickfy Network uses blockchain technology to create secure, transparent, and fraud-proof ticketing for events worldwide."
        />

        {/* Section 1: Overview */}
        <Section
          
          title="What is Tickfy Network?"
          subtitle="Overview"
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
          title="How It Works"
          subtitle="Simple Process"
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

        {/* Section 3: Token System */}
        <Section
          id="tokens"
          title="Token System"
          subtitle="Dual Token Model"
          description="Two tokens working together to power the ecosystem"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {tokens.map((token, index) => (
              <Card key={index} className={`border-2 border-${token.color}-200 hover:shadow-xl transition-shadow`}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-xl bg-${token.color}-100 dark:bg-${token.color}-950/20`}>
                      <token.icon className={`h-8 w-8 text-${token.color}-600`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{token.name}</CardTitle>
                      <CardDescription className="text-base">{token.subtitle}</CardDescription>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{token.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {token.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/buy-tokens">
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Coins className="mr-2 h-5 w-5" />
                Buy Tokens
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Section>

        {/* Section 4: For Your Business */}
        <Section
          id="for-business"
          title="Perfect for Your Business"
          subtitle="Benefits for Everyone"
          description="Discover how Tickfy can transform your event business"
          background="gradient"
        >
          <div className="space-y-8">
            {businessBenefits.map((business, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-shadow bg-background/50 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl bg-${business.color}-100 dark:bg-${business.color}-950/20`}>
                      <business.icon className={`h-8 w-8 text-${business.color}-600`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{business.audience}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {business.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={business.ctaLink}>
                    <Button size="lg" className="w-full md:w-auto">
                      {business.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
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
              <Link to="/use">
                <Button size="lg" variant="gradient" className="text-lg px-8">
                  <Rocket className="mr-2 h-5 w-5" />
                  Start Using
                </Button>
              </Link>
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
