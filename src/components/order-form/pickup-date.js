import React, { useState } from "react"
import DatePicker from 'react-datepicker'
import subDays from "date-fns/subDays"
import {
  FormGroup,
  Label,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap"

const PickupDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Card className="mb-3">
      <CardHeader>Select Pickup Date</CardHeader>
      <CardBody>
        <FormGroup>
          <Label for="date">Date</Label>
          <DatePicker
            name="date"
            selected={startDate}
            isClearable
            withPortal
            onChange={date => setStartDate(date)}
            excludeDates={[new Date(), subDays(new Date(), 1)]}
            placeholderText="Select a date other than today or yesterday"
            className="form-control"
          />
        </FormGroup>
      </CardBody>
    </Card>
  )
}

export default PickupDate
