import React, { useState } from "react"
import { FormGroup, Input, Label, Card, CardBody, CardHeader } from "reactstrap"

const FlavorType = () => {
  const [state, setState] = useState({ flavorType: 'peanut-butter' })

  const handler = event => {
    setState({ flavorType: event.target.value })
  }

  const flavorTypes = [
    { title: "Peanut Butter & Banana", id: "peanut-butter" },
    { title: "Bacon Flax", id: "bacon" },
    { title: "Cheesesteak", id: "cheesesteak" },
    { title: "Bonito Flake", id: "bonito" },
  ]

  console.log(state.flavorType)

  return (
    <Card className="mb-3">
      <CardHeader>Cake Type</CardHeader>
      <CardBody>
        <FormGroup>
          {flavorTypes.map(item => {
            return (
              <FormGroup check key={item.id}>
                <Label check>
                  <Input
                    type="radio"
                    name={item.id}
                    value={item.id}
                    checked={state.flavorType === item.id}
                    onChange={handler}
                  />{" "}
                  {item.title}
                </Label>
              </FormGroup>
            )
          })}
        </FormGroup>
      </CardBody>
    </Card>
  )
}

export default FlavorType
