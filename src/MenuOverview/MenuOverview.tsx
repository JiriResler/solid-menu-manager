import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormattedMessage, useIntl } from "react-intl";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./MenuOverview.css";

/**
 * Displays existing menus
 */
const MenuOverview: React.FC = () => {
  return (
    <div
      className="position-relative"
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

      <Button className="position-absolute position-fixed bottom-0 end-0 mb-4 me-4 add-menu-round-button shadow">
        <img
          src="images/plus.svg"
          alt="Add menu icon"
          className="edit-profile-round-icon"
          style={{width: '36px'}}
        />
      </Button>
    </div>
  );
};

export default MenuOverview;
