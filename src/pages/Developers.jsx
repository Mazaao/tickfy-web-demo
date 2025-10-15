import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Hero from '../components/sections/Hero'
import Section from '../components/sections/Section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { 
  Code, Blocks, ArrowRight, Globe, Database, Key, Terminal, Download, 
  BookOpen, GitBranch, CheckCircle, Zap, Shield, Layers, Network,
  ChevronDown, ChevronRight, Copy, FileCode, Cpu, MessageCircle
} from 'lucide-react'

// Section: APIs & Integration
const sdkFeatures = [
  {
    title: 'Tickfy SDK for JavaScript',
    description: 'Complete SDK for web and Node.js applications',
    icon: Code,
    features: ['Wallet integration', 'Event management', 'Marketplace', 'Webhooks'],
    installCommand: 'npm install @tickfy/sdk'
  },
  {
    title: 'REST API',
    description: 'RESTful API for any programming language',
    icon: Globe,
    features: ['Standardized endpoints', 'JWT authentication', 'Rate limiting', 'OpenAPI documentation'],
    installCommand: 'curl -X GET https://api.tickfy.network/v1/events'
  },
  {
    title: 'GraphQL API',
    description: 'GraphQL API for optimized queries',
    icon: Database,
    features: ['Flexible queries', 'Real-time subscriptions', 'Schema introspection', 'Playground'],
    installCommand: 'query { events { id name tickets { price } } }'
  },
  {
    title: 'Webhooks',
    description: 'Real-time notifications for events',
    icon: Zap,
    features: ['Event triggers', 'Automatic retry', 'HMAC signature', 'Detailed logs'],
    installCommand: 'POST /api/v1/webhooks'
  }
]

// Section: Blockchain & Contracts
const consensusFeatures = [
  {
    title: 'Proof of Stake (PoS)',
    description: 'Efficient consensus with delegated validators',
    icon: Shield,
    specs: ['67% supermajority', 'Automatic slashing', 'Proportional rewards', 'On-chain governance']
  },
  {
    title: 'Fast Finality',
    description: 'Blocks finalized in seconds',
    icon: Zap,
    specs: ['3-5 seconds per block', 'Instant finality', 'Low latency', 'High throughput']
  },
  {
    title: 'Cosmos SDK',
    description: 'Built on battle-tested framework',
    icon: Layers,
    specs: ['Tendermint Core', 'IBC compatibility', 'Modular architecture', 'Active ecosystem']
  },
  {
    title: 'Decentralized Governance',
    description: 'Community controls upgrades and parameters',
    icon: Network,
    specs: ['On-chain proposals', 'Voting with TKFY', 'Automatic execution', 'Community treasury']
  }
]

