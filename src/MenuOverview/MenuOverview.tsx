import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormattedMessage, useIntl } from "react-intl";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./MenuOverview.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { useQuery } from "@tanstack/react-query";
import type { Brand } from "./menuOverviewTypes";
import Offcanvas from "react-bootstrap/Offcanvas";

/**
 * Loads and displays existing menus found in a Solid Pod.
 */
const MenuOverview: React.FC = () => {
  const intl = useIntl();

  const menuDataQuery = useQuery({
    queryKey: ["getMenuDataFromSolidPod"],
    queryFn: fetchMenuData,
  });

  /**
   * Retrieves existing menu information.
   */
  async function fetchMenuData() {
    const mockedBrand: Brand = {
      logo: "https://example.com/logos/eurodeli.png",
      name: "EuroDeli",
      outlets: [
        {
          address: "Via Roma 12, 00185 Rome, Italy",
          openingHours: "Mon–Sun 11:30–22:30",
          menus: [
            {
              title: "Main Menu",
              availability: "All day",
              description:
                "Traditional European dishes made with fresh local ingredients.",
              visibility: true,
              currency: "EUR",
              categories: [
                {
                  title: "Hot Dishes",
                  menuItems: [
                    {
                      title: "Lasagna Bolognese",
                      description:
                        "Layers of fresh pasta with meat ragù, béchamel, and parmesan cheese.",
                      visibility: true,
                      price: 12.5,
                      image: "https://example.com/images/lasagna.jpg",
                      allergens: ["gluten", "dairy"],
                      suitableForDiets: ["omnivore"],
                      ingredients: [
                        "pasta",
                        "meat ragù",
                        "béchamel",
                        "parmesan",
                      ],
                      servingSize: 300,
                      calories: 780,
                      nationalCuisines: ["Italian"],
                      preparationMethods: ["baked"],
                      spicinessLevel: "Not at all",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          address: "Karl-Liebknecht-Straße 9, 10178 Berlin, Germany",
          openingHours: "Mon–Sun 10:00–21:00",
          menus: [
            {
              title: "Main Menu",
              availability: "All day",
              description:
                "Homestyle meals inspired by traditional European cuisine.",
              visibility: true,
              currency: "EUR",
              categories: [
                {
                  title: "Vegetarian",
                  menuItems: [
                    {
                      title: "Potato Pancakes with Applesauce",
                      description:
                        "Crispy fried potato pancakes served with sweet applesauce.",
                      visibility: true,
                      price: 7.2,
                      image: "https://example.com/images/kartoffelpuffer.jpg",
                      allergens: ["egg"],
                      suitableForDiets: ["vegetarian"],
                      ingredients: ["potatoes", "egg", "oil", "applesauce"],
                      servingSize: 200,
                      calories: 520,
                      nationalCuisines: ["German"],
                      preparationMethods: ["fried"],
                      spicinessLevel: "Not at all",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          address: "Carrer de Mallorca, 45, 08029 Barcelona, Spain",
          openingHours: "Mon–Sun 12:00–23:00",
          menus: [
            {
              title: "Main Menu",
              availability: "All day",
              description:
                "Fresh Mediterranean tapas and classic Spanish dishes.",
              visibility: true,
              currency: "EUR",
              categories: [
                {
                  title: "Tapas",
                  menuItems: [
                    {
                      title: "Patatas Bravas",
                      description:
                        "Fried potatoes served with spicy brava sauce and aioli.",
                      visibility: true,
                      price: 5.5,
                      image: "https://example.com/images/patatas-bravas.jpg",
                      allergens: ["egg", "garlic"],
                      suitableForDiets: ["vegetarian"],
                      ingredients: ["potatoes", "brava sauce", "aioli"],
                      servingSize: 180,
                      calories: 430,
                      nationalCuisines: ["Spanish"],
                      preparationMethods: ["fried"],
                      spicinessLevel: "Medium",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    return mockedBrand;
  }

  return (
    <div style={{ height: "100dvh", backgroundColor: "#FAFAFA" }}>
      <Offcanvas show={false} placement="end" style={{ maxWidth: "200px" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <FormattedMessage id="settings" defaultMessage="Settings" />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <button className="offcanvas-item-button text-start position-relative">
          <img
            src="images/gear.svg"
            alt="Settings icon"
            className="offcanvas-item-button-icon position-absolute"
          />

          <span className="ms-5">
            <FormattedMessage
              id="brandSettings"
              defaultMessage="Brand settings"
            />
          </span>
        </button>

        <button className="offcanvas-item-button text-start position-relative">
          <img
            src="images/box-arrow-right.svg"
            alt="Sign out icon"
            className="offcanvas-item-button-icon position-absolute"
          />

          <span className="ms-5 text-danger">
            <FormattedMessage id="signOut" defaultMessage="Sign out" />
          </span>
        </button>
      </Offcanvas>

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
