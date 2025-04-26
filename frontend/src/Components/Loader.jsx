import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  const letters = "HIVEMIND...".split("")

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex space-x-1">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            className="text-6xl md:text-8xl font-extrabold text-gray-800"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

export default Loader
