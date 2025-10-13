import { motion } from 'framer-motion'

export default function Section({ 
  title, 
  subtitle, 
  description, 
  children, 
  className = "",
  background = "default",
  ...props 
}) {
  const backgroundClasses = {
    default: "bg-background",
    muted: "bg-muted/50",
    gradient: "bg-gradient-to-br from-muted/50 to-background",
    dark: "bg-crypto-dark text-white",
  }

  return (
    <section 
      className={`py-16 lg:py-24 ${backgroundClasses[background]} ${className}`}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle || description) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            {subtitle && (
              <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
                {subtitle}
              </p>
            )}
            
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                {title}
              </h2>
            )}
            
            {description && (
              <p className="text-lg text-muted-foreground text-balance">
                {description}
              </p>
            )}
          </motion.div>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}