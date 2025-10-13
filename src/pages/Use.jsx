import Hero from '../components/sections/Hero'
import Section from '../components/sections/Section'
import FeatureGrid from '../components/sections/FeatureGrid'
import { Wallet, ShoppingCart, CreditCard, ArrowLeftRight } from 'lucide-react'

const useOptions = [
  {
    icon: ShoppingCart,
    title: 'Buy Tickets',
    subtitle: 'Secure purchases',
    description: 'Purchase NFT tickets for events with cryptocurrency or traditional payment methods.'
  },
  {
    icon: Wallet,
    title: 'Manage Tickets',
    subtitle: 'Digital wallet',
    description: 'Store your NFT tickets securely in your digital wallet with proof of ownership.'
  },
  {
    icon: ArrowLeftRight,
    title: 'Transfer Tickets',
    subtitle: 'Easy resale',
    description: 'Transfer or resell your tickets safely through our marketplace with built-in royalties.'
  },
  {
    icon: CreditCard,
    title: 'Create Events',
    subtitle: 'Event organizer',
    description: 'Create and manage your events, mint tickets, and track sales through our platform.'
  }
]

export default function Use() {
  return (
    <>
      <div className="pt-16">
        <Hero
        subtitle="Use Tickfy"
        title="Start Your Event Journey"
        description="Discover all the ways you can use Tickfy for creating, selling, and managing NFT event tickets."
      />

      <Section
        title="How to Use Tickfy"
        subtitle="Multiple Options"
        description="Whether you're buying, trading, or earning, we've got you covered."
      >
        <FeatureGrid features={useOptions} columns={2} />
      </Section>
      </div>
    </>
  )
}