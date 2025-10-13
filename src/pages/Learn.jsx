import Hero from '../components/sections/Hero'
import Section from '../components/sections/Section'
import FeatureGrid from '../components/sections/FeatureGrid'
import { BookOpen, GraduationCap, FileText, Video } from 'lucide-react'

const learningResources = [
  {
    icon: BookOpen,
    title: 'What is Tickfy?',
    subtitle: 'NFT Ticketing Platform',
    description: 'Learn the basics of Tickfy and how blockchain technology revolutionizes event ticketing with NFTs.'
  },
  {
    icon: GraduationCap,
    title: 'Getting Started',
    subtitle: 'Create your first event',
    description: 'Complete walkthrough from setting up your account to minting your first NFT tickets.'
  },
  {
    icon: FileText,
    title: 'NFT Standards',
    subtitle: 'Technical specifications',
    description: 'Understand the NFT standards and smart contract architecture that powers Tickfy tickets.'
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    subtitle: 'Visual learning',
    description: 'Watch comprehensive tutorials on creating events, minting tickets, and managing sales.'
  }
]

export default function Learn() {
  return (
    <>
      <div className="pt-16">
        <Hero
        subtitle="Learn"
        title="Master NFT Ticketing"
        description="Everything you need to know about Tickfy, NFT tickets, and blockchain-powered event management."
      />

      <Section
        title="Learning Resources"
        subtitle="Start Your Journey"
        description="Comprehensive guides and tutorials to help you understand and use Tickfy effectively."
      >
        <FeatureGrid features={learningResources} columns={2} />
      </Section>
      </div>
    </>
  )
}