import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
  return (
    <footer style={{backgroundColor: "lightblue"}}>
      <Container >
        <Row>
          <Col classname='text-center py-3' align="center" >Copyright &copy; BUY-BRAND'S</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer