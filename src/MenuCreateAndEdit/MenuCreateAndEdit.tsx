import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import { FormattedMessage, useIntl } from "react-intl";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import type { Brand } from "../MenuOverview/menuOverviewTypes";
import { useState } from "react";
import EditMenuItem from "./EditMenuItem/EditMenuItem";

type MenuCreateAndEditProps = {
  brandData: Brand | undefined;
  indexEditedMenu: number;
  indexEditedLocation: number;
  setMenuIsBeingEdited: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * Displays the menu creation screen with controls to specify menu information.
 */
const MenuCreateAndEdit: React.FC<MenuCreateAndEditProps> = ({
  brandData,
  indexEditedMenu,
  indexEditedLocation,
  setMenuIsBeingEdited,
}) => {
  const MenuCreationScreenContent: React.FC = () => {
    const intl = useIntl();

    const menuEdited =
      brandData?.outlets[indexEditedLocation].menus[indexEditedMenu];

    const [menuItemIsBeingEdited, setMenuItemIsBeingEdited] = useState(false);

    const [indexEditedCategory, setIndexEditedCategory] = useState(0);

    const [indexEditedMenuItem, setIndexEditedMenuItem] = useState(0);

    if (menuItemIsBeingEdited) {
      return (
        <EditMenuItem
          menuEdited={menuEdited}
          indexEditedCategory={indexEditedCategory}
          indexEditedMenuItem={indexEditedMenuItem}
          setMenuItemIsBeingEdited={setMenuItemIsBeingEdited}
        />
      );
    }

    return (
      <>
        <Container fluid>
          <Stack gap={3} className="mt-3">
            <Row className="align-items-center">
              <Col>
                <Form.Control
                  style={{ maxWidth: "200px" }}
                  value={menuEdited?.title}
                />
              </Col>

              <Col>
                <Form.Switch
                  reverse
                  label={intl.formatMessage({
                    id: "visible",
                    defaultMessage: "Visible",
                  })}
                  checked={menuEdited?.visibility}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group as={Row} controlId="menuDescriptionTextInput">
                  <Form.Label column xs="3">
                    <FormattedMessage
                      id="menuDescription"
                      defaultMessage="Description"
                    />
                  </Form.Label>
                  <Col xs="9">
                    <Form.Control value={menuEdited?.description} />
                  </Col>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={7}>
                <Form.Group as={Row} controlId="menuCurrencyTextInput">
                  <Form.Label column xs="4">
                    <FormattedMessage id="currency" defaultMessage="Currency" />
                  </Form.Label>

                  <Col>
                    <Form.Select
                      style={{ width: "60px" }}
                      aria-label="Currency select"
                      value={menuEdited?.currency}
                    >
                      <option value="1">€</option>
                      <option value="2">$</option>
                      <option value="3">¥</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Col>

              <Col className="text-end">
                <Button variant="secondary">
                  {intl.formatMessage({
                    id: "scheduleMenu",
                    defaultMessage: "Schedule",
                  })}
                </Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button variant="secondary">
                  {intl.formatMessage({
                    id: "addCategory",
                    defaultMessage: "Add category",
                  })}
                </Button>
              </Col>

              <Col className="text-end">
                <Button variant="secondary">
                  <FormattedMessage id="shareMenu" defaultMessage="Share" />
                </Button>
              </Col>
            </Row>
          </Stack>
        </Container>

        <hr />

        <Container fluid>
          {menuEdited?.categories.map((category, index) => {
            const categoryIndex = index;

            return (
              <div className="mb-4">
                <Row>
                  <Col xs={4}>
                    <Form.Control value={category.title} />
                  </Col>

                  <Col xs={8}>
                    <Stack direction="horizontal" gap={2}>
                      <Button variant="secondary" className="ms-auto">
                        <FormattedMessage
                          id="addMenuItem"
                          defaultMessage="Add item"
                        />
                      </Button>

                      <button
                        style={{ background: "none", border: "none" }}
                        aria-label="Move category up"
                      >
                        <img
                          src="images/arrow-up.svg"
                          alt="Arrow up"
                          style={{ width: "25px" }}
                        />
                      </button>

                      <button
                        style={{ background: "none", border: "none" }}
                        aria-label="Move category down"
                      >
                        <img
                          src="images/arrow-down.svg"
                          alt="Arrow down"
                          style={{ width: "25px" }}
                        />
                      </button>

                      <button
                        style={{ background: "none", border: "none" }}
                        aria-label="Delete category"
                      >
                        <img
                          src="images/trash.svg"
                          alt="Trash"
                          style={{ width: "25px" }}
                        />
                      </button>
                    </Stack>
                  </Col>
                </Row>

                {category.menuItems.map((menuItem, index) => {
                  const menuItemIndex = index;

                  return (
                    <Row className="align-items-center mt-2">
                      <Col xs={4}>
                        <Form.Group
                          as={Row}
                          controlId="menuDescriptionTextInput"
                        >
                          <Form.Label column xs="2">
                            {menuItemIndex + 1}.
                          </Form.Label>

                          <Col xs="9">
                            <Form.Control value={menuItem.title} />
                          </Col>
                        </Form.Group>
                      </Col>

                      <Col xs={8}>
                        <Stack direction="horizontal" gap={2}>
                          <Button
                            variant="secondary"
                            className="ms-auto"
                            onClick={() => {
                              setIndexEditedCategory(categoryIndex);
                              setIndexEditedMenuItem(menuItemIndex);
                              setMenuItemIsBeingEdited(true);
                            }}
                          >
                            <FormattedMessage
                              id="editMenuItem"
                              defaultMessage="Edit"
                            />
                          </Button>

                          <button
                            style={{ background: "none", border: "none" }}
                            aria-label="Move menu item up"
                          >
                            <img
                              src="images/arrow-up.svg"
                              alt="Arrow up"
                              style={{ width: "25px" }}
                            />
                          </button>

                          <button
                            style={{ background: "none", border: "none" }}
                            aria-label="Move menu item down"
                          >
                            <img
                              src="images/arrow-down.svg"
                              alt="Arrow down"
                              style={{ width: "25px" }}
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
                              style={{ width: "25px" }}
                            />
                          </button>
                        </Stack>
                      </Col>
                    </Row>
                  );
                })}
              </div>
            );
          })}
        </Container>

        <Navbar fixed="bottom">
          <Container>
            <Button
              variant="secondary"
              onClick={() => {
                setMenuIsBeingEdited(false);
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

  return (
    <>
      <div
        className="d-none d-lg-flex"
        style={{ height: "100dvh", backgroundColor: "#FAFAFA" }}
      >
        <Card
          className="position-absolute top-50 start-50 translate-middle shadow-sm"
          style={{ width: "700px", height: "90dvh", overflowY: "auto" }}
        >
          <MenuCreationScreenContent />
        </Card>
      </div>

      <div className="d-lg-none">
        <MenuCreationScreenContent />
      </div>
    </>
  );
};

export default MenuCreateAndEdit;
