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
      name: "Terrace Restaurant",
      logo: "images/terrace-restaurant-logo.svg",
      slogan: "From local fields to your plate.",
      outlets: [
        {
          iri: "https://example.com/outlet/berlin-mitte",
          name: "Terrace Restaurant Berlin",
          address: "Friedrichstraße 120, 10117 Berlin, Germany",
          openingHours: "Mon-Sun 08:00-22:00",
          menus: [
            {
              iri: "https://example.com/menu/lunch",
              title: "Lunch Menu",
              availability: "Mon-Fri 11:00-15:00",
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
                      image: "images/roasted-tomato-soup.png",
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
                    {
                      iri: "https://example.com/menu-item/miso-soup",
                      title: "Miso Soup",
                      description:
                        "Classic Japanese broth with tofu, seaweed, and scallions.",
                      visibility: true,
                      price: 5.0,
                      image: "images/miso-soup.jpg",
                      allergens: [
                        {
                          label: "Soy",
                          iri: "http://example.com/allergen/soy",
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
                          label: "Miso",
                          iri: "http://example.com/ingredient/miso",
                        },
                        {
                          label: "Tofu",
                          iri: "http://example.com/ingredient/tofu",
                        },
                        {
                          label: "Seaweed",
                          iri: "http://example.com/ingredient/seaweed",
                        },
                      ],
                      servingSize: 250,
                      calories: 120,
                      nationalCuisines: [
                        {
                          label: "Japanese",
                          iri: "http://example.com/cuisine/japanese",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Simmered",
                          iri: "http://example.com/prep/simmered",
                        },
                      ],
                      spicinessLevel: "None",
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
                      image: "images/grilled-veggie-burger.png",
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
                    {
                      iri: "https://example.com/menu-item/chicken-quinoa-bowl",
                      title: "Chicken Quinoa Bowl",
                      description:
                        "Grilled chicken over quinoa, spinach, and hummus dressing.",
                      visibility: true,
                      price: 11.0,
                      image: "images/chicken-quinoa-bowl.jpg",
                      allergens: [],
                      suitableForDiets: [],
                      ingredients: [
                        {
                          label: "Chicken",
                          iri: "http://example.com/ingredient/chicken",
                        },
                        {
                          label: "Quinoa",
                          iri: "http://example.com/ingredient/quinoa",
                        },
                        {
                          label: "Spinach",
                          iri: "http://example.com/ingredient/spinach",
                        },
                      ],
                      servingSize: 400,
                      calories: 550,
                      nationalCuisines: [
                        {
                          label: "Mediterranean",
                          iri: "http://example.com/cuisine/mediterranean",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Grilled",
                          iri: "http://example.com/prep/grilled",
                        },
                      ],
                      spicinessLevel: "Mild",
                    },
                    {
                      iri: "https://example.com/menu-item/lentil-curry-bowl",
                      title: "Spiced Lentil Curry Bowl",
                      description:
                        "Slow-cooked red lentils in aromatic spices served with basmati rice and coriander.",
                      visibility: true,
                      price: 9.0,
                      image: "images/spiced-lentil-curry-bowl.jpg",
                      allergens: [],
                      suitableForDiets: [
                        {
                          label: "Vegan",
                          iri: "http://example.com/diet/vegan",
                        },
                      ],
                      ingredients: [
                        {
                          label: "Lentils",
                          iri: "http://example.com/ingredient/lentils",
                        },
                        {
                          label: "Coriander",
                          iri: "http://example.com/ingredient/coriander",
                        },
                        {
                          label: "Turmeric",
                          iri: "http://example.com/ingredient/turmeric",
                        },
                      ],
                      servingSize: 380,
                      calories: 490,
                      nationalCuisines: [
                        {
                          label: "Indian",
                          iri: "http://example.com/cuisine/indian",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Simmered",
                          iri: "http://example.com/prep/simmered",
                        },
                      ],
                      spicinessLevel: "Hot",
                    },
                    {
                      iri: "https://example.com/menu-item/salmon-teriyaki",
                      title: "Teriyaki Glazed Salmon",
                      description:
                        "Oven-roasted salmon glazed in teriyaki sauce with steamed broccoli and jasmine rice.",
                      visibility: true,
                      price: 13.5,
                      image: "images/teriyaki-glazed-salmon.jpg",
                      allergens: [
                        {
                          label: "Soy",
                          iri: "http://example.com/allergen/soy",
                        },
                        {
                          label: "Fish",
                          iri: "http://example.com/allergen/fish",
                        },
                      ],
                      suitableForDiets: [],
                      ingredients: [
                        {
                          label: "Salmon",
                          iri: "http://example.com/ingredient/salmon",
                        },
                        {
                          label: "Teriyaki sauce",
                          iri: "http://example.com/ingredient/teriyaki",
                        },
                        {
                          label: "Broccoli",
                          iri: "http://example.com/ingredient/broccoli",
                        },
                      ],
                      servingSize: 420,
                      calories: 670,
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
                          label: "Glazed",
                          iri: "http://example.com/prep/glazed",
                        },
                      ],
                      spicinessLevel: "None",
                    },
                  ],
                },
                {
                  iri: "https://example.com/menu-category/salads",
                  title: "Salads",
                  menuItems: [
                    {
                      iri: "https://example.com/menu-item/greek-salad",
                      title: "Greek Salad",
                      description:
                        "Crisp vegetables, feta cheese, olives, and oregano dressing.",
                      visibility: true,
                      price: 7.5,
                      image: "images/greek-salad.png",
                      allergens: [
                        {
                          label: "Milk",
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
                          label: "Feta",
                          iri: "http://example.com/ingredient/feta",
                        },
                        {
                          label: "Cucumber",
                          iri: "http://example.com/ingredient/cucumber",
                        },
                        {
                          label: "Tomato",
                          iri: "http://example.com/ingredient/tomato",
                        },
                        {
                          label: "Olives",
                          iri: "http://example.com/ingredient/olives",
                        },
                      ],
                      servingSize: 350,
                      calories: 320,
                      nationalCuisines: [
                        {
                          label: "Greek",
                          iri: "http://example.com/cuisine/greek",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Fresh",
                          iri: "http://example.com/prep/fresh",
                        },
                      ],
                      spicinessLevel: "None",
                    },
                    {
                      iri: "https://example.com/menu-item/quinoa-avocado-salad",
                      title: "Quinoa & Avocado Salad",
                      description:
                        "Protein-rich quinoa with avocado, cherry tomatoes, and lemon vinaigrette.",
                      visibility: true,
                      price: 8.0,
                      image: "images/quinoa-avocado-salad.jpg",
                      allergens: [],
                      suitableForDiets: [
                        {
                          label: "Vegan",
                          iri: "http://example.com/diet/vegan",
                        },
                        {
                          label: "Gluten-Free",
                          iri: "http://example.com/diet/gluten-free",
                        },
                      ],
                      ingredients: [
                        {
                          label: "Quinoa",
                          iri: "http://example.com/ingredient/quinoa",
                        },
                        {
                          label: "Avocado",
                          iri: "http://example.com/ingredient/avocado",
                        },
                        {
                          label: "Cherry tomatoes",
                          iri: "http://example.com/ingredient/cherry-tomatoes",
                        },
                        {
                          label: "Lemon juice",
                          iri: "http://example.com/ingredient/lemon-juice",
                        },
                      ],
                      servingSize: 360,
                      calories: 390,
                      nationalCuisines: [
                        {
                          label: "Modern European",
                          iri: "http://example.com/cuisine/modern-european",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Fresh",
                          iri: "http://example.com/prep/fresh",
                        },
                        {
                          label: "Tossed",
                          iri: "http://example.com/prep/tossed",
                        },
                      ],
                      spicinessLevel: "None",
                    },
                    {
                      iri: "https://example.com/menu-item/thai-beef-salad",
                      title: "Thai Beef Salad",
                      description:
                        "Sliced marinated beef on a bed of herbs, cucumber, and chili-lime dressing.",
                      visibility: true,
                      price: 9.5,
                      image: "images/thai-beef-salad.jpg",
                      allergens: [
                        {
                          label: "Soy",
                          iri: "http://example.com/allergen/soy",
                        },
                        {
                          label: "Fish",
                          iri: "http://example.com/allergen/fish",
                        },
                      ],
                      suitableForDiets: [],
                      ingredients: [
                        {
                          label: "Beef",
                          iri: "http://example.com/ingredient/beef",
                        },
                        {
                          label: "Mint",
                          iri: "http://example.com/ingredient/mint",
                        },
                        {
                          label: "Cucumber",
                          iri: "http://example.com/ingredient/cucumber",
                        },
                        {
                          label: "Chili",
                          iri: "http://example.com/ingredient/chili",
                        },
                      ],
                      servingSize: 370,
                      calories: 460,
                      nationalCuisines: [
                        {
                          label: "Thai",
                          iri: "http://example.com/cuisine/thai",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Grilled",
                          iri: "http://example.com/prep/grilled",
                        },
                        {
                          label: "Tossed",
                          iri: "http://example.com/prep/tossed",
                        },
                      ],
                      spicinessLevel: "Hot",
                    },
                  ],
                },
              ],
            },
            {
              iri: "https://example.com/menu/dinner",
              title: "Dinner Menu",
              availability: "Tue-Sun 17:00-22:00",
              description:
                "Elegant dishes featuring locally sourced ingredients.",
              visibility: true,
              currency: "EUR",
              categories: [
                {
                  iri: "https://example.com/menu-category/pasta",
                  title: "Pasta",
                  menuItems: [
                    {
                      iri: "https://example.com/menu-item/tagliatelle-ragu",
                      title: "Tagliatelle al Ragù",
                      description:
                        "Fresh tagliatelle with slow-cooked beef and pork ragù.",
                      visibility: true,
                      price: 13.0,
                      image: "images/tagliatelle-al-ragu.png",
                      allergens: [
                        {
                          label: "Gluten",
                          iri: "http://example.com/allergen/gluten",
                        },
                      ],
                      suitableForDiets: [],
                      ingredients: [
                        {
                          label: "Tagliatelle",
                          iri: "http://example.com/ingredient/tagliatelle",
                        },
                        {
                          label: "Beef",
                          iri: "http://example.com/ingredient/beef",
                        },
                        {
                          label: "Pork",
                          iri: "http://example.com/ingredient/pork",
                        },
                      ],
                      servingSize: 400,
                      calories: 720,
                      nationalCuisines: [
                        {
                          label: "Italian",
                          iri: "http://example.com/cuisine/italian",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Simmered",
                          iri: "http://example.com/prep/simmered",
                        },
                      ],
                      spicinessLevel: "Mild",
                    },
                    {
                      iri: "https://example.com/menu-item/mushroom-risotto",
                      title: "Porcini Mushroom Risotto",
                      description:
                        "Creamy carnaroli rice with porcini mushrooms and parmesan.",
                      visibility: true,
                      price: 12.5,
                      image: "images/porcini-mushroom-risotto.png",
                      allergens: [
                        {
                          label: "Milk",
                          iri: "http://example.com/allergen/milk",
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
                          label: "Porcini",
                          iri: "http://example.com/ingredient/porcini",
                        },
                        {
                          label: "Rice",
                          iri: "http://example.com/ingredient/carnaroli-rice",
                        },
                        {
                          label: "Parmesan",
                          iri: "http://example.com/ingredient/parmesan",
                        },
                      ],
                      servingSize: 380,
                      calories: 600,
                      nationalCuisines: [
                        {
                          label: "Italian",
                          iri: "http://example.com/cuisine/italian",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Simmered",
                          iri: "http://example.com/prep/simmered",
                        },
                      ],
                      spicinessLevel: "None",
                    },
                  ],
                },
                {
                  iri: "https://example.com/menu-category/mains",
                  title: "Mains",
                  menuItems: [
                    {
                      iri: "https://example.com/menu-item/lamb-rack",
                      title: "Herb-Crusted Lamb Rack",
                      description:
                        "Local lamb with rosemary crust, garlic mash, and red wine jus.",
                      visibility: true,
                      price: 19.5,
                      image: "images/herb-crusted-lamb-rack.jpg",
                      allergens: [],
                      suitableForDiets: [],
                      ingredients: [
                        {
                          label: "Lamb",
                          iri: "http://example.com/ingredient/lamb",
                        },
                        {
                          label: "Rosemary",
                          iri: "http://example.com/ingredient/rosemary",
                        },
                        {
                          label: "Garlic",
                          iri: "http://example.com/ingredient/garlic",
                        },
                      ],
                      servingSize: 450,
                      calories: 850,
                      nationalCuisines: [
                        {
                          label: "French",
                          iri: "http://example.com/cuisine/french",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Roasted",
                          iri: "http://example.com/prep/roasted",
                        },
                      ],
                      spicinessLevel: "None",
                    },
                    {
                      iri: "https://example.com/menu-item/seared-seabass",
                      title: "Seared Sea Bass",
                      description:
                        "Crispy sea bass with fennel purée and citrus glaze.",
                      visibility: true,
                      price: 17.0,
                      image: "images/seared-sea-bass.png",
                      allergens: [
                        {
                          label: "Fish",
                          iri: "http://example.com/allergen/fish",
                        },
                      ],
                      suitableForDiets: [],
                      ingredients: [
                        {
                          label: "Sea bass",
                          iri: "http://example.com/ingredient/seabass",
                        },
                        {
                          label: "Fennel",
                          iri: "http://example.com/ingredient/fennel",
                        },
                        {
                          label: "Lemon",
                          iri: "http://example.com/ingredient/lemon",
                        },
                      ],
                      servingSize: 400,
                      calories: 620,
                      nationalCuisines: [
                        {
                          label: "Mediterranean",
                          iri: "http://example.com/cuisine/mediterranean",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Seared",
                          iri: "http://example.com/prep/seared",
                        },
                      ],
                      spicinessLevel: "None",
                    },
                    {
                      iri: "https://example.com/menu-item/duck-confit",
                      title: "Duck Confit with Lentils",
                      description:
                        "Slow-cooked duck leg served over green lentils and caramelized shallots.",
                      visibility: true,
                      price: 18.5,
                      image: "images/duck-confit-with-lentils.jpg",
                      allergens: [],
                      suitableForDiets: [],
                      ingredients: [
                        {
                          label: "Duck leg",
                          iri: "http://example.com/ingredient/duck",
                        },
                        {
                          label: "Lentils",
                          iri: "http://example.com/ingredient/lentils",
                        },
                        {
                          label: "Shallots",
                          iri: "http://example.com/ingredient/shallots",
                        },
                      ],
                      servingSize: 430,
                      calories: 780,
                      nationalCuisines: [
                        {
                          label: "French",
                          iri: "http://example.com/cuisine/french",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Confit",
                          iri: "http://example.com/prep/confit",
                        },
                      ],
                      spicinessLevel: "None",
                    },
                    {
                      iri: "https://example.com/menu-item/stuffed-peppers",
                      title: "Stuffed Bell Peppers",
                      description:
                        "Roasted bell peppers filled with quinoa, chickpeas, and herbs.",
                      visibility: true,
                      price: 14.0,
                      image: "images/stuffed-bell-peppers.jpg",
                      allergens: [],
                      suitableForDiets: [
                        {
                          label: "Vegan",
                          iri: "http://example.com/diet/vegan",
                        },
                        {
                          label: "Gluten-Free",
                          iri: "http://example.com/diet/gluten-free",
                        },
                      ],
                      ingredients: [
                        {
                          label: "Bell peppers",
                          iri: "http://example.com/ingredient/bell-pepper",
                        },
                        {
                          label: "Quinoa",
                          iri: "http://example.com/ingredient/quinoa",
                        },
                        {
                          label: "Chickpeas",
                          iri: "http://example.com/ingredient/chickpeas",
                        },
                      ],
                      servingSize: 410,
                      calories: 540,
                      nationalCuisines: [
                        {
                          label: "Mediterranean",
                          iri: "http://example.com/cuisine/mediterranean",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Baked",
                          iri: "http://example.com/prep/baked",
                        },
                      ],
                      spicinessLevel: "Mild",
                    },
                  ],
                },

                {
                  iri: "https://example.com/menu-category/desserts",
                  title: "Desserts",
                  menuItems: [
                    {
                      iri: "https://example.com/menu-item/tiramisu",
                      title: "Classic Tiramisu",
                      description:
                        "Mascarpone cream, espresso-soaked ladyfingers, cocoa.",
                      visibility: true,
                      price: 6.5,
                      image: "images/classic-tiramisu.jpg",
                      allergens: [
                        {
                          label: "Milk",
                          iri: "http://example.com/allergen/milk",
                        },
                        {
                          label: "Eggs",
                          iri: "http://example.com/allergen/eggs",
                        },
                        {
                          label: "Gluten",
                          iri: "http://example.com/allergen/gluten",
                        },
                      ],
                      suitableForDiets: [],
                      ingredients: [
                        {
                          label: "Mascarpone",
                          iri: "http://example.com/ingredient/mascarpone",
                        },
                        {
                          label: "Espresso",
                          iri: "http://example.com/ingredient/espresso",
                        },
                        {
                          label: "Ladyfingers",
                          iri: "http://example.com/ingredient/ladyfingers",
                        },
                      ],
                      servingSize: 220,
                      calories: 510,
                      nationalCuisines: [
                        {
                          label: "Italian",
                          iri: "http://example.com/cuisine/italian",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Chilled",
                          iri: "http://example.com/prep/chilled",
                        },
                      ],
                      spicinessLevel: "None",
                    },
                    {
                      iri: "https://example.com/menu-item/poached-pears",
                      title: "Poached Pears in Red Wine",
                      description:
                        "Spiced red wine reduction with soft pear and orange zest.",
                      visibility: true,
                      price: 6.0,
                      image: "images/poached-pears-in-red-wine.jpg",
                      allergens: [],
                      suitableForDiets: [
                        {
                          label: "Vegan",
                          iri: "http://example.com/diet/vegan",
                        },
                      ],
                      ingredients: [
                        {
                          label: "Pear",
                          iri: "http://example.com/ingredient/pear",
                        },
                        {
                          label: "Red wine",
                          iri: "http://example.com/ingredient/red-wine",
                        },
                        {
                          label: "Cinnamon",
                          iri: "http://example.com/ingredient/cinnamon",
                        },
                      ],
                      servingSize: 200,
                      calories: 330,
                      nationalCuisines: [
                        {
                          label: "French",
                          iri: "http://example.com/cuisine/french",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Poached",
                          iri: "http://example.com/prep/poached",
                        },
                      ],
                      spicinessLevel: "None",
                    },
                  ],
                },
              ],
            },
            {
              iri: "https://example.com/menu/weekend-brunch",
              title: "Weekend Brunch",
              availability: "Sat-Sun 10:00-14:00",
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
                      image: "images/berry-granola-bowl.jpg",
                      allergens: [
                        {
                          label: "Milk",
                          iri: "http://example.com/allergen/milk",
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
                    {
                      iri: "https://example.com/menu-item/smoothie-bowl",
                      title: "Tropical Smoothie Bowl",
                      description:
                        "Banana, mango & coconut smoothie topped with kiwi, chia seeds, and toasted coconut flakes.",
                      visibility: true,
                      price: 7.2,
                      image: "images/tropical-smoothie-bowl.jpg",
                      allergens: [
                        {
                          label: "Nuts",
                          iri: "http://example.com/allergen/nuts",
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
                          label: "Banana",
                          iri: "http://example.com/ingredient/banana",
                        },
                        {
                          label: "Mango",
                          iri: "http://example.com/ingredient/mango",
                        },
                        {
                          label: "Coconut Milk",
                          iri: "http://example.com/ingredient/coconut-milk",
                        },
                        {
                          label: "Kiwi",
                          iri: "http://example.com/ingredient/kiwi",
                        },
                        {
                          label: "Chia Seeds",
                          iri: "http://example.com/ingredient/chia-seeds",
                        },
                      ],
                      servingSize: 300,
                      calories: 380,
                      nationalCuisines: [
                        {
                          label: "Fusion",
                          iri: "http://example.com/cuisine/fusion",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Blended",
                          iri: "http://example.com/prep/blended",
                        },
                      ],
                      spicinessLevel: "None",
                    },
                  ],
                },
                {
                  iri: "https://example.com/menu-category/eggs-and-toast",
                  title: "Eggs & Toast",
                  menuItems: [
                    {
                      iri: "https://example.com/menu-item/scrambled-eggs-toast",
                      title: "Scrambled Eggs on Rye",
                      description:
                        "Creamy scrambled eggs served over warm rye toast with chives and cracked pepper.",
                      visibility: true,
                      price: 7.5,
                      image: "images/scrambled-eggs-on-rye.jpg",
                      allergens: [
                        {
                          label: "Eggs",
                          iri: "http://example.com/allergen/eggs",
                        },
                        {
                          label: "Gluten",
                          iri: "http://example.com/allergen/gluten",
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
                          label: "Egg",
                          iri: "http://example.com/ingredient/egg",
                        },
                        {
                          label: "Rye Bread",
                          iri: "http://example.com/ingredient/rye-bread",
                        },
                        {
                          label: "Chives",
                          iri: "http://example.com/ingredient/chives",
                        },
                      ],
                      servingSize: 280,
                      calories: 460,
                      nationalCuisines: [
                        {
                          label: "Scandinavian",
                          iri: "http://example.com/cuisine/scandinavian",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Scrambled",
                          iri: "http://example.com/prep/scrambled",
                        },
                        {
                          label: "Toasted",
                          iri: "http://example.com/prep/toasted",
                        },
                      ],
                      spicinessLevel: "None",
                    },
                    {
                      iri: "https://example.com/menu-item/avocado-toast",
                      title: "Avocado Toast",
                      description:
                        "Sourdough toast with smashed avocado, chili flakes, and poached egg.",
                      visibility: true,
                      price: 8.0,
                      image: "images/avocado-toast.jpg",
                      allergens: [
                        {
                          label: "Eggs",
                          iri: "http://example.com/allergen/eggs",
                        },
                        {
                          label: "Gluten",
                          iri: "http://example.com/allergen/gluten",
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
                          label: "Avocado",
                          iri: "http://example.com/ingredient/avocado",
                        },
                        {
                          label: "Egg",
                          iri: "http://example.com/ingredient/egg",
                        },
                        {
                          label: "Sourdough Bread",
                          iri: "http://example.com/ingredient/sourdough",
                        },
                      ],
                      servingSize: 300,
                      calories: 500,
                      nationalCuisines: [
                        {
                          label: "Modern European",
                          iri: "http://example.com/cuisine/modern-european",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Toasted",
                          iri: "http://example.com/prep/toasted",
                        },
                      ],
                      spicinessLevel: "Mild",
                    },
                  ],
                },
                {
                  iri: "https://example.com/menu-category/sweet-treats",
                  title: "Sweet Treats",
                  menuItems: [
                    {
                      iri: "https://example.com/menu-item/pancakes-maple",
                      title: "Buttermilk Pancakes",
                      description:
                        "Fluffy pancakes with maple syrup and butter.",
                      visibility: true,
                      price: 7.5,
                      image: "images/buttermilk-pancakes.png",
                      allergens: [
                        {
                          label: "Gluten",
                          iri: "http://example.com/allergen/gluten",
                        },
                        {
                          label: "Milk",
                          iri: "http://example.com/allergen/milk",
                        },
                        {
                          label: "Eggs",
                          iri: "http://example.com/allergen/eggs",
                        },
                      ],
                      suitableForDiets: [],
                      ingredients: [
                        {
                          label: "Flour",
                          iri: "http://example.com/ingredient/flour",
                        },
                        {
                          label: "Maple Syrup",
                          iri: "http://example.com/ingredient/maple-syrup",
                        },
                        {
                          label: "Butter",
                          iri: "http://example.com/ingredient/butter",
                        },
                      ],
                      servingSize: 320,
                      calories: 620,
                      nationalCuisines: [
                        {
                          label: "American",
                          iri: "http://example.com/cuisine/american",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Griddled",
                          iri: "http://example.com/prep/griddled",
                        },
                      ],
                      spicinessLevel: "Not at all",
                    },
                    {
                      iri: "https://example.com/menu-item/french-toast",
                      title: "Brioche French Toast",
                      description:
                        "Golden brioche slices soaked in vanilla custard, topped with berries and powdered sugar.",
                      visibility: true,
                      price: 8.2,
                      image: "images/brioche-french-toast.jpg",
                      allergens: [
                        {
                          label: "Gluten",
                          iri: "http://example.com/allergen/gluten",
                        },
                        {
                          label: "Milk",
                          iri: "http://example.com/allergen/milk",
                        },
                        {
                          label: "Eggs",
                          iri: "http://example.com/allergen/eggs",
                        },
                      ],
                      suitableForDiets: [],
                      ingredients: [
                        {
                          label: "Brioche",
                          iri: "http://example.com/ingredient/brioche",
                        },
                        {
                          label: "Egg",
                          iri: "http://example.com/ingredient/egg",
                        },
                        {
                          label: "Berries",
                          iri: "http://example.com/ingredient/berries",
                        },
                      ],
                      servingSize: 300,
                      calories: 580,
                      nationalCuisines: [
                        {
                          label: "French",
                          iri: "http://example.com/cuisine/french",
                        },
                      ],
                      preparationMethods: [
                        {
                          label: "Pan-fried",
                          iri: "http://example.com/prep/pan-fried",
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
          name: "Terrace Restaurant Paris",
          address: "Rue Vieille du Temple 45, 75004 Paris, France",
          openingHours: "Tue-Sun 09:00-23:00",
          menus: [
            {
              iri: "https://example.com/menu/dinner",
              title: "Dinner Menu",
              availability: "Tue-Sun 17:00-22:00",
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
        {
          iri: "https://example.com/outlet/paris-le-marais",
          name: "Terrace Restaurant Rome",
          address: "Via delle Terme, 42, 00184 Roma RM, Italy",
          openingHours: "Tue-Sun 08:00-22:00",
          menus: [
            {
              iri: "https://example.com/menu/dinner",
              title: "Dinner Menu",
              availability: "Tue-Sun 17:00-22:00",
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
