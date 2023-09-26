import { createContext, useState } from "react"

const AdviceContext = createContext()
//Create a provider
export const AdviceProvider = ({ children }) => {
  const [advice, setAdvice] = useState([])
  const adviceText = (adviceUI) => {
    setAdvice(adviceUI)
  }

  return (
    <AdviceContext.Provider value={{ advice, adviceText }}>
      {children}
    </AdviceContext.Provider>
  )
}

export default AdviceContext
