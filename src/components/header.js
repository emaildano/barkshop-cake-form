import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from "reactstrap"

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Row>
        <Col className="text-center">
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </Col>
      </Row>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
