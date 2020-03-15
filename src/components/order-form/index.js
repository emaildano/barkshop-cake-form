import React, { useState } from "react"
import { Form, Field } from "react-final-form"
import Dropzone from "react-dropzone"
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Label,
  Input,
  FormGroup,
  Button,
  Alert,
} from "reactstrap"
import DatePicker from "react-datepicker"
import subDays from "date-fns/subDays"

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const Error = ({ name }) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { error, touched } }) =>
      error && touched ? <span>{error}</span> : null
    }
  </Field>
)

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

const FormSection = ({ children, title }) => (
  <Card className="mb-3">
    {title ? <CardHeader>{title}</CardHeader> : null}
    <CardBody>
      <div>{children}</div>
    </CardBody>
  </Card>
)

const PickupDate = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <FormSection title="Pickup Date 📅">
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
    </FormSection>
  )
}

const Message = () => (
  <FormSection title="Cake Message ✏️">
    <div>
      <label for="message">Message</label>
    </div>
    <Field
      id="message"
      name="message"
      component="textarea"
      type="textarea"
      placeholder=""
    />
    <Error name="message" />
  </FormSection>
)

const CakeType = () => {
  const cakeTypes = [
    { title: "4 Inch", id: "4-inch" },
    { title: "6 Inch", id: "6-inch" },
    { title: "6 Inch Portrait", id: "6-inch-portrait" },
    { title: "4 Inch Kitty Cake", id: "4-inch-kitty" },
  ]
  return (
    <FormSection title="Type 🎂">
      {cakeTypes.map(item => {
        return (
          <Field name="cakeType">
            {props => (
              <FormGroup check key={item.id}>
                <Label check>
                  <Input
                    type="radio"
                    name="cakeType"
                    value={item.id}
                    onChange={props.input.onChange}
                  />{" "}
                  {item.title}
                </Label>
              </FormGroup>
            )}
          </Field>
        )
      })}
      <Error name="cakeType" />
    </FormSection>
  )
}

const Portrait = () => (
  <Condition when="cakeType" is="6-inch-portrait">
    <FormSection title="Portrait Photo 🐶">
      <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <Button>Upload Photo</Button>
            </div>
          </section>
        )}
      </Dropzone>
      <Error name="cakeType" />
    </FormSection>
  </Condition>
)

const CakeFlavor = () => {
  const cakeFlavors = [
    { title: "Peanut Butter & Banana", id: "peanut-butter" },
    { title: "Bacon Flax", id: "bacon" },
    { title: "Cheesesteak", id: "cheesesteak" },
    { title: "Bonito Flake", id: "bonito" },
  ]
  return (
    <FormSection title="Flavor 🥓">
      {cakeFlavors.map(item => {
        return (
          <Field name="flavorType">
            {props => (
              <FormGroup check key={item.id}>
                <Label check>
                  <Input
                    type="radio"
                    name="flavorType"
                    value={item.id}
                    onChange={props.input.onChange}
                  />{" "}
                  {item.title}
                </Label>
              </FormGroup>
            )}
          </Field>
        )
      })}
      <Error name="flavorType" />
    </FormSection>
  )
}

const CakeTheme = () => {
  const cakeThemes = [
    { title: "Birthday Theme (Balloons & Sprinkes)", id: "birthday" },
    { title: "Classic Dog (Paw Prints & Bones)", id: "classic" },
    { title: "Create your own!", id: "custom" },
  ]
  return (
    <FormSection title="Theme 🎈">
      {cakeThemes.map(item => {
        return (
          <Field name="themeType">
            {props => (
              <FormGroup check key={item.id}>
                <Label check>
                  <Input
                    type="radio"
                    name="themeType"
                    value={item.id}
                    onChange={props.input.onChange}
                  />{" "}
                  {item.title}
                </Label>
              </FormGroup>
            )}
          </Field>
        )
      })}
    </FormSection>
  )
}

const Submit = props => (
  <Button type="submit" disabled={props.submitting}>
    Submit
  </Button>
)

const OrderForm = () => (
  <>
    <Container>
      <Row className="justify-content-center">
        <Col md="8">
          <Form
            onSubmit={onSubmit}
            initialValues={{}}
            validate={values => {
              const errors = {}
              if (!values.cakeType) {
                errors.cakeType = <Alert color="warning">Required</Alert>
              }
              if (!values.flavorType) {
                errors.flavorType = <Alert color="warning">Required</Alert>
              }
              return errors
            }}
          >
            {({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <PickupDate />
                <CakeType />
                <Portrait />
                <CakeFlavor />
                <CakeTheme />
                <Message />
                <Submit submitting={submitting} />
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </form>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  </>
)

export default OrderForm
