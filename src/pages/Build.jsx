import Hero from '../components/sections/Hero'
import Section from '../components/sections/Section'
import FeatureGrid from '../components/sections/FeatureGrid'
import { Code, Hammer, Box, Cpu } from 'lucide-react'

const buildResources = [
  {
    icon: Code,
    title: 'Ticketing APIs',
    subtitle: 'Integration ready',
    description: 'Comprehensive APIs for ticket creation, validation, and management in your applications.'
  },
  {
    icon: Box,
    title: 'NFT Contracts',
    subtitle: 'Smart ticketing',
    description: 'Pre-built smart contracts for NFT ticket minting, transfers, and royalty management.'
  },
  {
    icon: Hammer,
    title: 'Event Tools',
    subtitle: 'Complete toolkit',
    description: 'Development tools for event creation, ticket scanning, and attendance verification.'
  },
  {
    icon: Cpu,
    title: 'Scalable Platform',
    subtitle: 'Global events',
    description: 'Infrastructure designed to handle massive events with millions of simultaneous transactions.'
  }
]

export default function Build() {
  return (
    <>
      <div className="pt-16">
        <Hero
        subtitle="Build on Tickfy"
        title="Build the Future of Events"
        description="Create innovative ticketing solutions and event management tools on our blockchain platform."
      />

      <Section
        title="Developer Resources"
        subtitle="Everything You Need"
        description="Comprehensive tools and resources to help you build amazing applications."
      >
        <FeatureGrid features={buildResources} columns={2} />
      </Section>
      </div>
    </>
  )
}