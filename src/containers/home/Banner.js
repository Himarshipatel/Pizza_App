import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Navigation } from '../../components'
const Banner = () => {
  return (
    <div>
      <Container className="container">
        <Row className="row">
          <Col className="menucolum">
            <Col className="logocolum">
              <img
                src={
                  'https://image.shutterstock.com/image-vector/pizzeria-vector-emblem-on-blackboard-600w-635547866.jpg'
                }
                alt=""
                width="60px"
                height="60px"
                className="logo"
              />
              <Navigation />
            </Col>
            {/* <Col className="navigation">
              <Navigation />
            </Col> */}

            <Col className="title">
              <Col>cheesy</Col>
              <Col>pizza</Col>
            </Col>
            <Col className="subtitle">
              <Col>Incididunt ut labourdolore megna aliqua.urenim</Col>
              <Col>add minim vemiam,quis nostrud exercitation</Col>
            </Col>
            <Col className="buttoncolum">
              <Button color="danger" className="button">
                More Deals
              </Button>
            </Col>
          </Col>

          <Col className="imagecolum">
            <img
              src={
                'https://media.gettyimages.com/photos/cheesy-pepperoni-pizza-picture-id938742222?s=2048x2048'
              }
              alt=""
              width="550px"
              height="500px"
              className="image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner
