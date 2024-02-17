import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "@/types/product";

const RAPID_API_URL = "https://movies-tv-shows-database.p.rapidapi.com/";
const RAPID_API_HEADERS = {
  "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
  "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
};

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  keepUnusedDataFor: 60,
  endpoints: (builder) => {
    return {
      getProducts: builder.query({
        query: () => ({
          url: RAPID_API_URL,
          method: "GET",
          params: {
            page: "1",
          },
          headers: {
            Type: "get-trending-movies",
            ...RAPID_API_HEADERS,
          },
        }),
        transformResponse: (response: any): Product[] =>
          response.movie_results.map((movie: any) => ({
            id: movie.imdb_id,
            title: movie.title,
            year: movie.year,
          })) as Product[],
      }),
      getProduct: builder.query({
        query: (id: string) => {
          return {
            url: RAPID_API_URL,
            method: "GET",
            params: {
              movieid: id,
            },
            headers: {
              Type: "get-movie-details",
              ...RAPID_API_HEADERS,
            },
          };
        },
        transformResponse: (response: any): Product => {
          return {
            id: response.imdb_id,
            title: response.title,
            year: response.year,
          } as Product;
        },
      }),
    };
  },
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
