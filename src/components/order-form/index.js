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
import addDays from "date-fns/addDays"

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

const Condition = ({ when, is, children }) => {
  return (
    <Field name={when} subscription={{ value: true }}>
      {({ input: { value } }) => (value.indexOf(is) > -1 ? children : null)}
    </Field>
  )
}

const FormSection = ({ children, title }) => (
  <Card className="mb-3">
    {title ? <CardHeader>{title}</CardHeader> : null}
    <CardBody>
      <div>{children}</div>
    </CardBody>
  </Card>
)

const PetType = () => {
  const petTypes = [
    { title: "Dog", id: "dog" },
    { title: "Cat", id: "cat" },
  ]
  return (
    <FormSection title="Cat or Dog 🐶😸">
      {petTypes.map(item => {
        return (
          <Field name="petType">
            {props => (
              <FormGroup check key={item.id}>
                <Label check>
                  <Input
                    type="radio"
                    name="petType"
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
      <Error name="petType" />
    </FormSection>
  )
}

const PickupDate = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <FormSection title="Pickup Date 📅">
      <Field name="date">
        {props => (
          <DatePicker
            name="date"
            isClearable
            withPortal
            selected={startDate}
            id="date"
            onSelect={date => setStartDate(date)}
            onChange={date => setStartDate(date)}
            minDate={addDays(new Date(), 3)}
            placeholderText="Select a pickup date"
            className="form-control"
          />
        )}
      </Field>
      <Error name="date" />
    </FormSection>
  )
}

const Message = (values) => (
  <FormSection title="Cake Message ✏️">
    <Field name="message">
      {props => (
        <FormGroup>
          <Label for="message">Message {values.values.petType === 'cat' ? 6 : 12} characters max</Label>
          <Input
            maxLength={values.values.petType === 'cat' ? 6 : 12}
            type="textarea"
            name="message"
            id="message"
            onChange={props.input.onChange}
          />
          {console.log(values.values.petType)}
        </FormGroup>
      )}
    </Field>
    <Error name="message" />
  </FormSection>
)

const CakeTypeDog = () => {
  const cakeTypes = [
    { title: "4 Inch", id: "4-inch" },
    { title: "6 Inch", id: "6-inch" },
    { title: "6 Inch Portrait", id: "6-inch-portrait" },
  ]
  return (
    <Condition when="petType" is="dog">
      <FormSection title="Dog Cake Options 🎂">
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
    </Condition>
  )
}

const CakeTypeCat = () => {
  const cakeTypes = [{ title: "4 Inch", id: "4-inch-cat-cake" }]
  return (
    <Condition when="petType" is="cat">
      <FormSection title="Cat Cake Options 🎂">
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
    </Condition>
  )
}

const Portrait = () => (
  <Condition when="cakeType" is={["6-inch-portrait"]}>
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
  ]
  return (
    <Condition when="cakeType" isNot={["4-inch-cat-cake"]}>
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
    </Condition>
  )
}

const CakeTheme = () => {
  const cakeThemes = [
    { title: "Birthday Theme (Balloons & Sprinkes)", id: "birthday" },
    { title: "Classic Dog (Paw Prints & Bones)", id: "classic" },
    { title: "Create your own!", id: "custom" },
  ]
  return (
    <Condition when="petType" is="dog">
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
        <Error name="themeType" />
      </FormSection>
    </Condition>
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
            mutators={{
              catCake: (args, state, utils) => {
                utils.changeValue(state, "flavorType", () => "bonito")
              },
            }}
            onSubmit={onSubmit}
            initialValues={{}}
            validate={values => {
              const errors = {}
              if (!values.petType) {
                errors.petType = <Alert color="warning">Required</Alert>
              }
              if (!values.date) {
                errors.date = <Alert color="warning">Required</Alert>
              }
              if (!values.cakeType) {
                errors.cakeType = <Alert color="warning">Required</Alert>
              }
              if (!values.flavorType) {
                errors.flavorType = <Alert color="warning">Required</Alert>
              }
              if (!values.themeType) {
                errors.themeType = <Alert color="warning">Required</Alert>
              }
              return errors
            }}
          >
            {({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <PetType />
                <PickupDate />
                <CakeTypeDog />
                <CakeTypeCat />
                <Portrait />
                <CakeFlavor />
                <CakeTheme />
                <Message values={values} />
                <Submit submitting={submitting} />
                <pre className="bg-light p-5 my-5">{JSON.stringify(values, 0, 2)}</pre>
              </form>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  </>
)

export default OrderForm