// Expandable code examples
const codeExamples = [
  {
    id: 'event-json-schema',
    title: 'Event JSON Schema',
    description: 'Complete JSON structure for Event objects',
    language: 'json',
    code: `{
  "id": "event_12345abc",
  "name": "Music Festival 2024",
  "description": "The biggest electronic music festival of the year with international DJs",
  "organizer": "tkfy1organizer2x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m8n9o",
  "venue": {
    "name": "Central Arena",
    "address": "123 Music Street, São Paulo, SP",
    "coordinates": {
      "latitude": -23.5505,
      "longitude": -46.6333
    },
    "capacity": 50000
  },
  "dateTime": {
    "start": "2024-12-31T20:00:00Z",
    "end": "2025-01-01T06:00:00Z",
    "timezone": "America/Sao_Paulo"
  },
  "image": "https://cdn.tickfy.network/events/festival2024.jpg",
  "category": "Music",
  "tags": ["electronic", "festival", "new-year"],
  
  "ticketing": {
    "maxTickets": 50000,
    "batchPrice": 250,
    "currency": "TKFYT",
    "ticketTypes": [
      {
        "id": "general",
        "name": "General Admission",
        "price": 200,
        "quantity": 40000,
        "benefits": ["Event access", "Digital certificate"]
      },
      {
        "id": "vip", 
        "name": "VIP Experience",
        "price": 500,
        "quantity": 5000,
        "benefits": ["Premium area", "Open bar", "Meet & Greet"]
      },
      {
        "id": "backstage",
        "name": "Backstage Pass",
        "price": 1000,
        "quantity": 500,
        "benefits": ["Backstage access", "Artist photos", "Exclusive merchandise"]
      }
    ],
    "mintFee": 1000,
    "totalMinted": 0,
    "totalSold": 0
  },
  
  "trading": {
    "minTradeForceBatchPrice": true,
    "transferable": true,
    "resaleRoyalty": 5,
    "customFees": [
      {
        "recipient": "tkfy1organizer2x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m8n9o",
        "percentage": 3,
        "description": "Organizer fee"
      },
      {
        "recipient": "tkfy1venue9x8y7z6a5b4c3d2e1f0g9h8i7j6k5l4m3n2o1p",
        "percentage": 2,
        "description": "Venue fee"
      }
    ]
  },
  
  "access": {
    "requireWhitelist": false,
    "authorizedScanners": [
      "tkfy1scanner1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s",
      "tkfy1scanner2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t"
    ],
    "checkInEnabled": true
  },
  
  "blockchain": {
    "contractAddress": "tkfy1contract5x4y3z2a1b0c9d8e7f6g5h4i3j2k1l0m9n8o",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z",
    "status": "active",
    "network": "tickfy-mainnet"
  }
}`
  },
  {
    id: 'ticket-json-schema',
    title: 'Ticket NFT JSON Schema', 
    description: 'Complete JSON structure for Ticket NFT objects',
    language: 'json',
    code: `{
  "tokenId": "ticket_67890def",
  "eventId": "event_12345abc",
  "name": "Music Festival 2024 - VIP Experience #1234",
  "description": "VIP ticket for Music Festival 2024 with premium benefits",
  "image": "https://cdn.tickfy.network/tickets/festival2024-vip-1234.png",
  
  "attributes": [
    {
      "trait_type": "Event Name",
      "value": "Music Festival 2024"
    },
    {
      "trait_type": "Ticket Type", 
      "value": "VIP Experience"
    },
    {
      "trait_type": "Serial Number",
      "value": 1234
    },
    {
      "trait_type": "Date",
      "value": "2024-12-31"
    },
    {
      "trait_type": "Venue",
      "value": "Central Arena"
    },
    {
      "trait_type": "Original Price",
      "value": "500 TKFYT"
    },
    {
      "trait_type": "Rarity",
      "value": "Rare"
    }
  ],
  
  "ownership": {
    "currentOwner": "tkfy1owner9a8b7c6d5e4f3g2h1i0j9k8l7m6n5o4p3q2r1s0",
    "originalOwner": "tkfy1buyer1z2y3x4w5v6u7t8s9r0q1p2o3n4m5l6k7j8i9h0",
    "mintedTo": "tkfy1buyer1z2y3x4w5v6u7t8s9r0q1p2o3n4m5l6k7j8i9h0",
    "transferHistory": [
      {
        "from": "tkfy1buyer1z2y3x4w5v6u7t8s9r0q1p2o3n4m5l6k7j8i9h0",
        "to": "tkfy1owner9a8b7c6d5e4f3g2h1i0j9k8l7m6n5o4p3q2r1s0",
        "timestamp": "2024-11-15T14:22:00Z",
        "price": 750,
        "transactionHash": "0xabc123def456..."
      }
    ]
  },
  
  "ticketing": {
    "ticketType": "vip",
    "originalPrice": 500,
    "currentPrice": 750,
    "benefits": [
      "Premium area access",
      "Open bar included", 
      "Meet & Greet with artists",
      "VIP parking",
      "Exclusive merchandise"
    ],
    "seat": {
      "section": "VIP-A",
      "row": "03",
      "number": "15"
    }
  },
  
  "validation": {
    "qrCode": "https://api.tickfy.network/qr/ticket_67890def",
    "verificationHash": "0x9f2e8d7c6b5a4958372615049382716253947162894073",
    "isValid": true,
    "transferable": true,
    "status": "active"
  },
  
  "usage": {
    "used": false,
    "usedAt": null,
    "usedBy": null,
    "checkInLocation": null,
    "scanner": null
  },
  
  "blockchain": {
    "contractAddress": "tkfy1nft8x7y6z5a4b3c2d1e0f9g8h7i6j5k4l3m2n1o0p",
    "mintedAt": "2024-01-15T11:45:00Z",
    "mintTransaction": "0xdef789abc456...",
    "mintedBy": "tkfy1organizer2x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m8n9o",
    "network": "tickfy-mainnet",
    "standard": "CW-721",
    "royalty": {
      "percentage": 5,
      "recipient": "tkfy1organizer2x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m8n9o"
    }
  },
  
  "metadata": {
    "external_url": "https://app.tickfy.network/ticket/ticket_67890def",
    "animation_url": "https://cdn.tickfy.network/animations/ticket_67890def.mp4",
    "background_color": "6B46C1",
    "created_date": "2024-01-15T11:45:00Z",
    "updated_date": "2024-11-15T14:22:00Z"
  }
}`
  },
  {
    id: 'ticket-validation',
    title: 'Ticket Validation',
    description: 'How to validate if an NFT ticket is valid',
    language: 'javascript',
    code: `// Validate NFT ticket
const validateTicket = async (ticketId, eventId) => {
  try {
    const ticket = await tickfy.tickets.get(ticketId);
    
    // Check if ticket belongs to the event
    if (ticket.eventId !== eventId) {
      return { valid: false, reason: 'Ticket does not belong to the event' };
    }
    
    // Check if ticket has already been used
    if (ticket.status === 'used') {
      return { valid: false, reason: 'Ticket has already been used' };
    }
    
    // Check current ownership
    const owner = await tickfy.nft.ownerOf(ticketId);
    
    return {
      valid: true,
      ticket,
      owner,
      metadata: ticket.metadata
    };
  } catch (error) {
    return { valid: false, reason: error.message };
  }
};

// Use in check-in
const result = await validateTicket('ticket_123', 'event_456');
if (result.valid) {
  console.log('Valid ticket!', result.ticket);
} else {
  console.log('Invalid ticket:', result.reason);
}`
  },
  {
    id: 'mint-tickets',
    title: 'Ticket Minting',
    description: 'How to create (mint) new NFT tickets for an event',
    language: 'javascript',
    code: `// Create NFT tickets for an event
const mintTickets = async (eventId, quantity, ticketType) => {
  try {
    // Prepare ticket metadata
    const metadata = {
      eventId,
      ticketType,
      mintedAt: new Date().toISOString(),
      attributes: [
        { trait_type: 'Event ID', value: eventId },
        { trait_type: 'Type', value: ticketType },
        { trait_type: 'Mintable', value: true }
      ]
    };
    
    // Calculate mint fee (1,000 TKFYT per ticket)
    const mintFee = quantity * 1000;
    
    // Execute mint transaction
    const txResult = await tickfy.tickets.mint({
      eventId,
      quantity,
      metadata,
      fee: mintFee,
      recipient: eventOwnerAddress
    });
    
    return {
      success: true,
      transactionHash: txResult.hash,
      ticketIds: txResult.ticketIds,
      totalFee: mintFee
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

// Usage example
const result = await mintTickets('event_123', 100, 'VIP');
console.log('Tickets created:', result.ticketIds);`
  },
  {
    id: 'transfer-ticket',
    title: 'Ticket Transfer',
    description: 'How to transfer an NFT ticket between wallets',
    language: 'javascript',
    code: `// Transfer ticket between wallets
const transferTicket = async (ticketId, fromAddress, toAddress) => {
  try {
    // Check current ownership
    const currentOwner = await tickfy.nft.ownerOf(ticketId);
    if (currentOwner !== fromAddress) {
      throw new Error('Sender is not the ticket owner');
    }
    
    // Check if ticket is transferable
    const ticket = await tickfy.tickets.get(ticketId);
    if (!ticket.transferable) {
      throw new Error('This ticket is not transferable');
    }
    
    // Execute transfer
    const txResult = await tickfy.nft.transfer({
      tokenId: ticketId,
      from: fromAddress,
      to: toAddress,
      // Transfer fee will be calculated automatically
    });
    
    return {
      success: true,
      transactionHash: txResult.hash,
      fromAddress,
      toAddress,
      ticketId
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

// Usage example
const transfer = await transferTicket(
  'ticket_123',
  'tkfy1sender...',
  'tkfy1recipient...'
);
console.log('Transfer:', transfer);`
  },
  {
    id: 'marketplace-listing',
    title: 'List on Marketplace',
    description: 'How to put a ticket up for sale on the marketplace',
    language: 'javascript',
    code: `// List ticket on marketplace
const listTicketForSale = async (ticketId, price, seller) => {
  try {
    // Check ownership
    const owner = await tickfy.nft.ownerOf(ticketId);
    if (owner !== seller) {
      throw new Error('Only the owner can list the ticket');
    }
    
    // Get event information to validate minimum price
    const ticket = await tickfy.tickets.get(ticketId);
    const event = await tickfy.events.get(ticket.eventId);
    
    // Check minimum price if configured
    if (event.minTradeForceBatchPrice && price < event.batchPrice) {
      throw new Error(\`Minimum price: \${event.batchPrice} TKFYT\`);
    }
    
    // Create marketplace listing
    const listing = await tickfy.marketplace.createListing({
      ticketId,
      price,
      seller,
      // Fees will be calculated automatically:
      // - 0.6% for network and validators
      // - Custom event fees (if any)
    });
    
    return {
      success: true,
      listingId: listing.id,
      ticketId,
      price,
      estimatedFees: listing.fees
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

// Usage example
const listing = await listTicketForSale('ticket_123', 150, 'tkfy1seller...');
console.log('Ticket listed:', listing);`
  },
  {
    id: 'event-creation',
    title: 'Event Creation',
    description: 'How to create a new event on the blockchain',
    language: 'javascript',
    code: `// Create new event
const createEvent = async (eventParams) => {
  try {
    const event = await tickfy.events.create({
      name: eventParams.name,
      description: eventParams.description,
      venue: eventParams.venue,
      dateTime: eventParams.dateTime,
      image: eventParams.imageUrl,
      
      // Ticket settings
      maxTickets: eventParams.maxTickets,
      batchPrice: eventParams.ticketPrice, // Price in TKFYT
      
      // Resale settings
      minTradeForceBatchPrice: true, // Force minimum price
      resaleRoyalty: 5, // 5% royalty for organizer
      
      // Custom fees (maximum 50% total)
      customFees: [
        { recipient: 'tkfy1organizer...', percentage: 2 }, // 2% for organizer
        { recipient: 'tkfy1venue...', percentage: 1 }      // 1% for venue
      ],
      
      // Access settings
      requireWhitelist: false,
      transferable: true,
      
      // Organizer (must be the creator)
      organizer: eventParams.organizerAddress
    });
    
    return {
      success: true,
      eventId: event.id,
      contractAddress: event.contractAddress,
      readyForMint: true
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

// Usage example
const newEvent = await createEvent({
  name: 'Music Festival 2024',
  description: 'The biggest music festival of the year',
  venue: 'Central Arena, São Paulo',
  dateTime: '2024-12-31T20:00:00Z',
  imageUrl: 'https://example.com/festival-image.jpg',
  maxTickets: 5000,
  ticketPrice: 200, // 200 TKFYT
  organizerAddress: 'tkfy1organizer...'
});
console.log('Event created:', newEvent);`
  },
  {
    id: 'check-in',
    title: 'Event Check-in',
    description: 'How to check-in participants at the event',
    language: 'javascript',
    code: `// Check-in system for events
const performCheckIn = async (ticketId, eventId, scannerAddress) => {
  try {
    // Validate scanner permissions
    const event = await tickfy.events.get(eventId);
    if (!event.authorizedScanners.includes(scannerAddress)) {
      throw new Error('Scanner not authorized for this event');
    }
    
    // Validate ticket
    const validation = await validateTicket(ticketId, eventId);
    if (!validation.valid) {
      return { 
        success: false, 
        reason: validation.reason 
      };
    }
    
    // Mark ticket as used
    const checkInResult = await tickfy.tickets.checkIn({
      ticketId,
      eventId,
      scannerAddress,
      timestamp: new Date().toISOString(),
      location: event.venue
    });
    
    // Log for audit
    await tickfy.events.logActivity({
      eventId,
      type: 'CHECK_IN',
      ticketId,
      timestamp: checkInResult.timestamp,
      scanner: scannerAddress
    });
    
    return {
      success: true,
      checkInTime: checkInResult.timestamp,
      participantInfo: {
        ticketType: validation.ticket.metadata.ticketType,
        ownerAddress: validation.owner
      }
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

// Usage example
const checkIn = await performCheckIn(
  'ticket_123',
  'event_456', 
  'tkfy1scanner...'
);

if (checkIn.success) {
  console.log('Check-in completed:', checkIn.checkInTime);
} else {
  console.log('Check-in error:', checkIn.reason || checkIn.error);
}`
  }
]

