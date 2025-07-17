export type Brand = {
  logo: string;
  name: string;
  outlets: FoodEstablishmentOutlet[];
};

type FoodEstablishmentOutlet = {
  address: string;
  openingHours: string;
  menus: Menu[];
};

type Menu = {
  title: string;
  availability: string;
  description: string;
  visibility: boolean;
  currency: string;
  categories: MenuCategory[];
};

type MenuCategory = {
  title: string;
  menuItems: MenuItem[];
};

type MenuItem = {
  title: string;
  description: string;
  visibility: boolean;
  price: number;
  image: string;
  allergens: string[];
  suitableForDiets: string[];
  ingredients: string[];
  servingSize: number;
  calories: number;
  nationalCuisines: string[];
  preparationMethods: string[];
  spicinessLevel: string;
};
