import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import { FormattedMessage } from "react-intl";

/**
 * Enables the user to specify location information.
 */
const EditLocation: React.FC = () => {
  return (
    <>
      <Container fluid>
        <Stack gap={3} className="mt-3">
          <Form.Control value="Location" style={{ width: "150px" }} />

          <Form.Group as={Row} controlId="locationAddressTextInput">
            <Form.Label column xs="4">
              <FormattedMessage id="locationAddress" defaultMessage="Address" />
            </Form.Label>

            <Col xs="8">
              <Form.Control />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="openingHoursTextInput">
            <Form.Label column xs="4">
              <FormattedMessage
                id="openingHours"
                defaultMessage="Opening hours"
              />
            </Form.Label>

            <Col xs="8">
              <Form.Control />
            </Col>
          </Form.Group>
        </Stack>
      </Container>
    </>
  );
};

export default EditLocation;
