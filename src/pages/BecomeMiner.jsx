import { Link } from 'react-router-dom'
import { useState } from 'react'
import Hero from '../components/sections/Hero'
import Section from '../components/sections/Section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { 
  Shield, Zap, Coins, DollarSign, TrendingUp, Users, 
  Server, Cpu, Gauge, ArrowRight, Calculator, Wallet,
  CheckCircle, AlertCircle, Info, Target
} from 'lucide-react'

// Mining Requirements
const requirements = [
  {
    icon: Coins,
    title: 'Minimum Stake',
    value: '5,000 TKFY',
    description: 'Required to become a validator and start mining'
  },
  {
    icon: Server,
    title: 'Hardware',
    value: '4+ CPU cores',
    description: 'Reliable server with good internet connection'
  },
  {
    icon: Shield,
    title: 'Uptime',
    value: '99%+',
    description: 'High availability required to avoid slashing'
  },
  {
    icon: Zap,
    title: 'Network',
    value: '100+ Mbps',
    description: 'Fast and stable internet connection'
  }
]

// Revenue Breakdown
const revenueBreakdown = [
  {
    source: 'Block Rewards',
    percentage: 0.5,
    description: '0.50% of all transaction volume in each block',
    frequency: 'Every 5 seconds'
  },
  {
    source: 'Delegation Rewards',
    percentage: 20,
    description: '20% commission from delegators who stake to your validator',
    frequency: 'Automatic distribution'
  },
  {
    source: 'Network Governance',
    percentage: 0,
    description: 'Participate in protocol decisions and upgrades',
    frequency: 'Voting rewards'
  }
]

// Earnings Calculator Data
const calculateEarnings = (stake, blockVolume = 1000000, uptimePercent = 99) => {
  const totalValidatorStake = 10000000 // Assume 10M TKFY total staked
  const myStakePercent = stake / totalValidatorStake
  const blocksPerHour = 720 // 5 second blocks = 720 blocks/hour
  const networkFeePercent = 0.005 // 0.50%
  
  // Block rewards per hour
  const hourlyBlockReward = blockVolume * blocksPerHour * networkFeePercent * myStakePercent * (uptimePercent / 100)
  
  // Daily and monthly projections
  const dailyEarnings = hourlyBlockReward * 24
  const monthlyEarnings = dailyEarnings * 30
  const yearlyEarnings = dailyEarnings * 365
  
  return {
    hourly: Math.round(hourlyBlockReward),
    daily: Math.round(dailyEarnings),
    monthly: Math.round(monthlyEarnings),
    yearly: Math.round(yearlyEarnings),
    apy: Math.round((yearlyEarnings / stake) * 100 * 100) / 100
  }
}

// Delegation Options
const delegationBenefits = [
  {
    icon: Target,
    title: 'Lower Barrier to Entry',
    description: 'Start earning with any amount of TKFY tokens',
    minAmount: 'No minimum'
  },
  {
    icon: Gauge,
    title: 'Shared Rewards',
    description: 'Earn 80% of validator rewards without technical requirements',
    reward: '80% of rewards'
  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Choose reliable validators to minimize slashing risk',
    protection: 'Validator selection'
  },
  {
    icon: Zap,
    title: 'Flexibility',
    description: 'Delegate and undelegate anytime with no lock period',
    liquidity: 'Instant unbonding'
  }
]

