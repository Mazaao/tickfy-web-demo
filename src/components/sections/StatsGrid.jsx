import { motion } from 'framer-motion'

export default function StatsGrid({ stats, columns = 4 }) {
  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
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
      className={`grid gap-6 ${columnClasses[columns]}`}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="text-center p-6 rounded-lg bg-card/50 border border-accent/20 backdrop-blur-sm"
        >
          <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            {stat.label}
          </div>
          {stat.description && (
            <div className="text-xs text-muted-foreground/80 mt-1">
              {stat.description}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}