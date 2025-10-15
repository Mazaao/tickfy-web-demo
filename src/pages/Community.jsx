import Hero from '../components/sections/Hero'
import Section from '../components/sections/Section'
import FeatureGrid from '../components/sections/FeatureGrid'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { MessageCircle, Users, Calendar, Globe, Shield, Star, Zap } from 'lucide-react'

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

const administrators = [
  {
    name: 'Dumbledore',
    title: 'Chief Wisdom Officer',
    avatar: '/community/dumbledore.png',
    description: 'Master of blockchain magic and protocol governance. Guides the community with ancient wisdom and modern technology.',
    icon: Star,
    speciality: 'Protocol Governance'
  },
  {
    name: 'Y0d4',
    title: 'Senior Technical Sage',
    avatar: '/community/yoda.png',
    description: 'Strong with the force of decentralization, he is. Teaches the ways of blockchain to young padawans.',
    icon: Zap,
    speciality: 'Technical Leadership'
  },
  {
    name: 'サトシのいとこ',
    subtitle: 'Satoshi no itoko',
    title: 'Guardian of the Network',
    avatar: '/community/satoshi.png',
    description: 'You shall not pass... without proper validation! Protects the network from dark forces and ensures security.',
    icon: Shield,
    speciality: 'Network Security'
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

      {/* Administrators Section */}
      <Section
        title="Community Administrators"
        subtitle="Meet Our Leaders"
        description="The wise guardians who guide our community and ensure the network's prosperity."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {administrators.map((admin, index) => (
            <Card key={index} className="border-2 hover:shadow-xl transition-shadow text-center group">
              <CardHeader className="pb-4">
                <div className="relative mb-6">
                  <img 
                    src={admin.avatar} 
                    alt={admin.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary/20 group-hover:border-primary/40 transition-all"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground p-2 rounded-full">
                      <admin.icon className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl mb-1">{admin.name}</CardTitle>
                {admin.subtitle && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{admin.subtitle}</div>
                )}
                <div className="text-sm font-medium text-primary mb-2">{admin.title}</div>
                <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full inline-block">
                  {admin.speciality}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{admin.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Community Channels"
        subtitle="Stay Connected"
        description="Join our vibrant community across multiple platforms and channels."
        background="muted"
      >
        <FeatureGrid features={communityChannels} columns={2} />
      </Section>
      </div>
    </>
  )
}