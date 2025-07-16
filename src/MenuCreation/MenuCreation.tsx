import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import { FormattedMessage, useIntl } from "react-intl";
import Navbar from "react-bootstrap/Navbar";

/**
 * Displays the menu creation screen with controls to specify menu information.
 */
const MenuCreation: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Container fluid>
        <Row style={{ maxWidth: "700px", marginTop: "15px" }}>
          <Col xs={6}>
            <Stack style={{ width: "150px" }} gap={3}>
              <div style={{ fontSize: "x-large", fontWeight: 700 }}>
                Lunch Menu
              </div>

              <Button variant="secondary">
                {intl.formatMessage({
                  id: "scheduleMenu",
                  defaultMessage: "Schedule",
                })}
              </Button>

              <Button variant="secondary">
                {intl.formatMessage({
                  id: "addCategory",
                  defaultMessage: "Add category",
                })}
              </Button>
            </Stack>
          </Col>

          <Col xs={6}>
            <Stack gap={3} style={{ marginTop: "10px", maxWidth: "200px" }}>
              <Form.Switch
                reverse
                label={intl.formatMessage({
                  id: "visible",
                  defaultMessage: "Visible",
                })}
              />

              <Form.Group as={Row} controlId="menuCurrencyTextInput">
                <Form.Label column xs="6" className="text-end">
                  <FormattedMessage id="currency" defaultMessage="Currency" />
                </Form.Label>

                <Col xs="6">
                  <Form.Select
                    style={{ width: "70px" }}
                    aria-label="Currency select"
                  >
                    <option value="1">€</option>
                    <option value="2">$</option>
                    <option value="3">¥</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Button
                variant="secondary"
                style={{ width: "150px", marginLeft: "30px" }}
              >
                <FormattedMessage id="shareMenu" defaultMessage="Share" />
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
            <Form.Control></Form.Control>
          </Col>
        </Form.Group>
      </Container>

      <hr />

      <Container fluid>
        <Row style={{ maxWidth: "700px" }}>
          <Col xs={4}>
            <div
              style={{ fontSize: "large", fontWeight: "500", marginTop: "4px" }}
            >
              Main Courses
            </div>
          </Col>

          <Col xs={8}>
            <Stack direction="horizontal" gap={2}>
              <Button variant="secondary" className="ms-auto">
                <FormattedMessage id="addMenuItem" defaultMessage="Add item" />
              </Button>

              <button
                style={{ background: "none", border: "none" }}
                aria-label="Move category up"
              >
                <img
                  src="images/arrow-up.svg"
                  alt="Arrow up"
                  style={{ width: "30px" }}
                />
              </button>

              <button
                style={{ background: "none", border: "none" }}
                aria-label="Move category down"
              >
                <img
                  src="images/arrow-down.svg"
                  alt="Arrow down"
                  style={{ width: "30px" }}
                />
              </button>

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
            </Stack>
          </Col>
        </Row>

        <Row style={{ maxWidth: "700px" }} className="align-items-center mt-2">
          <Col xs={4}>
            <div style={{ marginLeft: "12px" }}>Carbonara</div>
          </Col>

          <Col xs={8}>
            <Stack direction="horizontal" gap={2}>
              <Button variant="secondary" className="ms-auto">
                <FormattedMessage id="editMenuItem" defaultMessage="Edit" />
              </Button>

              <button
                style={{ background: "none", border: "none" }}
                aria-label="Move menu item up"
              >
                <img
                  src="images/arrow-up.svg"
                  alt="Arrow up"
                  style={{ width: "30px" }}
                />
              </button>

              <button
                style={{ background: "none", border: "none" }}
                aria-label="Move menu item down"
              >
                <img
                  src="images/arrow-down.svg"
                  alt="Arrow down"
                  style={{ width: "30px" }}
                />
              </button>

              <button
                style={{
                  background: "none",
                  border: "none",
                  marginRight: "38px",
                }}
                aria-label="Delete menu item"
              >
                <img
                  src="images/trash.svg"
                  alt="Trash"
                  style={{ width: "30px" }}
                />
              </button>
            </Stack>
          </Col>
        </Row>
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

export default MenuCreation;
