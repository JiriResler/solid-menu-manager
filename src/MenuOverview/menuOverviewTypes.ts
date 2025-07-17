export type Brand = {
  iri: string;
  name: string;
  logo: string;
  slogan: string;
  outlets: FoodEstablishmentOutlet[];
};

export type FoodEstablishmentOutlet = {
  iri: string;
  name: string;
  address: string;
  openingHours: string;
  menus: Menu[];
};

export type Menu = {
  iri: string;
  title: string;
  availability: string;
  description: string;
  visibility: boolean;
  currency: string;
  categories: MenuCategory[];
};

type MenuCategory = {
  iri: string;
  title: string;
  menuItems: MenuItem[];
};

type MenuItem = {
  iri: string;
  title: string;
  description: string;
  visibility: boolean;
  price: number;
  image: string;
  allergens: { label: string; iri: string }[];
  suitableForDiets: { label: string; iri: string }[];
  ingredients: { label: string; iri: string }[];
  servingSize: number;
  calories: number;
  nationalCuisines: { label: string; iri: string }[];
  preparationMethods: { label: string; iri: string }[];
  spicinessLevel: string;
};
