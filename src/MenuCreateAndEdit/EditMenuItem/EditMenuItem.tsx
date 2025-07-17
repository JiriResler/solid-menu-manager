import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import { FormattedMessage, useIntl } from "react-intl";
import Navbar from "react-bootstrap/Navbar";
import Select from "react-select";

/**
 * Displays controls for specifying menu item information.
 */
const EditMenuItem: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <div className="text-center mt-3">
        <img
          src="images/lasagna.png"
          alt="Lasagna"
          style={{ maxWidth: "500px", maxHeight: "200px", borderRadius: "4%" }}
        />
      </div>

      <Container fluid>
        <Row style={{ maxWidth: "700px", marginTop: "15px" }}>
          <Col xs={6}>
            <Stack style={{ width: "150px" }} gap={3}>
              <Form.Control value="Lasagna" />

              <Button variant="secondary">
                {intl.formatMessage({
                  id: "addImage",
                  defaultMessage: "Add image",
                })}
              </Button>
            </Stack>
          </Col>

          <Col xs={6}>
            <Stack gap={3} style={{ marginTop: "8px", maxWidth: "200px" }}>
              <Form.Switch
                reverse
                label={intl.formatMessage({
                  id: "visible",
                  defaultMessage: "Visible",
                })}
              />

              <Button
                variant="secondary"
                style={{ width: "150px", marginLeft: "30px", marginTop: "4px" }}
              >
                <FormattedMessage
                  id="removeImage"
                  defaultMessage="Remove image"
                />
              </Button>
            </Stack>
          </Col>
        </Row>

        <Form.Group
          as={Row}
          controlId="menuDescriptionTextInput"
          style={{ maxWidth: "560px", marginTop: "20px" }}
        >
          <Form.Label column xs="3">
            <FormattedMessage
              id="menuDescription"
              defaultMessage="Description"
            />
          </Form.Label>
          <Col xs="9">
            <Form.Control />
          </Col>
        </Form.Group>
      </Container>

      <hr />

      <Container>
        <Stack gap={3}>
          <Row className="align-items-center">
            <Col xs={4}>
              <FormattedMessage id="allergens" defaultMessage="Allergens" />
            </Col>

            <Col xs={8}>
              <Select
                isMulti
                aria-label="Allergen select"
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    minHeight: "42px",
                  }),
                }}
              />
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col xs={4}>
              <FormattedMessage
                id="suitableForDiets"
                defaultMessage="Suitable for diets"
              />
            </Col>

            <Col xs={8}>
              <Select
                isMulti
                aria-label="Diet select"
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    minHeight: "42px",
                  }),
                }}
              />
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col xs={4}>
              <FormattedMessage id="ingredients" defaultMessage="Ingredients" />
            </Col>

            <Col xs={8}>
              <Select
                isMulti
                aria-label="Ingredient select"
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    minHeight: "42px",
                  }),
                }}
              />
            </Col>
          </Row>

          <Form.Group as={Row} controlId="servingSizeInput">
            <Form.Label column xs="4">
              <FormattedMessage
                id="servingSize"
                defaultMessage="Serving size"
              />
            </Form.Label>

            <Col xs="3">
              <Form.Control />
            </Col>

            <Col className="mt-1">g</Col>
          </Form.Group>

          <Form.Group as={Row} controlId="calorieInput">
            <Form.Label column xs="4">
              <FormattedMessage
                id="calories"
                defaultMessage="Calories"
              />
            </Form.Label>

            <Col xs="3">
              <Form.Control />
            </Col>

            <Col className="mt-1">kcal</Col>
          </Form.Group>

          <Row className="align-items-center">
            <Col xs={4}>
              <FormattedMessage id="nationalCuisines" defaultMessage="National cuisines" />
            </Col>

            <Col xs={8}>
              <Select
                isMulti
                aria-label="National cuisine select"
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    minHeight: "42px",
                  }),
                }}
              />
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col xs={4}>
              <FormattedMessage id="cookingMethods" defaultMessage="Preparation methods" />
            </Col>

            <Col xs={8}>
              <Select
                isMulti
                aria-label="Preparation method select"
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    minHeight: "42px",
                  }),
                }}
              />
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col xs={4}>
              <FormattedMessage id="spicinessLevel" defaultMessage="Spiciness level" />
            </Col>

            <Col xs={8}>
              <Select
                aria-label="Spiciness level select"
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    minHeight: "42px",
                  }),
                }}
              />
            </Col>
          </Row>
        </Stack>
      </Container>

      <Navbar sticky="bottom">
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

export default EditMenuItem;
