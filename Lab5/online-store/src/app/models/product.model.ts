export interface Product {
  id: number;
  name: string;
  categoryId: number;
  likes: number;
  description: string;
  price: number;
  rating: number;
  image: string; // main image
  images: string[];
  link: string;
}
