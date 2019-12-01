import React from "react"
import {
  FormGroup,
  Input,
  Label,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap"

const CakeTheme = () => {
  return (
    <Card className="mb-3">
      <CardHeader>Cake Theme</CardHeader>
      <CardBody>
        <FormGroup>
          <FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="flavor" /> Birthday Theme (Balloons &
                Sprinkes)
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="flavor" /> Classic Dog (Paw Prints &
                Bones)
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="flavor" /> Create your own!
              </Label>
            </FormGroup>
          </FormGroup>
        </FormGroup>
      </CardBody>
    </Card>
  )
}

export default CakeTheme
