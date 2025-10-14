import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import Section from '../components/sections/Section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Code, FileCode, DollarSign, Terminal, ArrowRight } from 'lucide-react'

const buildResources = [
  {
    icon: Code,
    title: 'APIs & SDKs',
    description: 'Complete development tools with REST APIs and SDKs in multiple languages to integrate with Tickfy Network.',
    href: '/build/apis',
    color: 'blue'
  },
  {
    icon: FileCode,
    title: 'Smart Contracts',
    description: 'Explore the network\'s smart contracts, their functions, data structures and how to interact with them.',
    href: '/build/contracts',
    color: 'green'
  },
  {
    icon: DollarSign,
    title: 'Treasury',
    description: 'Understand the automatic backing system that maintains TKFY parity with USDT transparently.',
    href: '/build/treasury',
    color: 'purple'
  }
]

export default function Build() {
  return (
    <>
      <div className="pt-16">
        <Hero
          subtitle="Build"
          title="Develop on Tickfy Network"
          description="Complete technical resources for developers to create applications on our specialized blockchain."
        />

        <Section
          title="Developer Resources"
          subtitle="Everything You Need"
          description="Tools, documentation and guides to build amazing applications on Tickfy Network."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {buildResources.map((resource, index) => (
              <Card key={index} className={`border-l-4 border-l-${resource.color}-500 hover:shadow-lg transition-shadow group`}>
                <CardHeader>
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className={`p-4 rounded-lg bg-${resource.color}-100 dark:bg-${resource.color}-950/20`}>
                      <resource.icon className={`h-12 w-12 text-${resource.color}-600`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{resource.title}</CardTitle>
                      <CardDescription className="text-base mt-3">
                        {resource.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link to={resource.href}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="Developer Journey"
          subtitle="From Basic to Advanced"
          description="Recommended path to become an expert in Tickfy Network development"
          background="muted"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {[
              { number: '1', title: 'APIs', subtitle: 'Integrate your app' },
              { number: '2', title: 'Contracts', subtitle: 'Understand the logic' },
              { number: '3', title: 'Treasury', subtitle: 'Monetary system' },
              { number: '4', title: 'Deploy', subtitle: 'Publish your dApp' }
            ].map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-2">
                    {step.number}
                  </div>
                  <div className="font-semibold">{step.title}</div>
                  <div className="text-sm text-muted-foreground">{step.subtitle}</div>
                </div>
                {index < 3 && (
                  <ArrowRight className="mx-4 h-6 w-6 text-muted-foreground hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Technical Use Cases"
          subtitle="What You Can Build"
          description="Examples of applications that can be developed on Tickfy Network"
          background="gradient"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-background/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">Event Management dApps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Decentralized applications for creation and complete management of events with ticket control.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">Custom Marketplaces</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Specialized trading platforms for specific event niches or regions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">Analytics Dashboards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Analysis panels for organizers to track sales metrics and performance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">Mobile Wallets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Mobile wallets specialized in NFT tickets with QR scanning features.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">API Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Integrations with existing ticketing and event management systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">DeFi Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Financial tools for staking, yield farming and governance with TKFY-STK tokens.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section
          title="Start Now"
          subtitle="Additional Resources"
          description="Useful links to begin your development"
          background="muted"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  Testnet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Access our test network to experiment at no cost
                </CardDescription>
                <Button variant="outline" className="w-full">
                  Connect Testnet →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  GitHub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Source code, examples and templates for development
                </CardDescription>
                <Button variant="outline" className="w-full">
                  View Repositories →
                </Button>
              </CardContent>
            </Card>
          </div>
        </Section>
      </div>
    </>
  )
}