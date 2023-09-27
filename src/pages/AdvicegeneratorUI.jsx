import divideMobile from '../assets/dividemobile.svg'
import { BsFillDice5Fill} from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useContext, useEffect } from 'react'
import AdviceContext from '../context/AdviceContext'
function advicegeneratorUI({}) {
  const { advice, adviceText } = useContext(AdviceContext)
  useEffect(() => {
    adviceApi()
  })
  //Gen and fetching  the advice Api
  const adviceApi = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice')
      const data = await response.json()
      if (!response.ok) {
        adviceText('Advice Loading')
      }
      adviceText(data.slip.advice)
    } catch (error) {
      console.log(error)
      adviceText('OOps!,Advice on Pause')
    }
  }
  return (
    //Container
    <div className=' bg-DarkBlue h-screen flex items-center justify-center mx-auto '>
      {/* Card */}
      <div className='  bg-DarkGrayishBlue max-w-xl p-10 rounded-3xl'>
        <div className='font-Manrope space-y-6 py-10 text-center '>
          <h1 className='text-sm text-NeonGreen tracking-widest '>
            ADVICE #117
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h1 className='text-3xl font-bold  leading-10 text-LightCyan'>
              {advice}
            </h1>
          </motion.div>
          <img src={divideMobile} className='mx-auto' alt='divideMobileimage' />
        </div>

        {/* Dice Button */}
      
        <button className=' mx-auto flex items-center justify-center -mb-16'>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className='Btn bg-NeonGreen p-8  hover:shadow-lg hover:shadow-NeonGreen rounded-full '
          onClick={adviceApi}
         
          />
          <BsFillDice5Fill className='absolute text-2xl flex justify-center items-center mx-auto'/> 
    
        </button>
      </div>
    </div>
  )
}

export default advicegeneratorUI
