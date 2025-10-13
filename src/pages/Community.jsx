import Hero from '../components/sections/Hero'
import Section from '../components/sections/Section'
import FeatureGrid from '../components/sections/FeatureGrid'
import { MessageCircle, Users, Calendar, Globe } from 'lucide-react'

const communityChannels = [
  {
    icon: MessageCircle,
    title: 'Discord Community',
    subtitle: 'Event organizers hub',
    description: 'Connect with event organizers, developers, and NFT enthusiasts in our active Discord.'
  },
  {
    icon: Globe,
    title: 'Event Showcase',
    subtitle: 'Featured events',
    description: 'Discover and showcase amazing events powered by Tickfy NFT technology.'
  },
  {
    icon: Calendar,
    title: 'Tickfy Events',
    subtitle: 'Community gatherings',
    description: 'Join official Tickfy events, conferences, and workshops about NFT ticketing.'
  },
  {
    icon: Users,
    title: 'Partner Program',
    subtitle: 'Event partnerships',
    description: 'Become a Tickfy partner and integrate our NFT ticketing into your events.'
  }
]

export default function Community() {
  return (
    <>
      <div className="pt-16">
        <Hero
        subtitle="Join Our Community"
        title="Connect with Event Innovators"
        description="Be part of the global Tickfy community revolutionizing event ticketing and experiences."
      />

      <Section
        title="Community Channels"
        subtitle="Stay Connected"
        description="Join our vibrant community across multiple platforms and channels."
      >
        <FeatureGrid features={communityChannels} columns={2} />
      </Section>
      </div>
    </>
  )
}