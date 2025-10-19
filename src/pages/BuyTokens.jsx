import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import ScrambleText from '../components/ui/ScrambleText'
import Section from '../components/sections/Section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { 
  Calculator, ArrowLeftRight, Wallet, Send, Download, 
  AlertCircle, CheckCircle, Copy, ExternalLink, 
  DollarSign, Coins, CreditCard, ArrowRight 
} from 'lucide-react'

const TREASURY_ADDRESS = "tkfy1treasury_address_here_12345abcdef67890"

const exchangeRates = {
  TKFY: 1, // 1 TKFY = 1 USDT
  TKFYT: 0.000001 // 1 TKFYT = 0.000001 USDT (1M TKFYT = 1 USDT)
}

export default function BuyTokens() {
  const location = useLocation()
  const [selectedToken, setSelectedToken] = useState('TKFYT')
  const [usdtAmount, setUsdtAmount] = useState('')
  const [tokenAmount, setTokenAmount] = useState('')
  const [isReverse, setIsReverse] = useState(false)

  // Handle scroll to section on page load
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  useEffect(() => {
    if (isReverse && tokenAmount) {
      const usdt = parseFloat(tokenAmount) * exchangeRates[selectedToken]
      setUsdtAmount(usdt.toFixed(6))
    } else if (!isReverse && usdtAmount) {
      const tokens = parseFloat(usdtAmount) / exchangeRates[selectedToken]
      setTokenAmount(tokens.toLocaleString())
    }
  }, [usdtAmount, tokenAmount, selectedToken, isReverse])

  const handleUsdtChange = (value) => {
    setIsReverse(false)
    setUsdtAmount(value)
    if (value) {
      const tokens = parseFloat(value) / exchangeRates[selectedToken]
      setTokenAmount(tokens.toLocaleString())
    } else {
      setTokenAmount('')
    }
  }

  const handleTokenChange = (value) => {
    setIsReverse(true)
    const numericValue = value.replace(/,/g, '')
    setTokenAmount(numericValue)
    if (numericValue) {
      const usdt = parseFloat(numericValue) * exchangeRates[selectedToken]
      setUsdtAmount(usdt.toFixed(6))
    } else {
      setUsdtAmount('')
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  const buySteps = [
    {
      step: '1',
      title: 'Calculate Quantity',
      description: 'Use the calculator above to determine how many tokens you want to buy',
      icon: Calculator,
      detail: 'Set the value in USDT or the desired token amount'
    },
    {
      step: '2',
      title: 'Send USDT',
      description: 'Transfer the USDT amount to the treasury address',
      icon: Send,
      detail: 'Use any wallet that supports USDT on the chosen network'
    },
    {
      step: '3',
      title: 'Wait for Confirmation',
      description: 'After blockchain confirmation, tokens will be sent automatically',
      icon: CheckCircle,
      detail: 'Automatic process, usually takes 5-15 minutes'
    },
    {
      step: '4',
      title: 'Receive Tokens',
      description: 'Tokens will appear in your wallet on Tickfy Network',
      icon: Wallet,
      detail: 'Add Tickfy network to your wallet if needed'
    }
  ]

  const sellSteps = [
    {
      step: '1',
      title: 'Calculate Value',
      description: 'Determine how many tokens you want to sell and the value in USDT',
      icon: Calculator
    },
    {
      step: '2',
      title: 'Send Request',
      description: 'Send a sell transaction to the treasury contract',
      icon: Send
    },
    {
      step: '3',
      title: 'Automatic Confirmation',
      description: 'The system processes automatically and calculates the amount due',
      icon: CheckCircle
    },
    {
      step: '4',
      title: 'Receive USDT',
      description: 'The USDT amount is sent to your wallet automatically',
      icon: Download
    }
  ]

  const supportedNetworks = [
    { name: 'Ethereum', chain: 'ERC-20', fee: '~$15-50' },
    { name: 'Polygon', chain: 'MATIC', fee: '~$0.01-0.1' },
    { name: 'BSC', chain: 'BEP-20', fee: '~$0.5-2' },
    { name: 'Arbitrum', chain: 'ARB', fee: '~$1-5' }
  ]

  return (
    <>
      <div className="pt-16" id="overview">
        <Hero
          subtitle={<ScrambleText text="Buy Tokens" />}
          title="Acquire TKFY and TKFYT"
          description="Calculator and complete guide to buy Tickfy Network tokens with USDT."
        />

        <Section
          title="Token Calculator"
          description="Calculate how much it costs to buy tokens or how much you receive selling"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Calculator */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Calculator className="h-5 w-5" />
                  Conversion Calculator
                </CardTitle>
                <CardDescription>
                  Enter value in any field to see automatic conversion
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Token Selector */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Token to Buy:</label>
                  <div className="flex gap-2">
                    <Button
                      variant={selectedToken === 'TKFY' ? 'default' : 'outline'}
                      onClick={() => setSelectedToken('TKFY')}
                      className="flex-1"
                    >
                      TKFY (Staking)
                    </Button>
                    <Button
                      variant={selectedToken === 'TKFYT' ? 'default' : 'outline'}
                      onClick={() => setSelectedToken('TKFYT')}
                      className="flex-1"
                    >
                      TKFYT (Transaction)
                    </Button>
                  </div>
                  
                  {/* Info Messages */}
                  {selectedToken === 'TKFY' && (
                    <div className="mt-3 flex items-start gap-2 p-3 bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg">
                      <AlertCircle className="h-4 w-4 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        <strong>Minimum to mine:</strong> 5,000 TKFY required to become a validator
                      </p>
                    </div>
                  )}
                  
                  {selectedToken === 'TKFYT' && (
                    <div className="mt-3 flex items-start gap-2 p-3 bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg">
                      <AlertCircle className="h-4 w-4 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        <strong>Ticket mint cost:</strong> 1,000 TKFYT per ticket
                      </p>
                    </div>
                  )}
                </div>

                {/* Conversion Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Value in USDT:</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="number"
                        value={usdtAmount}
                        onChange={(e) => handleUsdtChange(e.target.value)}
                        placeholder="0.00"
                        className="w-full pl-10 pr-16 py-3 border rounded-lg text-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground font-medium">
                        USDT
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Amount of {selectedToken}:</label>
                    <div className="relative">
                      <Coins className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        value={tokenAmount}
                        onChange={(e) => handleTokenChange(e.target.value)}
                        placeholder="0"
                        className="w-full pl-10 pr-20 py-3 border rounded-lg text-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground font-medium">
                        {selectedToken}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Right Side - Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg">
              <img 
                src="/images/g11.png" 
                alt="Buy Tokens" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>

        <Section
          title="Treasury Address"
            subtitle={<ScrambleText text="Where to Send USDT" />}
          description="Official treasury address for token purchase"
          background="muted"
        >
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-orange-200 bg-orange-50/50 dark:bg-orange-950/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
                  <Wallet className="h-5 w-5" />
                  Tickfy Treasury Address
                </CardTitle>
                <CardDescription className="text-orange-700 dark:text-orange-300">
                  Send USDT to this address to buy tokens
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-background p-4 rounded-lg border">
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono break-all flex-1 mr-2">
                      {TREASURY_ADDRESS}
                    </code>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(TREASURY_ADDRESS)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                        Important:
                      </div>
                      <div className="text-yellow-700 dark:text-yellow-300">
                        Always verify this address on the official website. Never send USDT to other addresses.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

      </div>
    </>
  )
}