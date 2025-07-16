import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormattedMessage, useIntl } from "react-intl";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./MenuOverview.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Stack from 'react-bootstrap/Stack'

/**
 * Displays existing menus
 */
const MenuOverview: React.FC = () => {
  const intl = useIntl();

  return (
    <div
      style={{ height: "100dvh", backgroundColor: "#FAFAFA" }}
    >
      <Container fluid>
        <Row
          className="sticky-top align-items-center"
          style={{ backgroundColor: "#7C4DFF", height: "86px" }}
        >
          <Col className="ms-3" xs={8}>
            <span
              style={{ color: "white", fontSize: "x-large", fontWeight: 500 }}
            >
              <FormattedMessage
                id="menuOverviewHeading"
                defaultMessage="Menu overview"
              />
            </span>
          </Col>

          <Col className="text-end">
            <button
              style={{ background: "none", border: "none" }}
              aria-label="Open offcanvas"
            >
              <img
                src="images/list.svg"
                alt="Hamburger icon"
                style={{ width: "40px" }}
              />
            </button>
          </Col>
        </Row>
      </Container>

      <Stack gap={3} className="ps-3 pe-3 mt-3">
        <Card style={{ maxWidth: "470px", height: "160px" }}>
          <Card.Body>
            <Row>
              <Col xs={9}>
                <div style={{ fontSize: "large", fontWeight: 700 }}>
                  A la Carte Menu
                </div>

                <div className="mt-2">
                  <img
                    src="images/calendar-week.svg"
                    alt="Calendar icon"
                    style={{ width: "22px" }}
                  />
                  <span className="text-muted ms-3" style={{ fontWeight: 500 }}>
                    Monday - Friday
                  </span>
                </div>

                <Button variant="secondary" className="mt-4">
                  <FormattedMessage id="editMenu" defaultMessage="Edit" />
                </Button>
              </Col>

              <Col xs={3} className="text-end">
                <Form.Switch
                  reverse
                  label={intl.formatMessage({
                    id: "visible",
                    defaultMessage: "Visible",
                  })}
                />
                <Button
                  variant="secondary"
                  style={{ marginTop: "43pt", marginRight: "4pt" }}
                >
                  {intl.formatMessage({
                    id: "scheduleMenu",
                    defaultMessage: "Schedule",
                  })}
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card style={{ maxWidth: "470px", height: "160px" }}>
          <Card.Body>
            <Row>
              <Col xs={9}>
                <div style={{ fontSize: "large", fontWeight: 700 }}>
                  Weekend Menu
                </div>

                <div className="mt-2">
                  <img
                    src="images/calendar-week.svg"
                    alt="Calendar icon"
                    style={{ width: "22px" }}
                  />
                  <span className="text-muted ms-3" style={{ fontWeight: 500 }}>
                    Saturday, Sunday
                  </span>
                </div>

                <Button variant="secondary" className="mt-4">
                  <FormattedMessage id="editMenu" defaultMessage="Edit" />
                </Button>
              </Col>

              <Col xs={3} className="text-end">
                <Form.Switch
                  reverse
                  label={intl.formatMessage({
                    id: "visible",
                    defaultMessage: "Visible",
                  })}
                />
                <Button
                  variant="secondary"
                  style={{ marginTop: "43pt", marginRight: "4pt" }}
                >
                  {intl.formatMessage({
                    id: "scheduleMenu",
                    defaultMessage: "Schedule",
                  })}
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card style={{ maxWidth: "470px", height: "160px" }}>
          <Card.Body>
            <Row>
              <Col xs={9}>
                <div style={{ fontSize: "large", fontWeight: 700 }}>
                  Lunch Menu
                </div>

                <div className="mt-2">
                  <img
                    src="images/calendar-week.svg"
                    alt="Calendar icon"
                    style={{ width: "22px" }}
                  />
                  <span className="text-muted ms-3" style={{ fontWeight: 500 }}>
                    Daily, 11:00 AM - 3:00 PM
                  </span>
                </div>

                <Button variant="secondary" className="mt-4">
                  <FormattedMessage id="editMenu" defaultMessage="Edit" />
                </Button>
              </Col>

              <Col xs={3} className="text-end">
                <Form.Switch
                  reverse
                  label={intl.formatMessage({
                    id: "visible",
                    defaultMessage: "Visible",
                  })}
                />
                <Button
                  variant="secondary"
                  style={{ marginTop: "43pt", marginRight: "4pt" }}
                >
                  {intl.formatMessage({
                    id: "scheduleMenu",
                    defaultMessage: "Schedule",
                  })}
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Stack>

      <Button className="position-absolute position-fixed bottom-0 end-0 mb-4 me-4 add-menu-round-button shadow">
        <img
          src="images/plus.svg"
          alt="Add menu icon"
          className="edit-profile-round-icon"
          style={{ width: "36px" }}
        />
      </Button>
    </div>
  );
};

export default MenuOverview;
