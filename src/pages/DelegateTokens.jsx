import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import ScrambleText from '../components/ui/ScrambleText'
import Section from '../components/sections/Section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { 
  Users, Coins, TrendingUp, Shield, AlertCircle, 
  CheckCircle, ArrowRight, Percent, Clock, Award
} from 'lucide-react'

// Mock data for validators
const topValidators = [
  {
    id: 1,
    name: 'Validator Alpha',
    address: 'tkfy1validator...abc123',
    commission: '5%',
    totalStaked: '2,450,000 TKFY',
    delegators: 342,
    uptime: '99.9%',
    rewards24h: '1,234 TKFY',
    status: 'active'
  },
  {
    id: 2,
    name: 'Validator Beta',
    address: 'tkfy1validator...def456',
    commission: '8%',
    totalStaked: '1,890,000 TKFY',
    delegators: 256,
    uptime: '99.8%',
    rewards24h: '987 TKFY',
    status: 'active'
  },
  {
    id: 3,
    name: 'Validator Gamma',
    address: 'tkfy1validator...ghi789',
    commission: '10%',
    totalStaked: '1,650,000 TKFY',
    delegators: 198,
    uptime: '99.7%',
    rewards24h: '845 TKFY',
    status: 'active'
  },
  {
    id: 4,
    name: 'Validator Delta',
    address: 'tkfy1validator...jkl012',
    commission: '7%',
    totalStaked: '1,320,000 TKFY',
    delegators: 175,
    uptime: '99.9%',
    rewards24h: '723 TKFY',
    status: 'active'
  },
  {
    id: 5,
    name: 'Validator Epsilon',
    address: 'tkfy1validator...mno345',
    commission: '6%',
    totalStaked: '1,180,000 TKFY',
    delegators: 143,
    uptime: '99.6%',
    rewards24h: '645 TKFY',
    status: 'active'
  }
]

const delegationBenefits = [
  {
    icon: Coins,
    title: 'Earn Passive Income',
    description: 'Receive rewards from validator earnings without running infrastructure'
  },
  {
    icon: Shield,
    title: 'Secure the Network',
    description: 'Help maintain network security by supporting validators'
  },
  {
    icon: Users,
    title: 'No Minimum Required',
    description: 'Delegate any amount of TKFY, no 5,000 minimum like validators'
  },
  {
    icon: TrendingUp,
    title: 'Compound Rewards',
    description: 'Automatically reinvest your rewards to maximize earnings'
  }
]

const delegationSteps = [
  {
    step: '1',
    title: 'Choose a Validator',
    description: 'Select a validator based on commission, uptime, and total staked',
    icon: Users
  },
  {
    step: '2',
    title: 'Delegate Your TKFY',
    description: 'Send your TKFY tokens to the validator address',
    icon: Coins
  },
  {
    step: '3',
    title: 'Earn Rewards',
    description: 'Receive 80% of the validator\'s earnings proportional to your stake',
    icon: TrendingUp
  },
  {
    step: '4',
    title: 'Claim or Redelegate',
    description: 'Withdraw rewards or redelegate to compound your earnings',
    icon: Award
  }
]

export default function DelegateTokens() {
  const location = useLocation()
  const [selectedValidator, setSelectedValidator] = useState(null)
  const [delegateAmount, setDelegateAmount] = useState('')
  const [showDelegateModal, setShowDelegateModal] = useState(false)

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

  const handleDelegate = (validator) => {
    setSelectedValidator(validator)
    setShowDelegateModal(true)
  }

  const handleConfirmDelegate = () => {
    console.log('Delegating', delegateAmount, 'TKFY to', selectedValidator.name)
    setShowDelegateModal(false)
    setDelegateAmount('')
    setSelectedValidator(null)
  }

  return (
    <>
      <div className="pt-16" id="overview">
        <Hero
          subtitle={<ScrambleText text="Delegate & Earn" />}
          title="Delegate Your TKFY Tokens"
          description="Support validators and earn passive rewards without running your own node"
        />

        {/* Active Validators */}
        <Section
          title="Active Validators"
          subtitle={<ScrambleText text="Choose Your Validator" />}
          description="Select a validator to delegate your TKFY tokens"
        >
          <div className="space-y-4">
            {topValidators.map((validator) => (
              <Card key={validator.id} className="border-2 hover:shadow-lg transition-all hover:border-primary/50">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{validator.name}</CardTitle>
                        <Badge variant="outline" className="gap-1">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          {validator.status}
                        </Badge>
                      </div>
                      <CardDescription className="font-mono text-xs">
                        {validator.address}
                      </CardDescription>
                    </div>
                    <Button
                      variant="gradient"
                      onClick={() => handleDelegate(validator)}
                      className="gap-2"
                    >
                      Delegate
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground mb-1 flex items-center gap-1">
                        <Percent className="h-3 w-3" />
                        Commission
                      </div>
                      <div className="font-semibold">{validator.commission}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1 flex items-center gap-1">
                        <Coins className="h-3 w-3" />
                        Total Staked
                      </div>
                      <div className="font-semibold">{validator.totalStaked}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1 flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        Delegators
                      </div>
                      <div className="font-semibold">{validator.delegators}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Uptime
                      </div>
                      <div className="font-semibold text-green-600">{validator.uptime}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1 flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        Rewards (24h)
                      </div>
                      <div className="font-semibold text-primary">{validator.rewards24h}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Delegation Modal */}
        {showDelegateModal && selectedValidator && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Delegate to {selectedValidator.name}</CardTitle>
                <CardDescription>
                  Enter the amount of TKFY you want to delegate
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Validator Commission:</span>
                    <span className="font-semibold">{selectedValidator.commission}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Uptime:</span>
                    <span className="font-semibold text-green-600">{selectedValidator.uptime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Your Share:</span>
                    <span className="font-semibold text-primary">80% of rewards</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Amount to Delegate:</label>
                  <div className="relative">
                    <Coins className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="number"
                      value={delegateAmount}
                      onChange={(e) => setDelegateAmount(e.target.value)}
                      placeholder="0"
                      className="w-full pl-10 pr-16 py-3 border rounded-lg text-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground font-medium">
                      TKFY
                    </span>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 p-3 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-yellow-700 dark:text-yellow-300">
                      Your tokens will be locked with the validator. You can undelegate at any time, but there may be an unbonding period.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowDelegateModal(false)
                      setSelectedValidator(null)
                      setDelegateAmount('')
                    }}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="gradient"
                    onClick={handleConfirmDelegate}
                    className="flex-1 gap-2"
                    disabled={!delegateAmount || parseFloat(delegateAmount) <= 0}
                  >
                    <CheckCircle className="h-4 w-4" />
                    Confirm Delegation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </>
  )
}
