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
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import MenuCreateAndEdit from "../MenuCreateAndEdit/MenuCreateAndEdit";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import EditLocation from "./BrandSettings/EditLocation/EditLocation";
import BrandSettings from "./BrandSettings/BrandSettings";

/**
 * Loads and displays existing menus found in a Solid Pod.
 */
const MenuOverview: React.FC = () => {
  const intl = useIntl();

  const [menuIsBeingEdited, setMenuIsBeingEdited] = useState(false);

  const [indexEditedMenu, setIndexEditedMenu] = useState(0);

  const [showLocations, setShowLocations] = useState(false);

  const [locationIsBeingEdited, setLocationIsBeingEdited] = useState(false);

  const [indexCurrentLocation] = useState(0);

  const [indexEditedLocation, setIndexEditedLocation] = useState(0);

  const [brandIsBeingEdited, setBrandIsBeingEdited] = useState(false);

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const brandDataQuery = useQuery({
    queryKey: ["getMenuDataFromSolidPod"],
    queryFn: fetchMenuData,
  });

  /**
   * Retrieves existing menu information.
   */
  async function fetchMenuData() {
    const mockedBrand: Brand = {
      iri: "https://example.com/brand/farm-table",
      name: "Farm & Table",
      logo: "",
      slogan: "From local fields to your plate.",
      outlets: [
        {
          iri: "https://example.com/outlet/berlin-mitte",
          name: "Farm & Table – Berlin",
          address: "Friedrichstraße 120, 10117 Berlin, Germany",
          openingHours: "Mon–Sun 08:00–22:00",
          menus: [
            {
              iri: "https://example.com/menu/lunch",
              title: "Lunch Menu",
              availability: "Mon–Fri 11:00–15:00",
              description: "Fresh and balanced dishes to power your workday.",
              visibility: true,
              currency: "EUR",
              categories: [
                {
                  iri: "https://example.com/menu-category/soups",
                  title: "Soups",
                  menuItems: [
                    {
                      iri: "https://example.com/menu-item/tomato-soup",
                      title: "Roasted Tomato Soup",
                      description:
                        "Slow-roasted tomatoes with basil oil and toasted rye.",
                      visibility: true,
                      price: 6.5,
                      image: "",
                      allergens: [
                        {
                          label: "Gluten",
                          iri: "http://example.com/allergen/gluten",
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
                      ],
                      servingSize: 300,
                      calories: 280,
                      nationalCuisines: [
                        {
                          label: "Italian",
                          iri: "http://example.com/cuisine/italian",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Roasted",
                          iri: "http://example.com/prep/roasted",
                        },
                      ],
                      spicinessLevel: "Mild",
                    },
                  ],
                },
                {
                  iri: "https://example.com/menu-category/main-courses",
                  title: "Main Courses",
                  menuItems: [
                    {
                      iri: "https://example.com/menu-item/veggie-burger",
                      title: "Grilled Veggie Burger",
                      description:
                        "Black bean patty, avocado, and house-made pickles.",
                      visibility: true,
                      price: 10.5,
                      image: "",
                      allergens: [
                        {
                          label: "Gluten",
                          iri: "http://example.com/allergen/gluten",
                        },
                        {
                          label: "Soy",
                          iri: "http://example.com/allergen/soy",
                        },
                      ],
                      suitableForDiets: [
                        {
                          label: "Vegetarian",
                          iri: "http://example.com/diet/vegetarian",
                        },
                      ],
                      ingredients: [
                        {
                          label: "Black beans",
                          iri: "http://example.com/ingredient/black-beans",
                        },
                        {
                          label: "Avocado",
                          iri: "http://example.com/ingredient/avocado",
                        },
                        {
                          label: "Pickles",
                          iri: "http://example.com/ingredient/pickles",
                        },
                      ],
                      servingSize: 350,
                      calories: 620,
                      nationalCuisines: [
                        {
                          label: "American",
                          iri: "http://example.com/cuisine/american",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Grilled",
                          iri: "http://example.com/prep/grilled",
                        },
                      ],
                      spicinessLevel: "Medium",
                    },
                  ],
                },
              ],
            },
            {
              iri: "https://example.com/menu/dinner",
              title: "Dinner Menu",
              availability: "Tue–Sun 17:00–22:00",
              description:
                "Elegant dishes featuring locally sourced ingredients.",
              visibility: true,
              currency: "EUR",
              categories: [
                {
                  iri: "https://example.com/menu-category/starters",
                  title: "Starters",
                  menuItems: [
                    {
                      iri: "https://example.com/menu-item/beet-tartare",
                      title: "Beet Tartare",
                      description:
                        "Beets, capers, shallots, and horseradish cream.",
                      visibility: true,
                      price: 7.2,
                      image: "",
                      allergens: [
                        {
                          label: "Dairy",
                          iri: "http://example.com/allergen/dairy",
                        },
                      ],
                      suitableForDiets: [
                        {
                          label: "Vegetarian",
                          iri: "http://example.com/diet/vegetarian",
                        },
                      ],
                      ingredients: [
                        {
                          label: "Beetroot",
                          iri: "http://example.com/ingredient/beetroot",
                        },
                        {
                          label: "Shallots",
                          iri: "http://example.com/ingredient/shallots",
                        },
                        {
                          label: "Capers",
                          iri: "http://example.com/ingredient/capers",
                        },
                      ],
                      servingSize: 200,
                      calories: 320,
                      nationalCuisines: [
                        {
                          label: "French",
                          iri: "http://example.com/cuisine/french",
                        },
                      ],
                      preparationMethods: [
                        { label: "Raw", iri: "http://example.com/prep/raw" },
                      ],
                      spicinessLevel: "Not at all",
                    },
                  ],
                },
              ],
            },
            {
              iri: "https://example.com/menu/weekend-brunch",
              title: "Weekend Brunch",
              availability: "Sat–Sun 10:00–14:00",
              description: "Relax and refuel with our weekend brunch specials.",
              visibility: true,
              currency: "EUR",
              categories: [
                {
                  iri: "https://example.com/menu-category/breakfast-bowls",
                  title: "Breakfast Bowls",
                  menuItems: [
                    {
                      iri: "https://example.com/menu-item/granola-bowl",
                      title: "Berry Granola Bowl",
                      description:
                        "Crunchy granola with Greek yogurt and seasonal berries.",
                      visibility: true,
                      price: 6.8,
                      image: "",
                      allergens: [
                        {
                          label: "Dairy",
                          iri: "http://example.com/allergen/dairy",
                        },
                        {
                          label: "Nuts",
                          iri: "http://example.com/allergen/nuts",
                        },
                      ],
                      suitableForDiets: [
                        {
                          label: "Vegetarian",
                          iri: "http://example.com/diet/vegetarian",
                        },
                      ],
                      ingredients: [
                        {
                          label: "Yogurt",
                          iri: "http://example.com/ingredient/yogurt",
                        },
                        {
                          label: "Granola",
                          iri: "http://example.com/ingredient/granola",
                        },
                        {
                          label: "Berries",
                          iri: "http://example.com/ingredient/berries",
                        },
                      ],
                      servingSize: 280,
                      calories: 410,
                      nationalCuisines: [
                        {
                          label: "Continental",
                          iri: "http://example.com/cuisine/continental",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Chilled",
                          iri: "http://example.com/prep/chilled",
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
        {
          iri: "https://example.com/outlet/paris-le-marais",
          name: "Farm & Table – Le Marais",
          address: "Rue Vieille du Temple 45, 75004 Paris, France",
          openingHours: "Tue–Sun 09:00–23:00",
          menus: [
            {
              iri: "https://example.com/menu/dinner",
              title: "Dinner Menu",
              availability: "Tue–Sun 17:00–22:00",
              description:
                "Elegant dishes featuring locally sourced ingredients.",
              visibility: true,
              currency: "EUR",
              categories: [
                {
                  iri: "https://example.com/menu-category/starters",
                  title: "Starters",
                  menuItems: [
                    {
                      iri: "https://example.com/menu-item/beet-tartare",
                      title: "Beet Tartare",
                      description:
                        "Beets, capers, shallots, and horseradish cream.",
                      visibility: true,
                      price: 7.2,
                      image: "",
                      allergens: [
                        {
                          label: "Dairy",
                          iri: "http://example.com/allergen/dairy",
                        },
                      ],
                      suitableForDiets: [
                        {
                          label: "Vegetarian",
                          iri: "http://example.com/diet/vegetarian",
                        },
                      ],
                      ingredients: [
                        {
                          label: "Beetroot",
                          iri: "http://example.com/ingredient/beetroot",
                        },
                        {
                          label: "Shallots",
                          iri: "http://example.com/ingredient/shallots",
                        },
                        {
                          label: "Capers",
                          iri: "http://example.com/ingredient/capers",
                        },
                      ],
                      servingSize: 200,
                      calories: 320,
                      nationalCuisines: [
                        {
                          label: "French",
                          iri: "http://example.com/cuisine/french",
                        },
                      ],
                      preparationMethods: [
                        { label: "Raw", iri: "http://example.com/prep/raw" },
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
        indexEditedMenu={indexEditedMenu}
        indexEditedLocation={indexCurrentLocation}
        setMenuIsBeingEdited={setMenuIsBeingEdited}
      />
    );
  }

  return (
    <div style={{ height: "100dvh", backgroundColor: "#FAFAFA" }}>
      <Modal
        show={showLocations}
        onHide={() => {
          setShowLocations(false);
          setLocationIsBeingEdited(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FormattedMessage
              id="locationSettings"
              defaultMessage="Location settings"
            />
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {locationIsBeingEdited && (
            <EditLocation
              indexEditedLocation={indexEditedLocation}
              locations={brandDataQuery.data?.outlets}
              setLocationIsBeingEdited={setLocationIsBeingEdited}
            />
          )}

          {!locationIsBeingEdited && (
            <>
              <Row className="align-items-center">
                <Col xs={5}>
                  <FormattedMessage
                    id="currentLocation"
                    defaultMessage="Current location"
                  />
                </Col>

                <Col>
                  <Select
                    aria-label="Location select"
                    value={{
                      label:
                        brandDataQuery.data?.outlets[indexCurrentLocation].name,
                      value:
                        brandDataQuery.data?.outlets[indexCurrentLocation].name,
                    }}
                    styles={{
                      control: (baseStyles) => ({
                        ...baseStyles,
                        minHeight: "42px",
                      }),
                    }}
                  />
                </Col>
              </Row>

              <Row className="mt-3 align-items-center">
                <Col style={{ fontWeight: 700 }}>
                  <FormattedMessage
                    id="manageLocations"
                    defaultMessage="Manage locations"
                  />
                </Col>

                <Col className="text-end">
                  <Button variant="secondary">
                    {intl.formatMessage({
                      id: "add",
                      defaultMessage: "Add location",
                    })}
                  </Button>
                </Col>
              </Row>

              <Stack className="mt-3" gap={2}>
                {brandDataQuery.data?.outlets.map((outlet, index) => {
                  return (
                    <Row className="align-items-center">
                      <Col>
                        <Form.Control value={outlet.name} />
                      </Col>

                      <Col>
                        <Stack direction="horizontal" gap={2}>
                          <Button
                            variant="secondary"
                            className="ms-auto"
                            onClick={() => {
                              setLocationIsBeingEdited(true);
                              setIndexEditedLocation(index);
                            }}
                          >
                            <FormattedMessage id="edit" defaultMessage="Edit" />
                          </Button>

                          <button
                            style={{
                              background: "none",
                              border: "none",
                              paddingRight: "20px",
                            }}
                            aria-label="Delete location"
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
              </Stack>
            </>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={() => {
              setShowLocations(false);
              setLocationIsBeingEdited(false);
            }}
            variant="secondary"
          >
            <FormattedMessage id="cancel" defaultMessage="Cancel" />
          </Button>

          <Button variant="primary">
            <FormattedMessage id="save" defaultMessage="Save" />
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={brandIsBeingEdited}
        onHide={() => {
          setBrandIsBeingEdited(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FormattedMessage
              id="brandSettings"
              defaultMessage="Brand settings"
            />
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <BrandSettings brand={brandDataQuery.data} />
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={() => {
              setBrandIsBeingEdited(false);
            }}
            variant="secondary"
          >
            <FormattedMessage id="cancel" defaultMessage="Cancel" />
          </Button>

          <Button variant="primary">
            <FormattedMessage id="save" defaultMessage="Save" />
          </Button>
        </Modal.Footer>
      </Modal>

      <Offcanvas
        show={showOffcanvas}
        onHide={() => {
          setShowOffcanvas(false);
        }}
        placement="end"
        style={{ maxWidth: "200px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <FormattedMessage id="settings" defaultMessage="Settings" />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <button
          className="offcanvas-item-button text-start position-relative"
          onClick={() => {
            setShowOffcanvas(false);
            setShowLocations(true);
          }}
        >
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

        <button
          onClick={() => {
            setShowOffcanvas(false);
            setBrandIsBeingEdited(true);
          }}
          className="offcanvas-item-button text-start position-relative"
        >
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
              {brandDataQuery.data?.outlets[indexCurrentLocation].name}
            </span>
          </Col>

          <Col className="text-end">
            <button
              style={{ background: "none", border: "none" }}
              aria-label="Open offcanvas"
              onClick={() => {
                setShowOffcanvas(true);
              }}
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
        {brandDataQuery.data?.outlets[indexCurrentLocation].menus.map(
          (menu, index) => {
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
                          <Button
                            variant="secondary"
                            onClick={() => {
                              setIndexEditedMenu(index);
                              setMenuIsBeingEdited(true);
                            }}
                          >
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

      <Button
        className="position-absolute position-fixed bottom-0 end-0 mb-4 me-4 add-menu-round-button shadow"
        onClick={() => {
          setMenuIsBeingEdited(true);
        }}
      >
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
