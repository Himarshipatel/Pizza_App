import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
  CardImg,
  CardBody,
} from 'reactstrap'
import { Cardd } from '../../components'
const PizzaList = () => {
  return (
    <Container>
      <br />
      <Row>
        <Cardd />
        <Cardd />
        <Cardd />
        <Cardd />
      </Row>
      <br />
      <Row>
        <Cardd />
        <Cardd />
        <Cardd />
        <Cardd />
      </Row>
    </Container>
  )
}

export default PizzaList
