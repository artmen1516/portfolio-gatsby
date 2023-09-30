import React from 'react'
import { motion } from 'framer-motion'

function TransitionEffect() {
  return (
    <>

      {/* <motion.div className='fixed top-0 left-0 right-full w-screen h-screen z-40 bg-slate-950'
      animate={{ x: ['0%','0%','0%'], width: ['0%','100%','0%'] }}
      transition={{ duration: 0.4, ease: 'easeInOut', times: [0, 0.5, 1] }}
      /> */}

      <motion.div className='fixed top-0 bottom-0 w-screen h-screen z-30 bg-slate-950'
      animate={{ x: ['0%','0%'], width: ['100%','0%'] }}
      exit={{ x: ['0%','0%'], width: ['0%','100%'] }}
      transition={{ delay: 0, duration: 0.6, ease: 'easeInOut', times: [0, 1] }}
      />

      <motion.div className='fixed top-0 bottom-0 w-screen h-screen z-20 bg-slate-200'
      animate={{ x: ['100%','0%'], width: ['100%','0%'] }}
      transition={{ delay: 0.04, duration: 0.6, ease: 'easeInOut', times: [0, 1] }}
      />

      <motion.div className='fixed top-0 bottom-0 w-screen h-screen z-10 bg-background'
      animate={{ x: ['100%','0%'], width: ['100%','0%'] }}
      transition={{ delay: 0.08, duration: 0.6, ease: 'easeInOut', times: [0, 1] }}
      />
    </>
  )
}

export default TransitionEffect