import { motion } from "framer-motion"

function Motion({ children }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }}
      transition={{
          duration: .5
      }}
      viewport={{ once: true }}
      className="wrap-motion"
    >
      {children}
    </motion.div>
  );
}

export default Motion;