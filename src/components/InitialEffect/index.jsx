import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function InitialEffect() {
  const [show, setShow] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedShow = localStorage.getItem('initialEffectShow');
      return storedShow ? JSON.parse(storedShow) : true;
    }
    return true; // Fallback value if not in the browser environment
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('initialEffectShow', JSON.stringify(show));
    }
  }, [show]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleBeforeUnload = () => {
        setShow(true);
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, []);

  return (
    <>
      {show === true && (
        <motion.div
          className='flex fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-slate-950 justify-center items-center'
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          onAnimationComplete={() => setShow(false)}
        >
          <h1 className='text-textPrimary text-6xl z-40 '>Portfolio</h1>
        </motion.div>
      )}
    </>
  );
}

export default InitialEffect
