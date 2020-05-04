import React from 'react'
import {
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
  CardImg,
  CardBody,
} from 'reactstrap'
const Cardd = () => {
  return (
    <Col>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://media.gettyimages.com/photos/cheesy-pepperoni-pizza-picture-id938742222?s=2048x2048"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button color="danger">Order Now</Button>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Cardd
