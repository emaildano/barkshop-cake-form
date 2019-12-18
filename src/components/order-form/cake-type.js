import React, { useState } from "react"
import { createStore } from "redux"
import { FormGroup, Input, Label, Card, CardBody, CardHeader } from "reactstrap"

const CakeType = () => {
  const [state, setState] = useState({ cakeType: 0 })

  const handler = event => {
    setState({ cakeType: event.target.value })
  }

  const cakeTypes = [
    { title: "4 Inch", id: "4-inch" },
    { title: "6 Inch", id: "6-inch" },
    { title: "6 Inch Portrait", id: "6-inch-portrait" },
    { title: "4 Inch Kitty Cake", id: "4-inch-kitty" },
  ]

  console.log(state.cakeType)

  return (
    <Card className="mb-3">
      <CardHeader>Cake Type</CardHeader>
      <CardBody>
        <FormGroup>
          {cakeTypes.map(item => {
            return (
              <FormGroup check key={item.id}>
                <Label check>
                  <Input
                    type="radio"
                    name="type"
                    value={item.id}
                    checked={state.cakeType === item.id}
                    onChange={handler}
                  />{" "}
                  {item.title}
                </Label>
              </FormGroup>
            )
          })}
          {/* <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="type"
                checked={this.state.selectedOption === "option1"}
                onChange={this.handleOptionChange}
              />{" "}
              4 Inch
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="type"
                checked={this.state.selectedOption === "option2"}
                onChange={this.handleOptionChange}
              />{" "}
              6 Inch
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="type"
                checked={this.state.selectedOption === "option3"}
                onChange={this.handleOptionChange}
              />{" "}
              6 Inch Portrait
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="type"
                checked={this.state.selectedOption === "option3"}
                onChange={this.handleOptionChange}
              />{" "}
              4 Inch Kitty Cake
            </Label> */}
        </FormGroup>
      </CardBody>
    </Card>
  )
}

export default CakeType