// Interactive Calculator Component
function InteractiveCalculator() {
  const [stakeAmount, setStakeAmount] = useState(5000)
  const [blockVolume, setBlockVolume] = useState(1000000)
  const [uptime, setUptime] = useState(99)

  const calculateCustomEarnings = (stake, volume, uptimePercent) => {
    const totalValidatorStake = 10000000 // Assume 10M TKFY total staked
    const myStakePercent = stake / totalValidatorStake
    const blocksPerHour = 720 // 5 second blocks = 720 blocks/hour
    const networkFeePercent = 0.005 // 0.50%
    
    // Block rewards per hour
    const hourlyBlockReward = volume * blocksPerHour * networkFeePercent * myStakePercent * (uptimePercent / 100)
    
    // Daily and monthly projections
    const dailyEarnings = hourlyBlockReward * 24
    const monthlyEarnings = dailyEarnings * 30
    const yearlyEarnings = dailyEarnings * 365
    
    return {
      hourly: Math.round(hourlyBlockReward * 100) / 100,
      daily: Math.round(dailyEarnings * 100) / 100,
      monthly: Math.round(monthlyEarnings * 100) / 100,
      yearly: Math.round(yearlyEarnings * 100) / 100,
      apy: Math.round((yearlyEarnings / stake) * 100 * 100) / 100
    }
  }

  const earnings = calculateCustomEarnings(stakeAmount, blockVolume, uptime)

  return (
    <div className="space-y-6">
      {/* Input Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Stake Amount (TKFY)
          </label>
          <input
            type="number"
            min="5000"
            max="1000000"
            step="1000"
            value={stakeAmount}
            onChange={(e) => setStakeAmount(parseInt(e.target.value) || 5000)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:border-gray-600 dark:bg-gray-700"
          />
          <div className="text-xs text-muted-foreground mt-1">
            Minimum: 5,000 TKFY
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">
            Average Block Volume (TKFYT)
          </label>
          <input
            type="number"
            min="100000"
            max="10000000"
            step="100000"
            value={blockVolume}
            onChange={(e) => setBlockVolume(parseInt(e.target.value) || 1000000)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:border-gray-600 dark:bg-gray-700"
          />
          <div className="text-xs text-muted-foreground mt-1">
            Per 5-second block
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Uptime (%)
          </label>
          <input
            type="number"
            min="90"
            max="100"
            step="0.1"
            value={uptime}
            onChange={(e) => setUptime(parseFloat(e.target.value) || 99)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:border-gray-600 dark:bg-gray-700"
          />
          <div className="text-xs text-muted-foreground mt-1">
            Validator availability
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-center mb-4">
          Projected Earnings for {stakeAmount.toLocaleString()} TKFY
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{earnings.hourly}</div>
            <div className="text-sm font-medium">TKFYT/hour</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{earnings.daily}</div>
            <div className="text-sm font-medium">TKFYT/day</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{earnings.monthly.toLocaleString()}</div>
            <div className="text-sm font-medium">TKFYT/month</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{earnings.apy}%</div>
            <div className="text-sm font-medium">Estimated APY</div>
          </div>
        </div>
      </div>

      {/* Risk Warning */}
      {uptime < 99 && (
        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <div className="font-semibold text-red-800 dark:text-red-200 mb-1">Slashing Risk Warning</div>
              <div className="text-red-700 dark:text-red-300">
                Uptime below 99% significantly increases slashing risk. Maintain high availability to protect your stake.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function BecomeMiner() {
  const earnings5k = calculateEarnings(5000)
  const earnings10k = calculateEarnings(10000)
  const earnings50k = calculateEarnings(50000)

  return (
    <>
      <div className="pt-16">
        <Hero
          subtitle="Become a Miner"
          title="Secure the Network, Earn Rewards"
          description="Join the Tickfy Network as a validator and earn rewards by securing transactions and maintaining network consensus."
        />

        {/* Section 1: Why Become a Validator */}
        <Section
          title="Why Become a Validator?"
          subtitle="Earn While Securing"
          description="Validators are the backbone of Tickfy Network, ensuring security and earning rewards"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {requirements.map((req, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <req.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{req.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{req.value}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{req.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Revenue Information */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6">Revenue Streams</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {revenueBreakdown.map((revenue, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {revenue.percentage > 1 ? `${revenue.percentage}%` : `${revenue.percentage}%`}
                  </div>
                  <div className="font-semibold mb-2">{revenue.source}</div>
                  <div className="text-sm text-muted-foreground mb-2">{revenue.description}</div>
                  <Badge variant="outline" className="text-xs">{revenue.frequency}</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Slashing Information */}
          <div className="mt-12 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-2xl p-8">
            <div className="text-center mb-6">
              <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-2">Slashing Risk</h3>
              <p className="text-red-700 dark:text-red-300">
                Understanding validator penalties and how to avoid them
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">5%</div>
                <div className="font-semibold mb-2">Downtime Penalty</div>
                <div className="text-sm text-muted-foreground">
                  Extended offline periods result in 5% stake slashing
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">20%</div>
                <div className="font-semibold mb-2">Double Sign Penalty</div>
                <div className="text-sm text-muted-foreground">
                  Malicious behavior or double signing results in 20% slashing
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-800 dark:text-red-400 mb-2">100%</div>
                <div className="font-semibold mb-2">Malicious Block Penalty</div>
                <div className="text-sm text-muted-foreground">
                  Attempting to pass malicious blocks results in complete stake loss
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 2: Earnings Calculator */}
        <Section
          title="Earnings Calculator"
          subtitle="Potential Returns"
          description="Estimated earnings with different stake amounts (based on average network activity)"
          background="muted"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* 5K TKFY */}
            <Card className="border-2 border-blue-200 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20">
                <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Minimum Stake
                </div>
                <CardTitle className="text-2xl">5,000 TKFY</CardTitle>
                <CardDescription>Entry-level validator</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 mt-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Per hour:</span>
                    <span className="font-bold">{earnings5k.hourly} TKFYT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Per day:</span>
                    <span className="font-bold">{earnings5k.daily} TKFYT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Per month:</span>
                    <span className="font-bold text-green-600">{earnings5k.monthly} TKFYT</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="font-semibold">Estimated APY:</span>
                    <span className="font-bold text-primary text-lg">{earnings5k.apy}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 10K TKFY */}
            <Card className="border-2 border-purple-200 hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-600">Popular</Badge>
              </div>
              <CardHeader className="text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20">
                <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Recommended
                </div>
                <CardTitle className="text-2xl">10,000 TKFY</CardTitle>
                <CardDescription>Optimal stake amount</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 mt-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Per hour:</span>
                    <span className="font-bold">{earnings10k.hourly} TKFYT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Per day:</span>
                    <span className="font-bold">{earnings10k.daily} TKFYT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Per month:</span>
                    <span className="font-bold text-green-600">{earnings10k.monthly} TKFYT</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="font-semibold">Estimated APY:</span>
                    <span className="font-bold text-primary text-lg">{earnings10k.apy}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 50K TKFY */}
            <Card className="border-2 border-yellow-200 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/20 dark:to-yellow-900/20">
                <div className="inline-block bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                  High Stake
                </div>
                <CardTitle className="text-2xl">50,000 TKFY</CardTitle>
                <CardDescription>Large validator</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 mt-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Per hour:</span>
                    <span className="font-bold">{earnings50k.hourly} TKFYT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Per day:</span>
                    <span className="font-bold">{earnings50k.daily} TKFYT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Per month:</span>
                    <span className="font-bold text-green-600">{earnings50k.monthly} TKFYT</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="font-semibold">Estimated APY:</span>
                    <span className="font-bold text-primary text-lg">{earnings50k.apy}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <div className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Earnings Disclaimer</div>
                <div className="text-yellow-700 dark:text-yellow-300">
                  Earnings are estimates based on current network parameters and average transaction volume. 
                  Actual earnings may vary depending on network activity, validator performance, and market conditions.
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Calculator */}
          <div className="mt-12">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <Calculator className="h-6 w-6" />
                  Interactive Mining Calculator
                </CardTitle>
                <CardDescription>
                  Calculate your potential earnings with custom stake amounts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveCalculator />
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Section 3: Delegation Alternative */}
        <Section
          title="Not Ready to Run a Validator?"
          subtitle="Stake Delegation"
          description="Earn rewards by delegating your TKFY tokens to existing validators"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {delegationBenefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                    <benefit.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <div className="text-sm font-medium text-secondary">
                    {benefit.minAmount || benefit.reward || benefit.protection || benefit.liquidity}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Delegation vs Validation Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20">
                <CardTitle className="text-center">
                  <Cpu className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  Run Your Own Validator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 mt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Higher rewards (100% of earnings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Network governance participation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Commission from delegators</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm">Requires technical knowledge</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm">Minimum 5,000 TKFY stake</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm">Hardware and maintenance costs</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20">
                <CardTitle className="text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  Delegate to Validators
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 mt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">No technical requirements</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">No minimum stake amount</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Instant unbonding available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Choose reliable validators</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm">Lower rewards (80% after commission)</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm">Dependent on validator performance</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Section 4: Get Started */}
        <Section
          title="Ready to Start?"
          subtitle="Choose Your Path"
          description="Whether you want to run your own validator or delegate, we'll guide you through the process"
          background="muted"
        >
          <div className="text-center space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-xl">Become a Validator</CardTitle>
                  <CardDescription>Run your own node and earn maximum rewards</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Minimum stake:</span>
                      <span className="font-bold">5,000 TKFY</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Setup difficulty:</span>
                      <span className="font-bold text-yellow-600">Medium-High</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated APY:</span>
                      <span className="font-bold text-green-600">{earnings5k.apy}%+</span>
                    </div>
                  </div>
                  <Button className="w-full" size="lg">
                    <Server className="mr-2 h-5 w-5" />
                    Start Mining Setup
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20 bg-secondary/5">
                <CardHeader>
                  <CardTitle className="text-xl">Delegate Tokens</CardTitle>
                  <CardDescription>Stake with existing validators and earn passively</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Minimum stake:</span>
                      <span className="font-bold">No minimum</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Setup difficulty:</span>
                      <span className="font-bold text-green-600">Easy</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated APY:</span>
                      <span className="font-bold text-green-600">{Math.round(earnings5k.apy * 0.8)}%</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" size="lg">
                    <Wallet className="mr-2 h-5 w-5" />
                    Delegate Tokens
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Need Help Getting Started?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our team is ready to help you set up your validator or choose the best delegation strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Calculator className="mr-2 h-5 w-5" />
                  Validator Setup Guide
                </Button>
                <Button variant="outline" size="lg">
                  <Users className="mr-2 h-5 w-5" />
                  Join Mining Community
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}