import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import ScrambleText from '../components/ui/ScrambleText'
import Section from '../components/sections/Section'
import FeatureGrid from '../components/sections/FeatureGrid'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { MessageCircle, Users, Calendar, Globe, Shield, Star, Zap, Twitter, Send, MessageSquare, ArrowRight } from 'lucide-react'

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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <div className="pt-16">
        <Hero
        subtitle={<ScrambleText text="Join Our Community" />}
        title="Connect with Event Innovators"
        description="Be part of the global Tickfy community revolutionizing event ticketing and experiences."
      >
        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center gap-4">
          <a 
            href="https://twitter.com/tickfy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-14 h-14 rounded-lg bg-transparent flex items-center justify-center transition-all border border-gray-300 dark:border-gray-700 group-hover:border-purple-500 group-hover:bg-purple-50 dark:group-hover:bg-purple-950/20">
              <Twitter className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
            </div>
          </a>
          
          <a 
            href="https://t.me/tickfy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-14 h-14 rounded-lg bg-transparent flex items-center justify-center transition-all border border-gray-300 dark:border-gray-700 group-hover:border-purple-500 group-hover:bg-purple-50 dark:group-hover:bg-purple-950/20">
              <Send className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
            </div>
          </a>
          
          <a 
            href="https://discord.gg/tickfy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-14 h-14 rounded-lg bg-transparent flex items-center justify-center transition-all border border-gray-300 dark:border-gray-700 group-hover:border-purple-500 group-hover:bg-purple-50 dark:group-hover:bg-purple-950/20">
              <MessageSquare className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
            </div>
          </a>
          
          <a 
            href="https://github.com/tickfy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-14 h-14 rounded-lg bg-transparent flex items-center justify-center transition-all border border-gray-300 dark:border-gray-700 group-hover:border-purple-500 group-hover:bg-purple-50 dark:group-hover:bg-purple-950/20">
              <Globe className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
            </div>
          </a>
        </div>
      </Hero>

      {/* Administrators Section */}
      <Section
        title="Community Administrators"
        subtitle={<ScrambleText text="Meet Our Leaders" />}
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

      {/* Forum Call to Action */}
      <Section
        title="Join the Discussion"
        subtitle={<ScrambleText text="Community Forum" />}
        description="Share ideas, ask questions, and connect with other members"
        background="muted"
      >
        <div className="text-center">
          <Link to="/forum">
            <Button size="lg" variant="gradient" className="text-lg px-8">
              <MessageCircle className="mr-2 h-5 w-5" />
              Visit Forum
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>
      </div>
    </>
  )
}