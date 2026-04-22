import { products, type Product } from "@/lib/products";

export function searchProducts(rawQuery: string): Product[] {
  const query = rawQuery.trim().toLowerCase();

  if (!query) {
    return products;
  }

  return products.filter((product) => {
    const haystack = [
      product.name,
      product.category,
      product.description,
      product.unit,
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });
}
