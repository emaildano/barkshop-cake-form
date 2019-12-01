import React from "react"
import {
  FormGroup,
  Input,
  Label,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap"

const FlavorType = () => {
  return (
    <Card className="mb-3">
      <CardHeader>Flavor</CardHeader>
      <CardBody>
        <FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="flavor" /> Peanut Butter & Banana
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="flavor" /> Bacon Flax
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="flavor" /> Cheesesteak
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="flavor" /> Bonito Flake
            </Label>
          </FormGroup>
        </FormGroup>
      </CardBody>
    </Card>
  )
}

export default FlavorType
