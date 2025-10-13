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
  { value: '99.9%', label: 'Fraud Prevention', description: 'Secure transactions' },
  { value: '1M+', label: 'Happy Attendees', description: 'Satisfied customers' }
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

      {/* Technology Section */}
      <Section
        title="Revolutionary NFT Ticketing"
        subtitle="Blockchain Innovation"
        description="Built on advanced blockchain technology specifically designed for secure, transparent event ticketing."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">NFT Ticket Minting</h3>
              </div>
              <p className="text-muted-foreground">
                Each ticket is minted as a unique NFT with immutable ownership records and anti-counterfeiting protection.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent/30 rounded-lg flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Smart Contract Automation</h3>
              </div>
              <p className="text-muted-foreground">
                Automated ticket sales, transfers, and royalty distributions through secure, audited smart contracts.
              </p>
            </div>

            <Button variant="gradient" className="mt-8">
              Mint Your First Ticket
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-primary/10 rounded-2xl flex items-center justify-center border border-accent/20">
              <div className="text-center">
                <div className="text-6xl font-bold gradient-text mb-4">0%</div>
                <div className="text-lg text-muted-foreground">Fraud Rate</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        title="Ready to Transform Your Events?"
        subtitle="Start Today"
        description="Join thousands of event organizers already revolutionizing ticketing with Tickfy NFTs."
        background="gradient"
        className="text-center"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <Button variant="gradient" size="lg" className="w-full sm:w-auto">
            Create Event
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Buy Tickets
          </Button>
        </div>
      </Section>
      </div>
    </>
  )
}