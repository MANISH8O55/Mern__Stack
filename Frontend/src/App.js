import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screens/Homescreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className ='py-4' style={{backgroundColor: "lightblue"}}>
        <Container>
         <Routes>
         <Route path="/" element ={< Homescreen />} />
         <Route path="/product/:_id" element = {< ProductScreen />} />
         </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )    
}

export default App;
