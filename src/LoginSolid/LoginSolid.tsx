import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import { FormattedMessage, useIntl } from "react-intl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginSolid.css";

const providerNameAndUrls = {
  "Inrupt Pod Spaces": "https://login.inrupt.com/",
  "Data Pod": "https://datapod.igrant.io/",
  "solidcommunity.net": "https://solidcommunity.net/",
  "solidweb.org": "https://solidweb.org/",
  "redpencil.io": "https://solid.redpencil.io/",
};

/**
 * Displays the login screen
 */
const LoginSolid: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Card className="position-absolute top-50 start-50 translate-middle text-center pb-4 pt-3 ps-4 pe-4">
        <Card.Body>
          <Stack gap={3} style={{ width: "250px" }}>
            <span style={{ fontSize: "large", fontWeight: 500 }}>
              <FormattedMessage
                id="selectASolidProvider"
                defaultMessage="Select a Solid provider"
              />
            </span>

            <Form.Select style={{ borderColor: "#cccccc", height: "45px" }}>
              <option key="defaultOption" hidden>
                {intl.formatMessage({
                  id: "chooseSolidProvider",
                  defaultMessage: "Choose a Solid provider",
                })}
              </option>

              {Object.keys(providerNameAndUrls).map((opt) => {
                return <option key={opt}>{opt}</option>;
              })}
            </Form.Select>

            <FormattedMessage
              id="typeInProviderUrlHeading"
              defaultMessage="Or type in a provider URL"
            />

            <Form.Control
              type="text"
              placeholder={intl.formatMessage({
                id: "providerUrlPlaceholder",
                defaultMessage: "Place a provider URL",
              })}
              style={{ borderColor: "#cccccc", height: "45px" }}
            />

            <Button className="solid-button mt-2 w-100">
              <FormattedMessage
                id="redirectToProvider"
                defaultMessage="Redirect to provider"
              />
            </Button>
          </Stack>
        </Card.Body>
      </Card>

      <div className="position-absolute bottom-0 start-0 ms-3 mb-3">
        <Form.Select
          style={{borderColor: '#cccccc', height: '45px'}}
          tabIndex={1}
        >
          <option key="en">English</option>
          <option key="sk">Slovensky</option>
        </Form.Select>
      </div>
    </>
  );
};

export default LoginSolid;
