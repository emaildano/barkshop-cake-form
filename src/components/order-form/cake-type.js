import React, { useState } from "react"
import { FormGroup, Input, Label, Card, CardBody, CardHeader } from "reactstrap"

const CakeType = () => {
  const [state, setState] = useState({ cakeType: '4-inch' })

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
                    name={item.id}
                    value={item.id}
                    checked={state.cakeType === item.id}
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

export default CakeType
