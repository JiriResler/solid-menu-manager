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
import type { Brand, Menu } from "./menuOverviewTypes";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import MenuCreateAndEdit from "../MenuCreateAndEdit/MenuCreateAndEdit";

/**
 * Loads and displays existing menus found in a Solid Pod.
 */
const MenuOverview: React.FC = () => {
  const intl = useIntl();

  const [menuIsBeingEdited, setMenuIsBeingEdited] = useState(true);

  const [indexSelectedMenu, setIndexSelectedMenu] = useState(0);

  const [indexSelectedLocation, setIndexSelectedLocation] = useState(0);

  const brandDataQuery = useQuery({
    queryKey: ["getMenuDataFromSolidPod"],
    queryFn: fetchMenuData,
  });

  /**
   * Retrieves existing menu information.
   */
  async function fetchMenuData() {
    const mockedBrand: Brand = {
      iri: "https://example.com/brand/greenfork",
      name: "GreenFork",
      logo: "https://example.com/logos/greenfork-logo.png",
      slogan: "Fresh. Local. Conscious.",
      outlets: [
        {
          iri: "https://example.com/outlet/amsterdam",
          name: "GreenFork Amsterdam",
          address: "Prinsengracht 267, 1016 GV Amsterdam, Netherlands",
          openingHours: "Mon–Fri 09:00–17:00",
          menus: [
            {
              iri: "https://example.com/menu/weekday-lunch",
              title: "Weekday Lunch Menu",
              availability: "Mon–Fri 11:00–15:00",
              description:
                "Fresh, seasonal lunch options designed for balance and flavor.",
              visibility: true,
              currency: "EUR",
              categories: [
                {
                  iri: "https://example.com/menu-category/grain-bowls",
                  title: "Grain Bowls",
                  menuItems: [
                    {
                      iri: "https://example.com/menu-item/miso-quinoa-bowl",
                      title: "Miso Quinoa Bowl",
                      description:
                        "Warm quinoa, miso-roasted aubergine, edamame, carrots, sesame dressing.",
                      visibility: true,
                      price: 9.9,
                      image: "",
                      allergens: [
                        {
                          label: "Soy",
                          iri: "http://example.com/allergen/soy",
                        },
                        {
                          label: "Sesame",
                          iri: "http://example.com/allergen/sesame",
                        },
                      ],
                      suitableForDiets: [
                        {
                          label: "Vegan",
                          iri: "http://example.com/diet/vegan",
                        },
                      ],
                      ingredients: [
                        {
                          label: "Quinoa",
                          iri: "http://example.com/ingredient/quinoa",
                        },
                        {
                          label: "Aubergine",
                          iri: "http://example.com/ingredient/aubergine",
                        },
                        {
                          label: "Miso",
                          iri: "http://example.com/ingredient/miso",
                        },
                        {
                          label: "Carrot",
                          iri: "http://example.com/ingredient/carrot",
                        },
                        {
                          label: "Edamame",
                          iri: "http://example.com/ingredient/edamame",
                        },
                        {
                          label: "Sesame dressing",
                          iri: "http://example.com/ingredient/sesame-dressing",
                        },
                      ],
                      servingSize: 350,
                      calories: 610,
                      nationalCuisines: [
                        {
                          label: "Japanese",
                          iri: "http://example.com/cuisine/japanese",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Roasted",
                          iri: "http://example.com/prep/roasted",
                        },
                        {
                          label: "Cold-assembled",
                          iri: "http://example.com/prep/cold-assembled",
                        },
                      ],
                      spicinessLevel: "Mild",
                    },
                  ],
                },
                {
                  iri: "https://example.com/menu-category/soups",
                  title: "Soups",
                  menuItems: [
                    {
                      iri: "https://example.com/menu-item/tomato-basil-soup",
                      title: "Tomato Basil Soup",
                      description:
                        "Classic tomato soup with a hint of garlic and fresh basil.",
                      visibility: true,
                      price: 5.5,
                      image: "https://example.com/images/tomato-soup.jpg",
                      allergens: [],
                      suitableForDiets: [
                        {
                          label: "Vegetarian",
                          iri: "http://example.com/diet/vegetarian",
                        },
                        {
                          label: "Gluten-Free",
                          iri: "http://example.com/diet/gluten-free",
                        },
                      ],
                      ingredients: [
                        {
                          label: "Tomato",
                          iri: "http://example.com/ingredient/tomato",
                        },
                        {
                          label: "Garlic",
                          iri: "http://example.com/ingredient/garlic",
                        },
                        {
                          label: "Basil",
                          iri: "http://example.com/ingredient/basil",
                        },
                        {
                          label: "Vegetable broth",
                          iri: "http://example.com/ingredient/veg-broth",
                        },
                      ],
                      servingSize: 300,
                      calories: 270,
                      nationalCuisines: [
                        {
                          label: "Italian",
                          iri: "http://example.com/cuisine/italian",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Boiled",
                          iri: "http://example.com/prep/boiled",
                        },
                        {
                          label: "Blended",
                          iri: "http://example.com/prep/blended",
                        },
                      ],
                      spicinessLevel: "Not at all",
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

  if (menuIsBeingEdited) {
    return (
      <MenuCreateAndEdit
        brandData={brandDataQuery.data}
        indexSelectedMenu={indexSelectedMenu}
        indexSelectedLocation={indexSelectedLocation}
      />
    );
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
            src="images/geo-alt.svg"
            alt="Location settings"
            className="offcanvas-item-button-icon position-absolute"
          />

          <span className="ms-5">
            <FormattedMessage
              id="switchLocation"
              defaultMessage="Switch location"
            />
          </span>
        </button>

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

      <Navbar
        sticky="top"
        style={{ backgroundColor: "#7C4DFF", minHeight: "75px" }}
      >
        <Row className="w-100 align-items-center">
          <Col xs={9}>
            <span
              style={{
                color: "white",
                fontSize: "x-large",
                fontWeight: 500,
                marginLeft: "20px",
              }}
            >
              {brandDataQuery.data?.outlets[indexSelectedLocation].name}
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
      </Navbar>

      <Stack gap={3} className="ps-3 pe-3 mt-3">
        {brandDataQuery.data?.outlets[indexSelectedLocation].menus.map(
          (menu: Menu) => {
            return (
              <Card style={{ maxWidth: "470px" }}>
                <Card.Body>
                  <Container>
                    <Stack gap={3}>
                      <Row>
                        <Col xs={7}>
                          <div style={{ fontWeight: 700 }}>{menu.title}</div>
                        </Col>

                        <Col>
                          <Form.Switch
                            reverse
                            label={intl.formatMessage({
                              id: "visible",
                              defaultMessage: "Visible",
                            })}
                            checked={menu.visibility}
                          />
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <div>
                            <img
                              src="images/calendar-week.svg"
                              alt="Calendar icon"
                              style={{ width: "20px" }}
                            />
                            <span
                              className="text-muted ms-2"
                              style={{ fontWeight: 500 }}
                            >
                              {menu.availability}
                            </span>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <Button variant="secondary">
                            <FormattedMessage
                              id="editMenu"
                              defaultMessage="Edit"
                            />
                          </Button>
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
                    </Stack>
                  </Container>
                </Card.Body>
              </Card>
            );
          }
        )}
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
