import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <main className='py-2' align="center">
        <Container>
          <h1>Welcome To BUY-BRAND'S</h1>
        </Container>
      </main>
      <Footer />
    </>
  )    
}

export default App;
