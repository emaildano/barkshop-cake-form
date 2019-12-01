import React from "react"
import { FormGroup, Input, Label, Card, CardBody, CardHeader } from "reactstrap"

const CakeType = () => {
  return (
    <Card className="mb-3">
      <CardHeader>Cake Type</CardHeader>
      <CardBody>
        <FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="type" /> 4 Inch
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="type" /> 6 Inch
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="type" /> 6 Inch Portrait
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="type" /> 4 Inch Kitty Cake
            </Label>
          </FormGroup>
        </FormGroup>
      </CardBody>
    </Card>
  )
}

export default CakeType
