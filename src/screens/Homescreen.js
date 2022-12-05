import React from 'react'
import {Row , Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

const Homescreen = () => {
  return (
    <>
        <h3 align="center">Latest Products</h3>
        <Row>
            {products.map((product) => (
                <Col sm={10} md={5} lg={8} xl={3}  >
                  < Product product={product}/>
                </Col>
            ))}

        </Row>


    </>
  )
}

export default Homescreen