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

/**
 * Loads and displays existing menus found in a Solid Pod.
 */
const MenuOverview: React.FC = () => {
  const intl = useIntl();

  const [selectedLocationIndex, setSelectedLocationIndex] = useState(1);

  const brandDataQuery = useQuery({
    queryKey: ["getMenuDataFromSolidPod"],
    queryFn: fetchMenuData,
  });

  /**
   * Retrieves existing menu information.
   */
  async function fetchMenuData() {
    const mockedBrand: Brand = {
      name: "GreenFork",
      logo: "https://example.com/logos/greenfork-logo.png",
      slogan: "Fresh. Local. Conscious.",
      outlets: [
        {
          name: "GreenFork Amsterdam",
          address: "Prinsengracht 267, 1016 GV Amsterdam, Netherlands",
          openingHours: "Mon–Sun 09:00–21:00",
          menus: [
            {
              title: "Day Menu",
              availability: "09:00–17:00",
              description:
                "Fresh vegetarian and vegan options crafted with organic ingredients.",
              visibility: true,
              currency: "EUR",
              categories: [
                {
                  title: "Bowls",
                  menuItems: [
                    {
                      title: "Mediterranean Quinoa Bowl",
                      description:
                        "Quinoa with roasted vegetables, chickpeas, olives, and tahini dressing.",
                      visibility: true,
                      price: 9.5,
                      image:
                        "https://example.com/images/mediterranean-bowl.jpg",
                      allergens: ["sesame"],
                      suitableForDiets: ["vegan", "vegetarian"],
                      ingredients: [
                        "quinoa",
                        "zucchini",
                        "eggplant",
                        "chickpeas",
                        "olives",
                        "tahini",
                      ],
                      servingSize: 350,
                      calories: 620,
                      nationalCuisines: ["Mediterranean"],
                      preparationMethods: ["roasted", "cold-assembled"],
                      spicinessLevel: "Not at all",
                    },
                  ],
                },
                {
                  title: "Wraps",
                  menuItems: [
                    {
                      title: "Falafel Wrap",
                      description:
                        "Homemade falafel with cucumber, tomato, pickled onion, and hummus in a spinach wrap.",
                      visibility: true,
                      price: 7.8,
                      image: "https://example.com/images/falafel-wrap.jpg",
                      allergens: ["gluten", "sesame"],
                      suitableForDiets: ["vegetarian"],
                      ingredients: [
                        "falafel",
                        "tomato",
                        "cucumber",
                        "hummus",
                        "spinach wrap",
                      ],
                      servingSize: 280,
                      calories: 540,
                      nationalCuisines: ["Middle Eastern"],
                      preparationMethods: ["fried", "wrapped"],
                      spicinessLevel: "Mild",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "GreenFork Copenhagen",
          address: "Nørrebrogade 56, 2200 København N, Denmark",
          openingHours: "Tue–Sun 10:00–20:00",
          menus: [
            {
              title: "Evening Menu",
              availability: "17:00–20:00",
              description:
                "Nordic-inspired plant-forward dishes for conscious diners.",
              visibility: true,
              currency: "EUR",
              categories: [
                {
                  title: "Plates",
                  menuItems: [
                    {
                      title: "Roasted Root Vegetable Plate",
                      description:
                        "Carrots, beets, and parsnips with dill oil and oat yogurt.",
                      visibility: true,
                      price: 11.2,
                      image: "https://example.com/images/root-plate.jpg",
                      allergens: [],
                      suitableForDiets: ["vegan", "vegetarian", "gluten-free"],
                      ingredients: [
                        "carrots",
                        "beets",
                        "parsnips",
                        "dill oil",
                        "oat yogurt",
                      ],
                      servingSize: 320,
                      calories: 510,
                      nationalCuisines: ["Nordic"],
                      preparationMethods: ["roasted"],
                      spicinessLevel: "Not at all",
                    },
                  ],
                },
                {
                  title: "Soups",
                  menuItems: [
                    {
                      title: "Creamy Celeriac Soup",
                      description:
                        "Silky celeriac and potato soup topped with herb oil and pumpkin seeds.",
                      visibility: true,
                      price: 6.5,
                      image: "https://example.com/images/celeriac-soup.jpg",
                      allergens: [],
                      suitableForDiets: ["vegan", "vegetarian", "gluten-free"],
                      ingredients: [
                        "celeriac",
                        "potato",
                        "herb oil",
                        "pumpkin seeds",
                      ],
                      servingSize: 300,
                      calories: 430,
                      nationalCuisines: ["Nordic"],
                      preparationMethods: ["blended", "boiled"],
                      spicinessLevel: "Not at all",
                    },
                  ],
                },
              ],
            },
            {
              title: "Evening Menu",
              availability: "17:00–20:00",
              description:
                "Nordic-inspired plant-forward dishes for conscious diners.",
              visibility: true,
              currency: "EUR",
              categories: [
                {
                  title: "Plates",
                  menuItems: [
                    {
                      title: "Roasted Root Vegetable Plate",
                      description:
                        "Carrots, beets, and parsnips with dill oil and oat yogurt.",
                      visibility: true,
                      price: 11.2,
                      image: "https://example.com/images/root-plate.jpg",
                      allergens: [],
                      suitableForDiets: ["vegan", "vegetarian", "gluten-free"],
                      ingredients: [
                        "carrots",
                        "beets",
                        "parsnips",
                        "dill oil",
                        "oat yogurt",
                      ],
                      servingSize: 320,
                      calories: 510,
                      nationalCuisines: ["Nordic"],
                      preparationMethods: ["roasted"],
                      spicinessLevel: "Not at all",
                    },
                  ],
                },
                {
                  title: "Soups",
                  menuItems: [
                    {
                      title: "Creamy Celeriac Soup",
                      description:
                        "Silky celeriac and potato soup topped with herb oil and pumpkin seeds.",
                      visibility: true,
                      price: 6.5,
                      image: "https://example.com/images/celeriac-soup.jpg",
                      allergens: [],
                      suitableForDiets: ["vegan", "vegetarian", "gluten-free"],
                      ingredients: [
                        "celeriac",
                        "potato",
                        "herb oil",
                        "pumpkin seeds",
                      ],
                      servingSize: 300,
                      calories: 430,
                      nationalCuisines: ["Nordic"],
                      preparationMethods: ["blended", "boiled"],
                      spicinessLevel: "Not at all",
                    },
                  ],
                },
              ],
            },
            {
              title: "Evening Menu",
              availability: "17:00–20:00",
              description:
                "Nordic-inspired plant-forward dishes for conscious diners.",
              visibility: true,
              currency: "EUR",
              categories: [
                {
                  title: "Plates",
                  menuItems: [
                    {
                      title: "Roasted Root Vegetable Plate",
                      description:
                        "Carrots, beets, and parsnips with dill oil and oat yogurt.",
                      visibility: true,
                      price: 11.2,
                      image: "https://example.com/images/root-plate.jpg",
                      allergens: [],
                      suitableForDiets: ["vegan", "vegetarian", "gluten-free"],
                      ingredients: [
                        "carrots",
                        "beets",
                        "parsnips",
                        "dill oil",
                        "oat yogurt",
                      ],
                      servingSize: 320,
                      calories: 510,
                      nationalCuisines: ["Nordic"],
                      preparationMethods: ["roasted"],
                      spicinessLevel: "Not at all",
                    },
                  ],
                },
                {
                  title: "Soups",
                  menuItems: [
                    {
                      title: "Creamy Celeriac Soup",
                      description:
                        "Silky celeriac and potato soup topped with herb oil and pumpkin seeds.",
                      visibility: true,
                      price: 6.5,
                      image: "https://example.com/images/celeriac-soup.jpg",
                      allergens: [],
                      suitableForDiets: ["vegan", "vegetarian", "gluten-free"],
                      ingredients: [
                        "celeriac",
                        "potato",
                        "herb oil",
                        "pumpkin seeds",
                      ],
                      servingSize: 300,
                      calories: 430,
                      nationalCuisines: ["Nordic"],
                      preparationMethods: ["blended", "boiled"],
                      spicinessLevel: "Not at all",
                    },
                  ],
                },
              ],
            },
            {
              title: "Evening Menu",
              availability: "17:00–20:00",
              description:
                "Nordic-inspired plant-forward dishes for conscious diners.",
              visibility: true,
              currency: "EUR",
              categories: [
                {
                  title: "Plates",
                  menuItems: [
                    {
                      title: "Roasted Root Vegetable Plate",
                      description:
                        "Carrots, beets, and parsnips with dill oil and oat yogurt.",
                      visibility: true,
                      price: 11.2,
                      image: "https://example.com/images/root-plate.jpg",
                      allergens: [],
                      suitableForDiets: ["vegan", "vegetarian", "gluten-free"],
                      ingredients: [
                        "carrots",
                        "beets",
                        "parsnips",
                        "dill oil",
                        "oat yogurt",
                      ],
                      servingSize: 320,
                      calories: 510,
                      nationalCuisines: ["Nordic"],
                      preparationMethods: ["roasted"],
                      spicinessLevel: "Not at all",
                    },
                  ],
                },
                {
                  title: "Soups",
                  menuItems: [
                    {
                      title: "Creamy Celeriac Soup",
                      description:
                        "Silky celeriac and potato soup topped with herb oil and pumpkin seeds.",
                      visibility: true,
                      price: 6.5,
                      image: "https://example.com/images/celeriac-soup.jpg",
                      allergens: [],
                      suitableForDiets: ["vegan", "vegetarian", "gluten-free"],
                      ingredients: [
                        "celeriac",
                        "potato",
                        "herb oil",
                        "pumpkin seeds",
                      ],
                      servingSize: 300,
                      calories: 430,
                      nationalCuisines: ["Nordic"],
                      preparationMethods: ["blended", "boiled"],
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
        style={{ backgroundColor: "#7C4DFF", minHeight: '75px' }}
      >
        <Row className="w-100 align-items-center">
          <Col xs={9}>
            <span
              style={{ color: "white", fontSize: "x-large", fontWeight: 500, marginLeft: '20px' }}
            >
              {brandDataQuery.data?.outlets[selectedLocationIndex].name}
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
        {brandDataQuery.data?.outlets[selectedLocationIndex].menus.map(
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
