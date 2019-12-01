import React from "react"
import { FormGroup, Input, Label, Card, CardBody, CardHeader } from "reactstrap"

const CakeTheme = () => {
  return (
    <Card className="mb-3">
      <CardHeader>Cake Message</CardHeader>
      <CardBody>
        <FormGroup>
          <Label for="cake-message">Message</Label>
          <Input type="textarea" name="cake-message" id="cakeText" />
        </FormGroup>
      </CardBody>
    </Card>
  )
}

export default CakeTheme
