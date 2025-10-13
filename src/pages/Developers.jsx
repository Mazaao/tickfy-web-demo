import Hero from '../components/sections/Hero'
import Section from '../components/sections/Section'
import FeatureGrid from '../components/sections/FeatureGrid'
import { Terminal, FileCode, Blocks, Wrench } from 'lucide-react'

const devResources = [
  {
    icon: FileCode,
    title: 'Ticketing API',
    subtitle: 'Complete integration',
    description: 'Full API documentation for ticket minting, validation, and event management systems.'
  },
  {
    icon: Blocks,
    title: 'NFT Ticket SDK',
    subtitle: 'Ready-to-use kit',
    description: 'Pre-built components and smart contracts for rapid NFT ticketing integration.'
  },
  {
    icon: Terminal,
    title: 'Tickfy CLI',
    subtitle: 'Developer tools',
    description: 'Command-line interface for minting tickets, managing events, and blockchain deployment.'
  },
  {
    icon: Wrench,
    title: 'Testing Suite',
    subtitle: 'Event simulation',
    description: 'Comprehensive testing tools for event scenarios, ticket validation, and smart contract security.'
  }
]

export default function Developers() {
  return (
    <>
      <div className="pt-16">
        <Hero
        subtitle="For Developers"
        title="Build Ticketing Solutions"
        description="Everything developers need to integrate NFT ticketing and build event management applications."
      />

      <Section
        title="Development Resources"
        subtitle="Ship Faster"
        description="Comprehensive development tools and resources to accelerate your project timeline."
      >
        <FeatureGrid features={devResources} columns={2} />
      </Section>
      </div>
    </>
  )
}