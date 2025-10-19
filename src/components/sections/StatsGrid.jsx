import { motion } from 'framer-motion'

export default function StatsGrid({ stats, columns = 4, CountingComponent, LiveCounterComponent }) {
  // Detecta automaticamente o número de stats se columns não for especificado explicitamente
  const actualColumns = stats.length === 3 ? 3 : columns
  
  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-3 max-w-4xl mx-auto',
    4: 'grid-cols-2 lg:grid-cols-4',
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`grid gap-6 ${columnClasses[actualColumns]}`}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="text-center p-3 sm:p-6 rounded-lg bg-card/50 border border-accent/20 backdrop-blur-sm"
        >
          <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
            {stat.isLive && LiveCounterComponent ? (
              <LiveCounterComponent {...stat.liveConfig} />
            ) : CountingComponent ? (
              <CountingComponent value={stat.value} />
            ) : (
              stat.value
            )}
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground font-medium">
            {stat.label}
          </div>
          {stat.description && (
            <div className="text-[10px] sm:text-xs text-muted-foreground/80 mt-0.5 sm:mt-1">
              {stat.description}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}