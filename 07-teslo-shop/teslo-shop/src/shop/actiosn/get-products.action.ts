import { tesloApi } from "@/api/teslo-api";
import type { ProductsResponse } from "@/interfaces/products.response";

interface Options {
  limit?: number | string;
  offset?: number | string;
  sizes?: string;
  gender?: string;
  minPrice?: number;
  maxPrice?: number;
  query?: string;
}

export const getProductsAction = async (
  props: Options
): Promise<ProductsResponse> => {
  const { limit, offset, gender, sizes, minPrice, maxPrice, query } = props;
  const { data } = await tesloApi.get<ProductsResponse>("/products", {
    params: {
      limit,
      offset,
      gender,
      sizes,
      minPrice,
      maxPrice,
      q: query,
    },
  });

  const productsWithImageUrl = data.products.map((product) => ({
    ...product,
    images: product.images.map(
      (image) => `${import.meta.env.VITE_API_URL}/files/product/${image}`
    ),
  }));

  return {
    ...data,
    products: productsWithImageUrl,
  };
};
