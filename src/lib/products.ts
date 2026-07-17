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
    salePrice: 20000,
    image: "/kids-learning.png",
    url: "https://lynk.id/pandusetia/8lm04rvymovl",
  },
  {
    id: 2,
    title: "200 E-book Cerita Anak Bahasa Indonesia",
    description: "",
    price: 99000,
    salePrice: 39000,
    image: "/cerita_anak.png",
    url: "https://lynk.id/pandusetia/ljx76k95p5pr",
  },
  {
    id: 3,
    title: "50 Worksheet Anak Bahasa Indonesia",
    description: "",
    price: 99000,
    salePrice: 19000,
    image: "/worksheet_anak_id.png",
    url: "https://lynk.id/pandusetia/ezdwpov99k6r",
  },
  {
    id: 4,
    title: "48 Storybook Animated Canva",
    description: "",
    price: 79000,
    salePrice: 19000,
    image: "/cerita_anak_en.png",
    url: "https://lynk.id/pandusetia/y7o8x5m4y0l1",
  },
  {
    id: 5,
    title: "50 Reels Cover with Hooks",
    description: "",
    price: 39000,
    salePrice: 9000,
    image: "/reels_cover_3.png",
    url: "https://lynk.id/pandusetia/kzrn79kxd8p3",
  },
];
