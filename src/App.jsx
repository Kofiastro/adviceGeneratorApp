import { useState } from 'react'
import Footer from './pages/Footer'
import AdvicegeneratorUI from './pages/AdvicegeneratorUI'
import { AdviceProvider } from './context/AdviceContext'
function App() {
  return (
    <AdviceProvider>
      <>
        <main>
          <AdvicegeneratorUI />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    </AdviceProvider>
  )
}

export default App
