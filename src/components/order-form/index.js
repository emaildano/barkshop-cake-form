import React from "react"
import {
  Container,
  Row,
  Col,
  Form,
} from "reactstrap"
import PickupDate from "./pickup-date"
import CakeType from "./cake-type"
import PortraitFile from "./portrait-file"
import FlavorType from "./flavor-type"
import CakeTheme from "./cake-theme"
import CakeMessage from "./cake-message"
import SubmitOrderForm from "./submit-order-form"

const OrderForm = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="8">
          <Form>
            <PickupDate />
            <CakeType />
            <PortraitFile />
            <FlavorType />
            <CakeTheme />
            <CakeMessage />
            <SubmitOrderForm />
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default OrderForm
