import Hero from '../components/sections/Hero'
import Section from '../components/sections/Section'
import FeatureGrid from '../components/sections/FeatureGrid'
import StatsGrid from '../components/sections/StatsGrid'
import { Button } from '../components/ui/button'
import { Coins, Shield, Zap, Users, TrendingUp, Globe, Lock, Rocket } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Fraud Prevention',
    subtitle: 'Blockchain security',
    description: 'Eliminate counterfeit tickets forever with blockchain-verified NFT tickets that cannot be duplicated or forged.'
  },
  {
    icon: Zap,
    title: 'Instant Transfer',
    subtitle: 'Lightning-fast sales',
    description: 'Transfer tickets instantly between wallets with our advanced blockchain technology and smart contracts.'
  },
  {
    icon: Users,
    title: 'Event Management',
    subtitle: 'Complete platform',
    description: 'Full-featured platform for event organizers to create, manage, and distribute NFT tickets seamlessly.'
  },
  {
    icon: Globe,
    title: 'Global Events',
    subtitle: 'Worldwide access',
    description: 'Support events globally with cross-border payments and universal NFT ticket standards.'
  },
  {
    icon: Coins,
    title: 'Smart Royalties',
    subtitle: 'Revenue sharing',
    description: 'Automated royalty distribution to artists, venues, and stakeholders through smart contracts.'
  },
  {
    icon: Lock,
    title: 'Ownership Proof',
    subtitle: 'Digital certificates',
    description: 'Each ticket is a unique NFT providing permanent proof of attendance and ownership history.'
  }
]

const stats = [
  { value: '10M+', label: 'Tickets Minted', description: 'NFT tickets created' },
  { value: '50K+', label: 'Events Hosted', description: 'Successful events' },
  { value: '167', label: 'Active Validators', description: 'Securing the network' },
  { value: '99.9%', label: 'Fraud Prevention', description: 'Secure transactions' }
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-16">
        <Hero
        subtitle="The Future of Ticketing"
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
          <StatsGrid stats={stats} />
        </div>
      </Hero>

      {/* Features Section */}
      <Section
        title="Why Choose Tickfy?"
        subtitle="Next-Gen Ticketing"
        description="Discover the revolutionary features that make Tickfy the future of event ticketing worldwide."
        background="muted"
      >
        <FeatureGrid features={features} columns={3} />
      </Section>

      {/* Start Here Section */}
      <Section
        title="Start Your Journey"
        subtitle="Begin Here"
        description="Discover how Tickfy Network is revolutionizing the events world with blockchain technology."
        background="gradient"
        className="text-center"
      >
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              Understand how the project works, the technology behind NFT tickets, 
              and how you can be part of this revolution.
            </p>
          </div>
          <div className="flex justify-center">
            <Button 
              variant="gradient" 
              size="lg" 
              onClick={() => window.location.href = '/learn#the-project'}
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start from Here
            </Button>
          </div>
        </div>
      </Section>
      </div>
    </>
  )
}