// Componente para exibir código expandível
const CodeExample = ({ example }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(example.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="border-2 hover:shadow-lg transition-shadow">
      <CardHeader 
        className="cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">{example.title}</CardTitle>
              <CardDescription className="text-sm">
                {example.description}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{example.language}</Badge>
            {isExpanded ? (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent>
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 z-10"
              onClick={copyToClipboard}
            >
              <Copy className="h-4 w-4" />
              {copied ? 'Copied!' : 'Copy'}
            </Button>
            <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{example.code}</code>
            </pre>
          </div>
        </CardContent>
      )}
    </Card>
  )
}

export default function Developers() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleSupportClick = () => {
    navigate('/community')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    // Scroll to section based on hash, or top if no hash
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return (
    <>
      <div className="pt-16" id="overview">
        <Hero
          subtitle="Developers"
          title="Build on Tickfy Network"
          description="Complete tools, ready-to-use APIs and technical documentation to develop applications with NFT tickets."
        >
          <div className="mt-16 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-white hover:bg-gray-100 border border-gray-200">
                <Download className="mr-2 h-5 w-5" />
                Download SDK
              </Button>
              <Button size="lg" className="text-lg px-8">
                Get API Key
                <Key className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </Hero>

        <Section
          title="Why Develop on Tickfy?"
          subtitle="Technical Advantages"
          description="Exclusive benefits for developers"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Complete APIs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  REST, GraphQL, WebSockets and SDKs for all popular languages
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Optimized Blockchain</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Network specialized in events with low fees and high performance
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Complete Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Guides, tutorials, code examples and active technical support
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Section: APIs & Integration */}
        <Section
          id="apis"
          title="APIs & Integration"
          subtitle="SDKs and Tools"
          description="Integrate NFT tickets into any application with our complete APIs"
          background="muted"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sdkFeatures.map((sdk, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-950/20">
                      <sdk.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{sdk.title}</CardTitle>
                      <CardDescription className="text-base">
                        {sdk.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {sdk.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <code className="text-sm">{sdk.installCommand}</code>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Section: Blockchain & Contracts */}
        <Section
          id="blockchain"
          title="Blockchain & Contracts"
          subtitle="Technical Specifications"
          description="Built on Cosmos SDK with optimized smart contracts"
        >
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consensusFeatures.map((feature, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-950/20 flex items-center justify-center mb-3">
                      <feature.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {feature.specs.map((spec, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground">
                          • {spec}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Section: Code Examples */}
        <Section
          title="Code Examples"
          subtitle="For Ticketing Agencies"
          description="Ready-to-use code to implement essential features"
          background="gradient"
        >
          <div className="space-y-6">
            {codeExamples.map((example, index) => (
              <CodeExample key={example.id} example={example} />
            ))}
          </div>
        </Section>

        <Section
          title="Start Developing"
          subtitle="Quick Setup"
          description="Everything ready for you to start today"
        >
          <div className="text-center">
            <Button size="lg" className="text-lg px-8" onClick={handleSupportClick}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Support and Help
            </Button>
          </div>
        </Section>
      </div>
    </>
  )
}