import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import { FormattedMessage } from "react-intl";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import type { FoodEstablishmentOutlet } from "../../menuOverviewTypes";

type EditLocationProps = {
  locations: FoodEstablishmentOutlet[] | undefined;
  indexEditedLocation: number;
  setLocationIsBeingEdited: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * Enables the user to specify location information.
 */
const EditLocation: React.FC<EditLocationProps> = ({
  locations,
  indexEditedLocation,
  setLocationIsBeingEdited,
}) => {
  return (
    <>
      <Container fluid>
        <Stack gap={3} className="mt-3">
          <Form.Control
            value={
              locations !== undefined ? locations[indexEditedLocation].name : ""
            }
            style={{ width: "150px" }}
          />

          <Form.Group as={Row} controlId="locationAddressTextInput">
            <Form.Label column xs="4">
              <FormattedMessage id="locationAddress" defaultMessage="Address" />
            </Form.Label>

            <Col xs="8">
              <Form.Control
                value={
                  locations !== undefined
                    ? locations[indexEditedLocation].address
                    : ""
                }
              />
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
              <Form.Control
                value={
                  locations !== undefined
                    ? locations[indexEditedLocation].openingHours
                    : ""
                }
              />
            </Col>
          </Form.Group>
        </Stack>
      </Container>

      <Navbar sticky="bottom">
        <Container>
          <Button
            variant="secondary"
            onClick={() => {
              setLocationIsBeingEdited(false);
            }}
          >
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

export default EditLocation;
