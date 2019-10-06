import React from "react"
import Dropzone from "react-dropzone"

import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap"

const OrderForm = () => {
  return (
    <Form>
      <Card className="mb-3">
        <CardHeader>Pickup Date</CardHeader>
        <CardBody>
          <FormGroup>
            <Input
              type="date"
              name="date"
              id="date"
              placeholder="date placeholder"
            />
          </FormGroup>
        </CardBody>
      </Card>
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
      <Card className="mb-3">
        <CardHeader>Portrait Photo</CardHeader>
        <CardBody>
          <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Upload portrait photo</p>
                </div>
              </section>
            )}
          </Dropzone>
        </CardBody>
      </Card>
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
      <Card className="mb-3">
        <CardHeader>Theme</CardHeader>
        <CardBody>
          <FormGroup>
            <FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="flavor" /> Birthday Theme (Balloons
                  & Sprinkes)
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
      <Card className="mb-3">
        <CardHeader>Cake Text</CardHeader>
        <CardBody>
          <Input type="textarea" name="text" id="cakeText" />
        </CardBody>
      </Card>
      <Button>Submit</Button>
    </Form>
  )
}

export default OrderForm
