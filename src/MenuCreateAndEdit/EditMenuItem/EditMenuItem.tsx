import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import { FormattedMessage, useIntl } from "react-intl";
import Navbar from "react-bootstrap/Navbar";
import Select from "react-select";
import type { Menu } from "../../MenuOverview/menuOverviewTypes";

type EditMenuItemProps = {
  menuEdited: Menu | undefined;
  indexEditedCategory: number;
  indexEditedMenuItem: number;
  setMenuItemIsBeingEdited: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * Displays controls for specifying menu item information.
 */
const EditMenuItem: React.FC<EditMenuItemProps> = ({
  menuEdited,
  indexEditedMenuItem,
  indexEditedCategory,
  setMenuItemIsBeingEdited,
}) => {
  const intl = useIntl();

  const menuItemEdited =
    menuEdited?.categories[indexEditedCategory].menuItems[indexEditedMenuItem];

  return (
    <>
      <div className="text-center mt-3">
        <img
          src={
            menuItemEdited?.image !== ""
              ? menuItemEdited?.image
              : "images/menu-item-default-picture.svg"
          }
          alt="Menu item image"
          style={{ maxWidth: "500px", maxHeight: "200px", borderRadius: "4%" }}
        />
      </div>

      <Container fluid>
        <Stack gap={3} className="mt-3">
          <Row>
            <Col>
              <Form.Control value={menuItemEdited?.title} />
            </Col>

            <Col>
              <Form.Switch
                reverse
                label={intl.formatMessage({
                  id: "visible",
                  defaultMessage: "Visible",
                })}
                checked={menuItemEdited?.visibility}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="secondary">
                {intl.formatMessage({
                  id: "addImage",
                  defaultMessage: "Add image",
                })}
              </Button>
            </Col>

            <Col className="text-end">
              <Button
                variant="secondary"
                style={{ width: "150px", marginLeft: "30px", marginTop: "4px" }}
              >
                <FormattedMessage
                  id="removeImage"
                  defaultMessage="Remove image"
                />
              </Button>
            </Col>
          </Row>

          <Form.Group as={Row} controlId="menuDescriptionTextInput">
            <Form.Label column xs="3">
              <FormattedMessage
                id="menuDescription"
                defaultMessage="Description"
              />
            </Form.Label>

            <Col xs="9">
              <Form.Control value={menuItemEdited?.description} />
            </Col>
          </Form.Group>
        </Stack>
      </Container>

      <hr />

      <Container>
        <Stack gap={3}>
          <Row className="align-items-center">
            <Col xs={4}>
              <FormattedMessage id="allergens" defaultMessage="Allergens" />
            </Col>

            <Col xs={8}>
              <Select
                isMulti
                aria-label="Allergen select"
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    minHeight: "42px",
                  }),
                }}
                value={menuItemEdited?.allergens.map((allergen) => {
                  return { label: allergen.label, value: allergen.iri };
                })}
              />
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col xs={4}>
              <FormattedMessage
                id="suitableForDiets"
                defaultMessage="Suitable for diets"
              />
            </Col>

            <Col xs={8}>
              <Select
                isMulti
                aria-label="Diet select"
                value={menuItemEdited?.suitableForDiets.map((diet) => {
                  return { label: diet.label, value: diet.iri };
                })}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    minHeight: "42px",
                  }),
                }}
              />
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col xs={4}>
              <FormattedMessage id="ingredients" defaultMessage="Ingredients" />
            </Col>

            <Col xs={8}>
              <Select
                isMulti
                aria-label="Ingredient select"
                value={menuItemEdited?.ingredients.map((ingredient) => {
                  return { label: ingredient.label, value: ingredient.iri };
                })}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    minHeight: "42px",
                  }),
                }}
              />
            </Col>
          </Row>

          <Form.Group as={Row} controlId="servingSizeInput">
            <Form.Label column xs="4">
              <FormattedMessage
                id="servingSize"
                defaultMessage="Serving size"
              />
            </Form.Label>

            <Col xs="3">
              <Form.Control value={menuItemEdited?.servingSize} />
            </Col>

            <Col className="mt-1">g</Col>
          </Form.Group>

          <Form.Group as={Row} controlId="calorieInput">
            <Form.Label column xs="4">
              <FormattedMessage id="calories" defaultMessage="Calories" />
            </Form.Label>

            <Col xs="3">
              <Form.Control value={menuItemEdited?.calories} />
            </Col>

            <Col className="mt-1">kcal</Col>
          </Form.Group>

          <Row className="align-items-center">
            <Col xs={4}>
              <FormattedMessage
                id="nationalCuisines"
                defaultMessage="National cuisines"
              />
            </Col>

            <Col xs={8}>
              <Select
                isMulti
                aria-label="National cuisine select"
                value={menuItemEdited?.nationalCuisines.map(
                  (nationalCuisine) => {
                    return {
                      label: nationalCuisine.label,
                      value: nationalCuisine.iri,
                    };
                  }
                )}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    minHeight: "42px",
                  }),
                }}
              />
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col xs={4}>
              <FormattedMessage
                id="cookingMethods"
                defaultMessage="Preparation methods"
              />
            </Col>

            <Col xs={8}>
              <Select
                isMulti
                aria-label="Preparation method select"
                value={menuItemEdited?.preparationMethods.map(
                  (preparationMethod) => {
                    return {
                      label: preparationMethod.label,
                      value: preparationMethod.iri,
                    };
                  }
                )}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    minHeight: "42px",
                  }),
                }}
              />
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col xs={4}>
              <FormattedMessage
                id="spicinessLevel"
                defaultMessage="Spiciness level"
              />
            </Col>

            <Col xs={8}>
              <Select
                aria-label="Spiciness level select"
                value={{
                  label: menuItemEdited?.spicinessLevel,
                  value: menuItemEdited?.spicinessLevel,
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
        </Stack>
      </Container>

      <Navbar fixed="bottom">
        <Container>
          <Button
            variant="secondary"
            onClick={() => {
              setMenuItemIsBeingEdited(false);
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

export default EditMenuItem;
