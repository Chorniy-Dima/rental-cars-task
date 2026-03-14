import axios from "axios";
import { Car, Filter } from "@/types/Car";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getCars = async (filter: Filter, page: number): Promise<Car[]> => {
  const { data } = await api.get("/cars", {
    params: {
      brand: filter.brand,
      rentalPrice: filter.rentalPrice,
      minMileage: filter.minMileage,
      maxMileage: filter.maxMileage,
      limit: filter.limit,
      page,
    },
  });
  return data;
};

export const getCarById = async (id: string): Promise<Car> => {
  const { data } = await api.get(`/cars/${id}`);
  return data;
};

export const getBrands = async (): Promise<string[]> => {
  const { data } = await api.get("/brands");
  return data;
};
