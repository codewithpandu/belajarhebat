export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  salePrice: number;
  image: string;
  url: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Kids Learning Bundle",
    description: "",
    price: 199000,
    salePrice: 19000,
    image: "/kids-learning.png",
    url: "https://lynk.id/pandusetia/8lm04rvymovl",
  },
];
