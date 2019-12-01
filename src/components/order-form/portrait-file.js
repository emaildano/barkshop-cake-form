import React from "react"
import Dropzone from "react-dropzone"
import { Card, CardBody, CardHeader } from "reactstrap"

const PortraitFile = () => {
  return (
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
  )
}

export default PortraitFile
