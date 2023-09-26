import divideMobile from '../assets/dividemobile.svg'
import dice from '../assets/dice.svg'
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
          <h1 className='text-3xl font-bold  leading-10 text-LightCyan'>
            {advice}
          </h1>
          <img src={divideMobile} className='mx-auto' alt='divideMobileimage' />
        </div>
        {/* Dice Image */}
        <div className='mx-auto flex items-center justify-center -mb-16'>
          <button
            onClick={adviceApi}
            className='Btn bg-NeonGreen p-5  hover:shadow-lg hover:shadow-NeonGreen  rounded-full'
          >
            <img src={dice} alt='diceSvg' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default advicegeneratorUI
