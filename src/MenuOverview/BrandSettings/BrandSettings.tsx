import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { FormattedMessage } from "react-intl";

/**
 * Allows the user to configure their brand settings.
 */
const BrandSettings: React.FC = () => {
  return (
    <>
      <div className="text-center mt-3">
        <img
          src="images/lasagna.png"
          alt="Lasagna"
          style={{ maxWidth: "300px", maxHeight: "125px", borderRadius: "4%" }}
        />
      </div>

      <Container fluid style={{ maxWidth: "700px", marginTop: "20px" }}>
        <Stack gap={3}>
          <Row>
            <Col xs={5}>
              <Form.Control value="Brand" />
            </Col>

            <Col xs={4}>
              <Button variant="secondary">
                <FormattedMessage id="addLogo" defaultMessage="Add logo" />
              </Button>
            </Col>

            <Col xs={3}>
              <Button variant="secondary">
                <FormattedMessage id="remove" defaultMessage="Remove" />
              </Button>
            </Col>
          </Row>

          <Form.Group as={Row} controlId="brandSloganTextInput">
            <Form.Label column xs="4">
              Slogan
            </Form.Label>

            <Col xs="8">
              <Form.Control />
            </Col>
          </Form.Group>

          <Row className="align-items-center">
            <Col>
              <div style={{ fontSize: "large", fontWeight: 500 }}>
                <FormattedMessage id="locations" defaultMessage="Locations" />
              </div>
            </Col>

            <Col className="text-end">
              <Button variant="secondary">
                <FormattedMessage
                  id="addLocation"
                  defaultMessage="Add location"
                />
              </Button>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col xs={6}>
              <Form.Control value="Name" />
            </Col>

            <Col xs={3}>
              <Button variant="secondary">
                <FormattedMessage id="editLocation" defaultMessage="Edit" />
              </Button>
            </Col>

            <Col xs={3}>
              <button
                style={{ background: "none", border: "none" }}
                aria-label="Delete category"
              >
                <img
                  src="images/trash.svg"
                  alt="Trash"
                  style={{ width: "30px" }}
                />
              </button>
            </Col>
          </Row>
        </Stack>
      </Container>

      <Navbar fixed="bottom">
        <Container>
          <Button variant="secondary">
            <FormattedMessage id="cancel" defaultMessage="Cancel" />
          </Button>
          <Navbar.Collapse className="justify-content-end">
            <Button>
              <FormattedMessage id="save" defaultMessage="Save" />
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default BrandSettings;
