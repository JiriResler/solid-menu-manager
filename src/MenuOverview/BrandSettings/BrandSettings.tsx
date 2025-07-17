import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import { FormattedMessage } from "react-intl";
import type { Brand } from "../menuOverviewTypes";

type BrandSettingsProps = {
  brand: Brand | undefined;
};

/**
 * Allows the user to configure their brand settings.
 */
const BrandSettings: React.FC<BrandSettingsProps> = ({ brand }) => {
  return (
    <>
      <div className="text-center mt-3">
        <img
          src={
            brand?.logo !== ""
              ? brand?.logo
              : "images/menu-item-default-picture.svg"
          }
          alt="Brand logo"
          style={{ maxWidth: "300px", maxHeight: "125px", borderRadius: "4%" }}
        />
      </div>

      <Container fluid style={{ maxWidth: "700px", marginTop: "20px" }}>
        <Stack gap={3}>
          <Row>
            <Col xs={5}>
              <Form.Control value={brand?.name} />
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
              <Form.Control value={brand?.slogan} />
            </Col>
          </Form.Group>
        </Stack>
      </Container>
    </>
  );
};

export default BrandSettings;
